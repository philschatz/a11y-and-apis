# Goals

- make sure the browser URLs work since people can link to them forever
- give new developers an overview of the different pages (by autogenerating screenshots)
  - see [./output/](./output/#readme) for screenshots and samples (because there are a **TON** of URL screenshots)
- collect performance metrics
- collect AJAX requests to help document our APIs for new developers


# Api Blueprint files

- http://docs.openstaxcnx.apiary.io/ ([Source](./cnx.apib))
- http://docs.openstaxtutor.apiary.io/ ([Source](./tutor.apib))

# How it works

Selenium will:

1. go to the page (maybe have to login)
2. log AJAX responses
3. wait for success text
4. Run the WCAG2AAA accessibility audit and mark problem elements in red (using https://squizlabs.github.io/HTML_CodeSniffer/)
4. take a screenshot and save it to [./output/](./output/)
5. output any AJAX requests to a `.md` file
4. log time it took (maybe the testing framework does this for free)



# To Run

- `npm install` to install dependencies
- `npm test`
- `npm test -- test/cnx.js` to run just 1 test file. see [ava usage](https://github.com/avajs/ava#usage) for more arguments/options


# The URLs

## cnx.org

Code: [./test/cnx.js](./test/cnx.js)

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
  - `1*2*2*2*2*2*2*2 = 128` variations (from https://github.com/Connexions/webview/blob/master/src/scripts/helpers/links.coffee#L10-L22)

```
the `:` and page number might always go together
and probably the `/` and title
although i think the `/` is separate because you could do `uuid`, `uuid/` or `uuid/title`
`@` and revision probably go together
16 is probably a more reasonable estimate of actual permutations
```

## openstax.org

Code: [./test/openstax.js](./test/openstax.js)

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


## tutor.openstax.org

Code: [./test/tutor/](./test/tutor/)

Source: https://github.com/openstax/tutor-js/blob/master/src/router.cjsx

- `https://tutor-{env}.openstax.org/`
- `https://tutor-{env}.openstax.org/dashboard`
- `https://tutor-{env}.openstax.org/courses/{courseId}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/cc-student-redirect`
- `https://tutor-{env}.openstax.org/courses/{courseId}/assignment-links`
- `https://tutor-{env}.openstax.org/courses/{courseId}/list`
- `https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}/steps/{stepIndex}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}/steps/{stepIndex}/{milestoneIndex}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/practice`
- `https://tutor-{env}.openstax.org/courses/{courseId}/guide`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/scores`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/guide`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/guide/student/{roleId}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar/months/{date}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar/months/{date}/plans/{planId}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/questions`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard/help`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/cc-dashboard/guide`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/homeworks/new`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/homeworks/:id`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/readings/new`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/readings/:id`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/externals/new`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/externals/:id`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/events/new`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/events/:id`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/settings`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/stats`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary/periods/{periodIndex}`
- `https://tutor-{env}.openstax.org/courses/{courseId}/t/plans/{planId}/summary/periods/{periodIndex}/sections/{bookSection}`
- `https://tutor-{env}.openstax.org/sandbox`
- `https://tutor-{env}.openstax.org/books/{bookId}`
- `https://tutor-{env}.openstax.org/books/{bookId}/section/{bookSection}`
- `https://tutor-{env}.openstax.org/books/{bookId}/page/{cnxId}`
- `https://tutor-{env}.openstax.org/qa`
- `https://tutor-{env}.openstax.org/qa/{ecosystemId}`
- `https://tutor-{env}.openstax.org/qa/{ecosystemId}/section/{bookSection}`


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


- [ ] select based on `:not(.loading)`, maybe sleep a bit before making screenshots
