# Goals

- make sure the browser URLs work since people can link to them forever
- give new developers an overview of the different pages (by autogenerating screenshots)
- collect performance metrics
- collect AJAX requests to help document our APIs for new developers

Selenium will:

- go to the page (maybe have to login)
- log AJAX responses
- wait for success text
- log time it took (maybe the testing framework does this for free)


# To Run

- `npm install` to install dependencies
- `npm test`


# cnx.org

Source https://github.com/Connexions/webview/blob/master/src/scripts/router.coffee

- `https://cnx.org/`
- `https://cnx.org/browse`
- `https://cnx.org/about`
- `https://cnx.org/donate/*`
- `https://cnx.org/contents`
- `https://cnx.org/tos`
- `https://cnx.org/license`
- `https://cnx.org/search`
- `https://cnx.org/users/role-acceptance`
- `https://cnx.org/workspace`
- `https://cnx.org/contents/...`
  - `1*2*2*2*2*2*2*2 = 128` variations (from the regexp below)
```
    ///
    ([^:@/]+)     # uuid up to delimiter
    @?            # Optional @
    ([^:/?]*)     # Revision
    :?            # Optional :
    ([^/?]*)      # Page number or uuid
    /?            # Optional /
    ([^?]*)       # Segment of title
    (\?.*)?       # params (optional)
    ///
```

# openstax.org

Source https://github.com/openstax/os-webview/blob/master/src/app/router.js

- `https://openstax.org/`
- `https://openstax.org/:number   (CMS)`
- `https://openstax.org/subjects`
- `https://openstax.org/subjects/*`
- `https://openstax.org/partners`
- `https://openstax.org/partners/*`
- `https://openstax.org/details`
- `https://openstax.org/details/*`
- `https://openstax.org/blog`
- `https://openstax.org/blog/*`
- `https://openstax.org/tos`
- `https://openstax.org/tou`

- `https://openstax.org/404`
- `https://openstax.org/about`
- `https://openstax.org/about-us`
- `https://openstax.org/accessibility-statement`
- `https://openstax.org/adopters`
- `https://openstax.org/adoption`
- `https://openstax.org/adoption-confirmation`
- `https://openstax.org/article`
- `https://openstax.org/partners`
- `https://openstax.org/blog`
- `https://openstax.org/books`
- `https://openstax.org/comp-copy`
- `https://openstax.org/comp-copy-confirmation`
- `https://openstax.org/contact`
- `https://openstax.org/contact-thank-you`
- `https://openstax.org/details`
- `https://openstax.org/faculty-confirmation`
- `https://openstax.org/faculty-verification`
- `https://openstax.org/finish-profile`
- `https://openstax.org/finished-no-verify`
- `https://openstax.org/finished-verify`
- `https://openstax.org/foundation`
- `https://openstax.org/higher-ed`
- `https://openstax.org/interest`
- `https://openstax.org/interest-confirmation`
- `https://openstax.org/impact`
- `https://openstax.org/k-12`
- `https://openstax.org/license`
- `https://openstax.org/renewal`
- `https://openstax.org/mass-renewal`
- `https://openstax.org/subjects`
- `https://openstax.org/support`


# tutor.openstax.org

Source: https://github.com/openstax/tutor-js/blob/master/src/router.cjsx

- `https://tutor.openstax.org/`
- `https://tutor.openstax.org/dashboard`
- `https://tutor.openstax.org/courses/:courseId`
- `https://tutor.openstax.org/courses/:courseId/cc-student-redirect`
- `https://tutor.openstax.org/courses/:courseId/assignment-links`
- `https://tutor.openstax.org/courses/:courseId/list`
- `https://tutor.openstax.org/courses/:courseId/tasks/:taskId`
- `https://tutor.openstax.org/courses/:courseId/tasks/:taskId/steps/:stepIndex`
- `https://tutor.openstax.org/courses/:courseId/tasks/:taskId/steps/:stepIndex/:milestoneIndex`
- `https://tutor.openstax.org/courses/:courseId/practice`
- `https://tutor.openstax.org/courses/:courseId/guide`
- `https://tutor.openstax.org/courses/:courseId/t`
- `https://tutor.openstax.org/courses/:courseId/t/scores`
- `https://tutor.openstax.org/courses/:courseId/t/guide`
- `https://tutor.openstax.org/courses/:courseId/t/guide/student/:roleId`
- `https://tutor.openstax.org/courses/:courseId/t/calendar`
- `https://tutor.openstax.org/courses/:courseId/t/calendar/months/:date`
- `https://tutor.openstax.org/courses/:courseId/t/calendar/months/:date/plans/:planId`
- `https://tutor.openstax.org/courses/:courseId/t/questions`
- `https://tutor.openstax.org/courses/:courseId/t/cc-dashboard`
- `https://tutor.openstax.org/courses/:courseId/t/cc-dashboard/help`
- `https://tutor.openstax.org/courses/:courseId/t/cc-dashboard/guide`
- `https://tutor.openstax.org/courses/:courseId/t/homeworks/new`
- `https://tutor.openstax.org/courses/:courseId/t/homeworks/:id`
- `https://tutor.openstax.org/courses/:courseId/t/readings/new`
- `https://tutor.openstax.org/courses/:courseId/t/readings/:id`
- `https://tutor.openstax.org/courses/:courseId/t/externals/new`
- `https://tutor.openstax.org/courses/:courseId/t/externals/:id`
- `https://tutor.openstax.org/courses/:courseId/t/events/new`
- `https://tutor.openstax.org/courses/:courseId/t/events/:id`
- `https://tutor.openstax.org/courses/:courseId/t/settings`
- `https://tutor.openstax.org/courses/:courseId/t/plans/:planId`
- `https://tutor.openstax.org/courses/:courseId/t/plans/:planId/stats`
- `https://tutor.openstax.org/courses/:courseId/t/plans/:planId/summary`
- `https://tutor.openstax.org/courses/:courseId/t/plans/:planId/summary/periods/:periodIndex`
- `https://tutor.openstax.org/courses/:courseId/t/plans/:planId/summary/periods/:periodIndex/sections/:section`
- `https://tutor.openstax.org/sandbox`
- `https://tutor.openstax.org/books/:courseId`
- `https://tutor.openstax.org/books/:courseId/section/:section`
- `https://tutor.openstax.org/books/:courseId/page/:cnxId`
- `https://tutor.openstax.org/qa`
- `https://tutor.openstax.org/qa/:ecosystemId`
- `https://tutor.openstax.org/qa/:ecosystemId/section/:section`


# TODO

- [x] write down all the browser URLs (as patterns) (102 URL patterns + 128 variations for cnx.org/contents/*)
- [ ] write down all the AJAX requests made by that URL (with links to vvv)
  - [ ] document each AJAX response in a separate file (using recordo to find them)
- [x] link patterns to source code (router)
- [ ] link AJAX responses to API page (if possible)
- [ ] each URL has
  - example values for the pattern
  - text to check for success/failure
  - optional time to wait (5sec)
- [ ] make a CI webhook that detects whenever these router files have changed and add a comment on the PR suggesting that this repo be updated
