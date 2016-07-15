import test from 'ava';
import {macro} from '../_helpers';
import {tutorLogin} from './_helpers';

const CONFIG = {
  username: 'student01',
  password: 'password',
  env: 'dev',
  courseId: 1,
  practicePageId: 313,
};

tutorLogin('https://tutor-:env.openstax.org/dashboard', CONFIG);

test.serial(macro, 'https://tutor-:env.openstax.org/courses/:courseId/list', 'View All Topics', CONFIG);
test.serial(macro, 'https://tutor-:env.openstax.org/courses/:courseId/practice/?page_ids[]=:practicePageId', 'Practice', CONFIG);
test.serial(macro, 'https://tutor-:env.openstax.org/courses/:courseId/guide', 'Performance Forecast', CONFIG);
