import test from 'ava';
import {macro} from '../_helpers';
import {tutorLogin} from './_helpers';

const CONFIG = {
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

const CC_CONFIG = {
  // Commented because you are already logged in
  // username: 'teacher01',
  // password: 'password',
  env: 'dev',
  courseId: 2,
}


// Logs in as the correct user
tutorLogin('https://tutor-{env}.openstax.org/dashboard', CONFIG);


test.serial(macro, 'https://tutor-{env}.openstax.org/dashboard', 'Charles Morris', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}', 'Add Assignment', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}', 'Charles Morris', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}/steps/{stepIndex}', 'Charles Morris', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}/steps/{stepIndex}/{milestoneIndex}', 'Charles Morris', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t', 'Charles MorrisFAIL', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/scores', 'Student Scores', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/guide', 'Weaker Areas', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/guide/student/{roleId}', 'Performance Forecast for', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar', 'Add Assignment', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar/months/{date}', 'Add Assignment', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar/months/{date}/plans/{planId}', 'Charles Morris', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/questions', 'Question Library', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard', 'Class Dashboard', CC_CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard/help', 'Welcome to Concept Coach', CC_CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard/guide', 'Class Dashboard', CC_CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/homeworks/new', 'Add Homework Assignment', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/homeworks/{homeworkId}', 'Edit Homework Assignment', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/readings/new', 'Add Reading Assignment', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/readings/{readingId}', 'Edit Reading Assignment', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/externals/new', 'Add External Assignment', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/externals/{externalId}', 'Edit External Assignment', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/events/new', 'Add Event', CONFIG);
test.skip.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/events/{eventId}', 'Edit Event', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/settings', 'Rename Course', CONFIG);

// TODO: is this route used?
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}', 'Current Topics Performance', CONFIG);
// TODO: is this route used?
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/stats', 'Current Topics Performance', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary', 'Current Topics Performance', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary/periods/{periodIndex}', 'Current Topics Performance', CONFIG);
// TODO: Is this route used?
test.serial(macro, 'https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary/periods/{periodIndex}/sections/{bookSection}', 'Current Topics Performance', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/sandbox', 'Sandbox', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/books/{bookId}', 'Show Teacher Edition', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/books/{bookId}/section/{bookSection}', 'Show Teacher Edition', CONFIG);
test.serial(macro, 'https://tutor-{env}.openstax.org/books/{bookId}/page/{cnxId}', 'Show Teacher Edition', CONFIG);
