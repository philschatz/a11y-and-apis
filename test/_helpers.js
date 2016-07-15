import test from 'ava';
import selenium from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const {until} = selenium;

const builder = new selenium.Builder()
  .withCapabilities(selenium.Capabilities.phantomjs())
  .withCapabilities(selenium.Capabilities.chrome());

test.beforeEach(async t => {
  t.context.driver = builder.build();
});

test.afterEach(async t => {
  await t.context.driver.quit();
});


// Convert URLs patterns like 'https://cnx.org/contents/:uuid' into a real URL using `values`
function makeUrl(t, pattern, values={}) {
  let url = pattern;
  for (var key of Object.keys(values)) {
    url = url.replace(`:${key}`, values[key]);
  }
  // gotta comment this because the pattern starts with `https:` so it has a colon
  // if (url.indexOf(':') >= 0) {
  //   t.fail('one part of the pattern was still unmatched: ' + url)
  // }
  return url;
}

async function findSuccessText(t, successText) {
  const {driver} = t.context;
  // wait for the body element
  await driver.wait(selenium.until.elementLocated({css: 'body'}));
  // wait until the successText is present
  await driver.wait(async () => {
    // find the body element
    const body = await driver.findElement({css: 'body'});
    const text = await body.getText();
    return text.includes(successText);
  });
}

async function macro(t, pattern, successText, values) {
  const url = makeUrl(t, pattern, values);
  const {driver} = t.context;
  // open the page
  await driver.get(url);
  await findSuccessText(t, successText);
}
// macro.title = (providedTitle, pattern, successText, values) => makeUrl(pattern, values);
macro.title = (providedTitle, pattern) => pattern;

// Helper for generating tests. This lists all headers
async function macroExplore(t, pattern, values) {
  const url = makeUrl(t, pattern, values);
  const {driver} = t.context;
  // open the page
  await driver.get(url);
  // wait for the body element
  await driver.wait(selenium.until.elementLocated({css: 'h1,h2,.title,[role="navigation"]'}));
  const x = await driver.findElements({css: 'h1,h2,.title,label,button,.btn'});
  console.log('Elements found:', x.length);
  for (var y of x) {
    const t = await y.getText();
    console.log(pattern, ':', t);
  }
  t.fail('Done outputting available text to select on for the actual text');
};

async function macroLogin(t, pattern, successText, values) {
  const {username, password} = values;

  const url = makeUrl(t, pattern, values);
  const {driver} = t.context;
  // open the page
  await driver.get(url);
  // wait for the login prompt on accounts
  await driver.wait(selenium.until.elementLocated({css: '#auth_key'}));

  // Login
  const usernameInput = await driver.findElement({css: '#auth_key'});
  const passwordInput = await driver.findElement({css: '[type="password"]'});
  const submitButton = await driver.findElement({css: '[type="submit"]'});
  await usernameInput.sendKeys(username);
  await passwordInput.sendKeys(password);
  await submitButton.click();

  // await macro(t, pattern, successText, values);
  await findSuccessText(t, successText);
}
macroLogin.title = (providedTitle, pattern) => pattern;

async function macroLoginExplore(t, pattern, successText, values) {
  await macroLogin(t, pattern, successText, values);
  await macroExplore(t, pattern, values);
}
macroLoginExplore.title = (providedTitle, pattern) => pattern;



export {macro, macroExplore, macroLogin, macroLoginExplore}
