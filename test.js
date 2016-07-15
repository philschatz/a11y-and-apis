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
test.skip.serial(macro, 'http://cnx.org/users/role-acceptance');
test.skip.serial(macro, 'http://cnx.org/workspace');



test.serial(macro, 'https://openstax.org', 'Our Impact');
test.serial(macro, 'https://openstax.org/subjects', 'About Our Textbooks');

test.serial(macro, 'https://openstax.org/partners', 'Rice Online Learning');
test.skip.serial(macro, 'https://openstax.org/details');
test.serial(macro, 'https://openstax.org/blog', 'Read more great stories');
test.serial(macro, 'https://openstax.org/tos', 'Terms of Use');
test.serial(macro, 'https://openstax.org/tou', 'Terms of Use');
test.serial(macro, 'https://openstax.org/404', 'Uh-oh, no page here');
test.skip.serial(macro, 'https://openstax.org/about');
test.serial(macro, 'https://openstax.org/about-us', 'Changing the world is a team effort');
test.serial(macro, 'https://openstax.org/accessibility-statement', 'Web Accessibility');
test.serial(macro, 'https://openstax.org/adopters', 'Complete list of institutions that have adopted OpenStax');
test.serial(macro, 'https://openstax.org/adoption', 'Let us know you’re using OpenStax');
test.serial(macro, 'https://openstax.org/adoption-confirmation', 'Thank you for adopting OpenStax!');
test.serial(macro, 'https://openstax.org/article', 'Read more great stories');
test.serial(macro, 'https://openstax.org/blog', 'Read more great stories');
test.skip.serial(macro, 'https://openstax.org/books');
test.serial(macro, 'https://openstax.org/comp-copy', 'Request an iBooks Complimentary Copy');
test.serial(macro, 'https://openstax.org/comp-copy-confirmation', 'Thank you for requesting an iBooks comp copy.');
test.serial(macro, 'https://openstax.org/contact', 'Mailing Address');
test.serial(macro, 'https://openstax.org/contact-thank-you', 'Thanks for contacting us');
test.serial(macro, 'https://openstax.org/details/university-physics', 'University Physics');
test.serial(macro, 'https://openstax.org/faculty-confirmation', 'Thank you for applying for an instructor account!');
test.skip.serial(macro, 'https://openstax.org/faculty-verification'); // Redirects to login
test.serial(macro, 'https://openstax.org/finish-profile', 'Finish your OpenStax profile');
test.serial(macro, 'https://openstax.org/finished-no-verify', 'Your new account has been created. Thank you for joining the OpenStax community!');
test.serial(macro, 'https://openstax.org/finished-verify', 'Thank you for applying for an instructor account!');
test.serial(macro, 'https://openstax.org/foundation', 'The Bill & Melinda Gates Foundation');
test.serial(macro, 'https://openstax.org/higher-ed', 'Free textbooks. High quality. No catch.');
test.serial(macro, 'https://openstax.org/interest', 'OpenStax College Interest Form');
test.serial(macro, 'https://openstax.org/interest-confirmation', 'Thanks for telling us about yourself!');
test.serial(macro, 'https://openstax.org/impact', 'We measure our success in access.');
test.serial(macro, 'https://openstax.org/k-12', 'Access for K-12');
test.skip.serial(macro, 'https://openstax.org/license');
test.serial(macro, 'https://openstax.org/renewal', 'Let us know you’re still using OpenStax');
test.serial(macro, 'https://openstax.org/mass-renewal', 'Update us on how you’re using OpenStax');
test.serial(macro, 'https://openstax.org/subjects', 'Standard Scope and Sequence');
test.skip.serial(macro, 'https://openstax.org/support');


const TUTOR_CFG = {
  username: 'teacher01',
  password: 'password',
  env: 'dev',
  courseId: 1,
  taskId: 1,
  stepIndex: 1,
  milestoneIndex: 1,
  roleId: 2,
  date: '2016-07-14',
  planId: 69,
  homeworkId: 69,
  periodIndex: 1,
  bookId: 1,
  bookSection: 1,
  cnxId: 'd419f72d-3349-4449-ab34-c705409df4aa@6',
};

const TUTOR_STUDENT_CFG = {
  username: 'student01',
  password: 'password',
  env: 'dev',
  courseId: 1,
  practicePageId: 313,
};

const TUTOR_CC_CFG = {
  username: 'teacher01',
  password: 'password',
  env: 'dev',
  courseId: 2,
}

const TUTOR_QA_CFG = {
  username: 'content',
  password: 'password',
  env: 'dev',
  ecosystemId: 1,
  bookSection: 2.1,
}

test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/list', 'View All Topics', TUTOR_STUDENT_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/practice/?page_ids[]=:practicePageId', 'Practice', TUTOR_STUDENT_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/guide', 'Performance Forecast', TUTOR_STUDENT_CFG);


test.serial(macroLogin, 'https://tutor-:env.openstax.org/dashboard', 'Charles Morris', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId', 'Add Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/tasks/:taskId', 'Charles Morris', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/tasks/:taskId/steps/:stepIndex', 'Charles Morris', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/tasks/:taskId/steps/:stepIndex/:milestoneIndex', 'Charles Morris', TUTOR_CFG);
test.skip.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t', 'Charles MorrisFAIL', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/scores', 'Student Scores', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/guide', 'Weaker Areas', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/guide/student/:roleId', 'Performance Forecast for', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/calendar', 'Add Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/calendar/months/:date', 'Add Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/calendar/months/:date/plans/:planId', 'Charles Morris', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/questions', 'Question Library', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/cc-dashboard', 'Class Dashboard', TUTOR_CC_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/cc-dashboard/help', 'Welcome to Concept Coach', TUTOR_CC_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/cc-dashboard/guide', 'Class Dashboard', TUTOR_CC_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/homeworks/new', 'Add Homework Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/homeworks/:homeworkId', 'Edit Homework Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/readings/new', 'Add Reading Assignment', TUTOR_CFG);
test.skip.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/readings/:readingId', 'Edit Reading Assignment', TUTOR_CFG);
test.skip.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/externals/new', 'Add External Assignment', TUTOR_CFG);
test.skip.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/externals/:externalId', 'Edit External Assignment', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/events/new', 'Add Event', TUTOR_CFG);
test.skip.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/events/:eventId', 'Edit Event', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/settings', 'Rename Course', TUTOR_CFG);

// TODO: is this route used?
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/plans/:planId', 'Current Topics Performance', TUTOR_CFG);
// TODO: is this route used?
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/plans/:planId/stats', 'Current Topics Performance', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/plans/:planId/summary', 'Current Topics Performance', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/plans/:planId/summary/periods/:periodIndex', 'Current Topics Performance', TUTOR_CFG);
// TODO: Is this route used?
test.serial(macroLogin, 'https://tutor-:env.openstax.org/courses/:courseId/t/plans/:planId/summary/periods/:periodIndex/sections/:bookSection', 'Current Topics Performance', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/sandbox', 'Sandbox', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/books/:bookId', 'Show Teacher Edition', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/books/:bookId/section/:bookSection', 'Show Teacher Edition', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/books/:bookId/page/:cnxId', 'Show Teacher Edition', TUTOR_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/qa', 'Available Books', TUTOR_QA_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/qa/:ecosystemId', 'Available Books', TUTOR_QA_CFG);
test.serial(macroLogin, 'https://tutor-:env.openstax.org/qa/:ecosystemId/section/:bookSection', 'Available Books', TUTOR_QA_CFG);
