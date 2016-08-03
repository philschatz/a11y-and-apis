import fs from 'fs';
import path from 'path';
import test from 'ava';
import selenium from 'selenium-webdriver';
import urltemplate from 'url-template';

import codeSnifferCode from './_code-sniffer-code';

// import {listenToAjax} from './_xhr-helper'; // read it from fs because babel inje

const DEFAULT_TIMEOUT = 30 * 1000; // wait 10sec before failing a test (change this if doing performance tests)
const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const OUTPUT_PATH = path.join(__dirname, '../output/');
const SCREENSHOT_DIRNAME = 'screenshots'
const SCREENSHOT_PATH = path.join(OUTPUT_PATH, SCREENSHOT_DIRNAME);

const builder = new selenium.Builder()
  .withCapabilities(selenium.Capabilities.chrome());
  // .withCapabilities(selenium.Capabilities.phantomjs());

const listenToAjax = fs.readFileSync(path.join(__dirname, '_xhr-helper.js'), 'utf8');


function titleToFilename(title) {
  return title
    .replace(/^afterEach\ for\ /, '') // ava prepends the test name to this string
    .replace(/http(s?)\:\/\//, '')    // remove the leading `https://`
    .replace(/[\ \/\:]/g, '_');     // replace ` /:` in URLs with underscore

}

// Modifies the JSON in-place
function simplifyJson(json, arrayMaxLen=2) {
  const STRING_MAX_LEN = 150;

  if (!json) {
    // skip if null (or falsy)
  } else if (typeof json === 'string') {
    if (json.length > STRING_MAX_LEN) {
      json = `${json.substring(0, STRING_MAX_LEN)} ... ${json.length - STRING_MAX_LEN} more`
    }
  } else if (Array.isArray(json)) {
    if (json.length > arrayMaxLen) {
      const len = json.length;
      json.splice(0, len - arrayMaxLen);
      json.push(`... skipped ${len - arrayMaxLen}`);
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

test.beforeEach(async t => {
  t.context.driver = builder.build();
})

test.afterEach(async t => {
  await t.context.driver.executeAsyncScript(codeSnifferCode);
  let wcagMessages = await t.context.driver.executeAsyncScript(function() {
    // Standards can be found in https://github.com/squizlabs/HTML_CodeSniffer/tree/master/Standards
    var cb = arguments[arguments.length - 1];

    function generateSelector(target) {
      var attr, i, j, ref, selector;
      selector = [target.tagName.toLowerCase()];
      for (i = j = 0, ref = target.attributes.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        attr = target.attributes.item(i);
        if (attr.name === 'style') {
          // discard style attributes
        }
        else if (attr.name === 'class') {
          selector.push("." + (attr.value.split(' ').join('.')));
        } else if (attr.name === 'id') {
          selector.push("#" + attr.value);
        } else if (attr.name !== 'data-reactid') {
          selector.push("[" + attr.name + "='" + attr.value + "']");
        }
      }
      return selector.join('');
    };

    var callback = function() {
      var messages = window.HTMLCS.getMessages()
      var messagesWithSelectorsInsteadOfElements = messages.map(function(msg) {
        var type = msg.type;
        var element = msg.element;
        var code = msg.code;
        var data = msg.data;
        // remove any border, because generateSelector will use the style attribute
        if (element && element.style) {
          delete element.style.border;
        }
        var selector = generateSelector(element);
        if (element && element.style) {
          element.style.border = '2px solid rgb(255, 0, 0)';
        }
        return {
          type: type,
          selector: selector,
          // element: element,
          code: code,
          data: data
        };
      });
      cb(messagesWithSelectorsInsteadOfElements);
    };
    var failCallback = callback;
    window.HTMLCS.process('WCAG2A', window.document, callback, failCallback);
  });
  // remove all the notices and just show warnings and errors
  wcagMessages = wcagMessages.filter(({type}) => type === 1 || type === 2);
  console.log('WCAG2A_ERRORS', wcagMessages.length);


  // only run when test was successful because phantomjs could have failed earlier
  const theLog = await t.context.driver.executeAsyncScript(function() {
    arguments[arguments.length - 1](window.__THE_LOG);
  });

  if (theLog.length > 0 || wcagMessages.length > 0) {

    const filename = titleToFilename(t.title);
    const pattern = t.title.replace(/^afterEach\ for\ /, ''); // ava prepends the test name to this string

    // Write out the XHR:LOAD requests to a markdown file
    var entries = theLog.filter((entry) => entry[0] === 'XHR:LOAD' && !/\.js$/.test(entry[2])) // exclude .js files (for openstax)
      .map((entry) => {
        console.error('MaPpInG', pattern, entry[2]); // log the browser URL and the AJAX URL for building an API
        const simplifiedJson = simplifyJson(entry[4]);
        return `## ${entry[1]} ${entry[2]}

\`\`\`json
${JSON.stringify(simplifiedJson, null, 2)}
\`\`\`
`;
      });

    const md = `# ${pattern}

![image](./${SCREENSHOT_DIRNAME}/${filename}.png)

# AJAX Calls

${entries.join('\n')}

# WCAG2A Errors

Showing first 50 of ${wcagMessages.length} errors

\`\`\`
${simplifyJson(wcagMessages, 50).map(({type, selector, code}) => {
  if (type === 1) {
    type = 'ERROR';
  } else if (type === 2) {
    type = 'warning';
  } else if (type === 3) {
    type = 'info';
  }
  return type + ' ' + selector + ' ' + code;
}).join('\n')}
\`\`\`

`;

    fs.writeFileSync(`${OUTPUT_PATH}/${filename}.md`, md);

  }

});

test.afterEach.always(async t => {
  // Sleep for 50ms before taking a screenshot so CSS animations finish
  // await driver.sleep(50);

  const data = await t.context.driver.takeScreenshot();
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

test.afterEach.always(async t => {
  await t.context.driver.quit();
});

// Convert URLs patterns like 'https://cnx.org/contents/:uuid' into a real URL using `values`
function makeUrl(pattern, values={}) {
  return urltemplate
    .parse(pattern)
    .expand(values);
}

async function findSuccessText(t, successText) {
  const {driver} = t.context;
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
  const {driver} = t.context;
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
  const {driver} = t.context;
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


export {makeUrl, macro, macroExplore}
