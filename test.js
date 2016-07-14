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
function makeUrl(pattern, values={}) {
  let url = pattern;
  for (var key of Object.keys(values)) {
    url = url.replace(`:${key}`, values[key]);
  }
  return url;
}

async function macro(t, pattern, successText, values) {
  const url = makeUrl(pattern, values);
  const {driver} = t.context;
  // open the page
  await driver.get(url);
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
// macro.title = (providedTitle, pattern, successText, values) => makeUrl(pattern, values);
macro.title = (providedTitle, pattern) => pattern;


test.serial(macro, 'https://cnx.org',          'Discover learning materials in an Open Space');
test.serial(macro, 'https://cnx.org/browse',   'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/contents', 'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/tos',      'OpenStax CNX Service and Repository User Agreement');
test.serial(macro, 'https://cnx.org/about',    'How it works');
test.serial(macro, 'https://cnx.org/donate',   'Your donation makes a difference');
test.serial(macro, 'https://cnx.org/license',  'Frequently asked IP (Intellectual Property) and legal questions');
test.serial(macro, 'https://cnx.org/search',   'Advanced Search');

test.serial(macro, 'http://cnx.org/search?q=:searchText', 'results found', {searchText: 'physics'});
test.serial(macro, 'https://cnx.org/contents/:uuid', 'Introduction to Science and the Realm of Physics, Physical Quantities, and Units',
  {uuid: '031da8d3-b525-429c-80cf-6c8ed997733a'}
);
// Untested - http://cnx.org/users/role-acceptance
// Untested - http://cnx.org/workspace
