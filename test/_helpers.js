import fs from 'fs';
import path from 'path';
import test from 'ava';
import selenium from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const DEFAULT_TIMEOUT = 10 * 1000; // wait 10sec before failing a test (change this if doing performance tests)
const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const SCREENSHOT_PATH = path.join(__dirname, '../screenshots/');

const builder = new selenium.Builder()
  // .withCapabilities(selenium.Capabilities.chrome())
  .withCapabilities(selenium.Capabilities.phantomjs());

const driver = builder.build();

test.after.always(async t => {
  await driver.quit();
});

test.afterEach.always(async t => {
  // Sleep for 50ms before taking a screenshot so CSS animations finish
  // await driver.sleep(50);

  const data = await driver.takeScreenshot();
  const base64Data = data.replace(/^data:image\/png;base64,/, "");

  const filename = t.title
    .replace(/^afterEach\ for\ /, '') // ava prepends the test name to this string
    .replace(/http(s?)\:\/\//, '') // remove the leading `https://`
    .replace(/[\ \/\:\.]/g, '_');  // replace ` /:.` in URLs with underscore


  // Make sure the screenshot returns a promise
  return new selenium.promise.Promise((resolve, reject) => {
    fs.writeFile(`${SCREENSHOT_PATH}/${filename}.png`, base64Data, 'base64', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });

})

// Convert URLs patterns like 'https://cnx.org/contents/:uuid' into a real URL using `values`
function makeUrl(pattern, values={}) {
  let url = pattern;
  for (var key of Object.keys(values)) {
    url = url.replace(`:${key}`, values[key]);
  }
  return url;
}

async function findSuccessText(t, successText) {
  // const {driver} = t.context;
  // wait for the body element
  await driver.wait(selenium.until.elementLocated({css: 'body'}), DEFAULT_TIMEOUT);
  // wait until the successText is present
  await driver.wait(async () => {
    // find the body element
    const body = await driver.findElement({css: 'body'});
    const isTutorLoading = await driver.isElementPresent({css: '.is-loading, .calendar-loading'});
    const text = await body.getText();
    return text.includes(successText) && !isTutorLoading && !text.toLowerCase().includes('loading');
  }, DEFAULT_TIMEOUT);
}

async function macro(t, pattern, successText, values) {
  const url = makeUrl(pattern, values);
  // const {driver} = t.context;
  await driver.manage().window().setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
  // open the page
  await driver.get(url);
  await findSuccessText(t, successText);
}
// macro.title = (providedTitle, pattern, successText, values) => makeUrl(pattern, values);
macro.title = (providedTitle, pattern) => pattern;

// Helper for generating tests. This lists all headers
async function macroExplore(t, pattern, values) {
  const url = makeUrl(pattern, values);
  // const {driver} = t.context;
  // open the page
  await driver.get(url);
  // wait for the body element
  await driver.wait(selenium.until.elementLocated({css: 'h1,h2,.title,[role="navigation"]'}), DEFAULT_TIMEOUT);
  const x = await driver.findElements({css: 'h1,h2,.title,label,button,.btn'});
  console.log('Elements found:', x.length);
  for (var y of x) {
    const t = await y.getText();
    console.log(pattern, ':', t);
  }
  t.fail('Done outputting available text to select on for the actual text');
};


export {driver, makeUrl, macro, macroExplore}
