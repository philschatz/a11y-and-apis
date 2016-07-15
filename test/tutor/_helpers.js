import selenium from 'selenium-webdriver';
import test from 'ava';
import {macro, driver, makeUrl} from '../_helpers';

export function tutorLogin(LOGIN_URL_PATTERN, CONFIG) {

  test.before(async () => {
    const {username, password} = CONFIG;

    const url = makeUrl(LOGIN_URL_PATTERN, CONFIG);
    // const {driver} = t.context;
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

  });

  test.afterEach(async () => {
    // TODO: Close if there is an alert open
  });

}
