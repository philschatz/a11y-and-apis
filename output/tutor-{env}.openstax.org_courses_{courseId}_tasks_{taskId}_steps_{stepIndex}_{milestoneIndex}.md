# https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}/steps/{stepIndex}/{milestoneIndex}

![image](./screenshots/tutor-{env}.openstax.org_courses_{courseId}_tasks_{taskId}_steps_{stepIndex}_{milestoneIndex}.png)

# AJAX Calls

## GET /api/steps/1

```json
{
  "chapter_section": [
    1,
    0
  ],
  "content_html": "<body xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:qml=\"http://cnx.rice.edu/qml/ ... 2969 more",
  "content_url": "https://archive-staging-tutor.cnx.org/contents/dc74b6ed-d06a-4fef-8479-8eefd058b59a@23",
  "first_completed_at": "2016-06-30T12:00:00.000Z",
  "group": "core",
  "has_recovery": false,
  "id": "1",
  "is_completed": true,
  "labels": [],
  "last_completed_at": "2016-06-30T12:00:00.000Z",
  "related_content": [
    {
      "chapter_section": [
        1,
        0
      ],
      "title": "The Study of Life"
    }
  ],
  "task_id": "1",
  "title": "The Study of Life",
  "type": "reading"
}
```


# WCAG2A Errors

Showing first 50 of 7 errors

```
ERROR html WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2
ERROR a.milestones-toggle.active.[href='/courses/1/tasks/1/steps/1/'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
ERROR a.navbar-brand.navbar-brand[href='/dashboard/'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a#navbar-dropdown.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
ERROR a[href='#'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
ERROR a.arrow.right[data-step='1'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
ERROR a[href='#spy'].debug-toggle-link WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
```

