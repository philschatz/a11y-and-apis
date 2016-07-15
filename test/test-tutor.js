import test from 'ava';
import {macro, macroExplore, macroLogin, macroLoginExplore} from './_helpers';


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
