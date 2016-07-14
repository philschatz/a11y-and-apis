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

// Helper for generating tests. This lists all headers
async function macroExplore(t, pattern, values) {
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
    return text.includes('About Us');
  });
  const x = await driver.findElements({css: 'h1,h2,.title'});
  for (var y of x) {
    const t = await y.getText();
    console.log(pattern, ':', t);
  }
};

test.serial(macro, 'http://cnx.org',           'Discover learning materials in an Open Space');
test.serial(macro, 'https://cnx.org',          'Discover learning materials in an Open Space');
test.serial(macro, 'https://cnx.org/browse',   'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/contents', 'Welcome to the OpenStax CNX Library');
test.serial(macro, 'https://cnx.org/tos',      'OpenStax CNX Service and Repository User Agreement');
test.serial(macro, 'https://cnx.org/about',    'How it works');
test.serial(macro, 'https://cnx.org/donate',   'Your donation makes a difference');
test.serial(macro, 'https://cnx.org/license',  'Frequently asked IP (Intellectual Property) and legal questions');
test.serial(macro, 'https://cnx.org/search',   'Advanced Search');

test.serial(macro, 'http://cnx.org/search?q=:searchText', 'results found', {searchText: 'physics'});
test.serial(macro, 'https://cnx.org/search?q=:searchText', 'results found', {searchText: 'physics'});
test.serial(macro, 'https://cnx.org/contents/:uuid', 'Introduction to Science and the Realm of Physics, Physical Quantities, and Units',
  {uuid: '031da8d3-b525-429c-80cf-6c8ed997733a'}
);
// Untested - http://cnx.org/users/role-acceptance
// Untested - http://cnx.org/workspace

test.serial(macro, 'https://openstax.org', 'Our Impact');
test.serial(macro, 'https://openstax.org/subjects', 'About Our Textbooks');

test.serial(macro, 'https://openstax.org/partners', 'Rice Online Learning');
// test.serial(macroGen, 'https://openstax.org/details');
test.serial(macro, 'https://openstax.org/blog', 'Read more great stories');
test.serial(macro, 'https://openstax.org/tos', 'Terms of Use');
test.serial(macro, 'https://openstax.org/tou', 'Terms of Use');
test.serial(macro, 'https://openstax.org/404', 'Uh-oh, no page here');
// test.serial(macroGen, 'https://openstax.org/about');
test.serial(macro, 'https://openstax.org/about-us', 'Changing the world is a team effort');
test.serial(macro, 'https://openstax.org/accessibility-statement', 'Web Accessibility');
test.serial(macro, 'https://openstax.org/adopters', 'Complete list of institutions that have adopted OpenStax');
test.serial(macro, 'https://openstax.org/adoption', 'Let us know you’re using OpenStax');
test.serial(macro, 'https://openstax.org/adoption-confirmation', 'Thank you for adopting OpenStax!');
test.serial(macro, 'https://openstax.org/article', 'Read more great stories');
test.serial(macro, 'https://openstax.org/blog', 'Read more great stories');
// test.serial(macroGen, 'https://openstax.org/books');
test.serial(macro, 'https://openstax.org/comp-copy', 'Request an iBooks Complimentary Copy');
test.serial(macro, 'https://openstax.org/comp-copy-confirmation', 'Thank you for requesting an iBooks comp copy.');
test.serial(macro, 'https://openstax.org/contact', 'Mailing Address');
test.serial(macro, 'https://openstax.org/contact-thank-you', 'Thanks for contacting us');
test.serial(macro, 'https://openstax.org/details/university-physics', 'University Physics');
test.serial(macro, 'https://openstax.org/faculty-confirmation', 'Thank you for applying for an instructor account!');
// test.serial(macroGen, 'https://openstax.org/faculty-verification'); // Redirects to login
test.serial(macro, 'https://openstax.org/finish-profile', 'Finish your OpenStax profile');
test.serial(macro, 'https://openstax.org/finished-no-verify', 'Your new account has been created. Thank you for joining the OpenStax community!');
test.serial(macro, 'https://openstax.org/finished-verify', 'Thank you for applying for an instructor account!');
test.serial(macro, 'https://openstax.org/foundation', 'The Bill & Melinda Gates Foundation');
test.serial(macro, 'https://openstax.org/higher-ed', 'Free textbooks. High quality. No catch.');
test.serial(macro, 'https://openstax.org/interest', 'OpenStax College Interest Form');
test.serial(macro, 'https://openstax.org/interest-confirmation', 'Thanks for telling us about yourself!');
test.serial(macro, 'https://openstax.org/impact', 'We measure our success in access.');
test.serial(macro, 'https://openstax.org/k-12', 'Access for K-12');
// test.serial(macroGen, 'https://openstax.org/license');
test.serial(macro, 'https://openstax.org/renewal', 'Let us know you’re still using OpenStax');
test.serial(macro, 'https://openstax.org/mass-renewal', 'Update us on how you’re using OpenStax');
test.serial(macro, 'https://openstax.org/subjects', 'Standard Scope and Sequence');
// test.serial(macroGen, 'https://openstax.org/support');
