'use strict';
const fs = require('fs');
const puppeteer = require('puppeteer');

const TOOLS_PATH = require.resolve('accessibility-developer-tools/dist/js/axs_testing');

module.exports = async (url, opts) => {
    if (!(url && url.length > 0)) {
        throw new Error('Specify at least one URL');
    }
    opts = opts || {};

    const viewportSize = (opts.viewportSize || '').split('x');
    delete opts.viewportSize;

    opts = Object.assign({delay: 1}, opts, {
        width: viewportSize[0] || 1024,
        height: viewportSize[1] || 768
    });

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle'});
    // Inject the window.axs package
    await page.evaluate(`(function () { ${fs.readFileSync(TOOLS_PATH)} })()`);

    const results = await page.evaluate(() => {
        // This runs in the browser which now has access to window.axs
        const axs = window.axs; // eslint-disable-line no-undef
        const results = axs.Audit.run();
        const audit = results.map(function (result) {
            const DOMElements = result.elements;
            var message = '';

            if (DOMElements !== undefined) {
                for (var i = 0; i < DOMElements.length; i++) {
                    var el = DOMElements[i];
                    message += '\n';
                    // Get query selector not browser independent. catch any errors and
                    // default to simple tagName.
                    try {
                        message += axs.utils.getQuerySelectorText(el);
                    } catch (err) {
                        message += ' tagName:' + el.tagName;
                        message += ' id:' + el.id;
                    }
                }
            }

            return {
                code: result.rule.code,
                heading: result.rule.heading,
                result: result.result,
                severity: result.rule.severity,
                url: result.rule.url,
                elements: message
            };
        });

        return {
            audit: audit,
            report: axs.Audit.createReport(results)
        };
    });
    await browser.close();
    return results;
};
