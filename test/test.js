'use strict';
const test = require('ava');
const a11y = require('..');

process.chdir(__dirname);

const FIXTURE_PATH = `file://${__dirname}/fixture.html`;
const auditsWithHeader = (reports, header) => reports.audit.filter(x => x.heading === header);

test('test local input generates a report if callback is second param', async t => {
    t.plan(2);

    const reports = await a11y(FIXTURE_PATH);
    const ariaReports = auditsWithHeader(reports, 'ARIA state and property values must be valid');
    t.is(ariaReports.length, 1);
    t.is(ariaReports[0] && ariaReports[0].result, 'FAIL');
});

test('test local input generates a report if callback is third param', async t => {
    t.plan(2);

    const reports = await a11y(FIXTURE_PATH, null);
    const ariaReports = auditsWithHeader(reports, 'ARIA state and property values must be valid');
    t.is(ariaReports.length, 1);
    t.is(ariaReports[0] && ariaReports[0].result, 'FAIL');
});

test('test local input generates a report requiring a delay', async t => {
    t.plan(2);

    const reports = await a11y(FIXTURE_PATH, {delay: 5});
    const delayReports = auditsWithHeader(reports, 'Elements with ARIA roles must use a valid, non-abstract ARIA role');
    t.is(delayReports.length, 1);
    t.is(delayReports[0] && delayReports[0].result, 'FAIL');
});

test('test local input generates a verbose report', async t => {
    t.plan(1);

    const reports = await a11y(FIXTURE_PATH, {verbose: true});
    t.true(reports.report.indexOf('*** Begin accessibility audit results ***') !== -1);
});

test('test local input generates a report that includes all failures for a given violation', async t => {
    t.plan(2);

    const reports = await a11y(FIXTURE_PATH);
    const matchingReports = auditsWithHeader(reports, 'Controls and media elements should have labels');
    t.is(matchingReports.length, 1);
    t.is(matchingReports[0] && matchingReports[0].elements.match(/\n/g).length, 3);
});
