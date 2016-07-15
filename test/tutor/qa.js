import selenium from 'selenium-webdriver';
import test from 'ava';
import {macro} from '../_helpers';
import {tutorLogin} from './_helpers';

const CONFIG = {
  username: 'content',
  password: 'password',
  env: 'dev',
  ecosystemId: 1,
  bookSection: 2.1,
}

// Logs in as the correct user
tutorLogin('https://tutor-:env.openstax.org/dashboard', CONFIG);

test.serial(macro, 'https://tutor-:env.openstax.org/qa', 'Available Books', CONFIG);
test.serial(macro, 'https://tutor-:env.openstax.org/qa/:ecosystemId', 'Available Books', CONFIG);
test.serial(macro, 'https://tutor-:env.openstax.org/qa/:ecosystemId/section/:bookSection', 'Available Books', CONFIG);
