# https://tutor-{env}.openstax.org/courses/{courseId}/t/guide

![image](./screenshots/tutor-{env}.openstax.org_courses_{courseId}_t_guide.png)

# AJAX Calls

## GET /api/courses/1

```json
{
  "appearance_code": "biology",
  "book_pdf_url": "https://archive-staging-tutor.cnx.org/exports/d52e93f4-8653-4273-86da-3850001c0786@9.14.pdf",
  "default_due_time": "07:00",
  "default_open_time": "00:01",
  "ecosystem_id": "4",
  "id": "1",
  "is_college": false,
  "is_concept_coach": false,
  "name": "Biology I",
  "periods": [
    {
      "default_due_time": "07:00",
      "default_open_time": "00:01",
      "enrollment_code": "059521",
      "enrollment_url": "https://tutor-dev.openstax.org/enroll/059521",
      "id": "3",
      "is_archived": false,
      "name": "3rd"
    },
    {
      "default_due_time": "07:00",
      "default_open_time": "00:01",
      "enrollment_code": "569426",
      "enrollment_url": "https://tutor-dev.openstax.org/enroll/569426",
      "id": "4",
      "is_archived": false,
      "name": "4th"
    },
    "... skipped 2"
  ],
  "roles": [
    {
      "id": "1",
      "type": "teacher"
    }
  ],
  "salesforce_book_name": "Biology",
  "students": [],
  "time_zone": "Central Time (US & Canada)",
  "webview_url": "https://archive-staging-tutor.cnx.org/contents/d52e93f4-8653-4273-86da-3850001c0786@9.14"
}
```


# WCAG2A Errors

Showing first 50 of 10 errors

```
ERROR html WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2
ERROR a.navbar-brand.navbar-brand[href='/dashboard/'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a#navbar-dropdown.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
ERROR a[href='#'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a[role='tab'][href=''][aria-selected='true'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='tab'][href=''][aria-selected='false'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='tab'][href=''][aria-selected='false'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='tab'][href=''][aria-selected='false'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning h3 WCAG2A.Principle1.Guideline1_3.1_3_1_A.G141
ERROR a[href='#spy'].debug-toggle-link WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
```

