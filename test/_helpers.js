import fs from 'fs';
import path from 'path';
import test from 'ava';
import selenium from 'selenium-webdriver';
import urltemplate from 'url-template';

// import {listenToAjax} from './_xhr-helper'; // read it from fs because babel inje

const DEFAULT_TIMEOUT = 30 * 1000; // wait 10sec before failing a test (change this if doing performance tests)
const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const SCREENSHOT_PATH = path.join(__dirname, '../output/');

const builder = new selenium.Builder()
  // .withCapabilities(selenium.Capabilities.chrome());
  .withCapabilities(selenium.Capabilities.phantomjs());

const driver = builder.build();

const listenToAjax = fs.readFileSync(path.join(__dirname, '_xhr-helper.js'), 'utf8');

function titleToFilename(title) {
  return title
    .replace(/^afterEach\ for\ /, '') // ava prepends the test name to this string
    .replace(/http(s?)\:\/\//, '')    // remove the leading `https://`
    .replace(/[\ \/\:]/g, '_');     // replace ` /:` in URLs with underscore

}

// Modifies the JSON in-place
function simplifyJson(json) {
  const ARRAY_MAX_LEN = 2;
  const STRING_MAX_LEN = 150;

  if (!json) {
    // skip if null (or falsy)
  } else if (typeof json === 'string') {
    if (json.length > STRING_MAX_LEN) {
      json = `${json.substring(0, STRING_MAX_LEN)} ... ${json.length - STRING_MAX_LEN} more`
    }
  } else if (Array.isArray(json)) {
    if (json.length > ARRAY_MAX_LEN) {
      const len = json.length;
      json.splice(0, len - ARRAY_MAX_LEN);
      json.push(`... skipped ${len - ARRAY_MAX_LEN}`);
    }
    json.forEach(simplifyJson);
  } else if (typeof json === 'object' && Object.keys(json).length > 0) {
    // Trim strings so they are readable
    for (const key of Object.keys(json)) {
      const value = json[key];
      // recurse
      json[key] = simplifyJson(value);
      // if (typeof value === 'string' && value.length > STRING_MAX_LEN) {
      //   json[key] = `${value.substring(0, STRING_MAX_LEN)} ... ${value.length - STRING_MAX_LEN} more`;
      // } else if (Array.isArray(value)) {
      //   // recurse
      //   simplifyJson(value);
      // }
    }
  }
  return json;
}

test.afterEach(async t => {
  // only run when test was successful because phantomjs could have failed earlier
  const theLog = await driver.executeAsyncScript(function() {
    arguments[arguments.length - 1](window.__THE_LOG);
  });

  if (theLog.length > 0) {

    // Write out the XHR:LOAD requests to a markdown file
    var entries = theLog.filter((entry) => entry[0] === 'XHR:LOAD')
      .map((entry) => {
        const simplifiedJson = simplifyJson(entry[4]);
        return `## ${entry[1]} ${entry[2]}

\`\`\`json
${JSON.stringify(simplifiedJson, null, 2)}
\`\`\`
`;
      });

    const filename = titleToFilename(t.title);
    const pattern = t.title.replace(/^afterEach\ for\ /, ''); // ava prepends the test name to this string
    const md = `# ${pattern}

![image](./${filename}.png)

# AJAX Calls

${entries.join('\n')}
`;

    fs.writeFileSync(`${SCREENSHOT_PATH}/${filename}.md`, md);

  }

});

test.after.always(async t => {
  await driver.quit();
});

test.afterEach.always(async t => {
  // Sleep for 50ms before taking a screenshot so CSS animations finish
  // await driver.sleep(50);

  const data = await driver.takeScreenshot();
  const base64Data = data.replace(/^data:image\/png;base64,/, "");

  const filename = titleToFilename(t.title);

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
  return urltemplate
    .parse(pattern)
    .expand(values);
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

  // It would be nice to have recordo already in place but it's not a global yet
  // TODO: expose a global var for recordo when recordo is turned on
  await driver.executeAsyncScript(listenToAjax);

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
