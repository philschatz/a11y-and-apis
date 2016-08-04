# https://cnx.org/search

![image](./screenshots/cnx.org_search.png)

# AJAX Calls

## GET https://cnx.org/users/profile

```json
"<!DOCTYPE html><html lang=\"en-US\"><head><title>OpenStax CNX</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-sca ... 733 more"
```

## GET https://archive.cnx.org/extras

```json
{
  "featuredLinks": [
    {
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 706 more",
      "id": "d6db603c-cd31-4ca4-be19-d29734673b90",
      "legacy_id": "col11227",
      "legacy_version": "1.4",
      "resourcePath": "/resources/4c2732eca36eb7b56ae1b67dcb510e94744b6c99",
      "title": "Business Fundamentals",
      "type": "CNX Featured",
      "version": "4.3"
    },
    {
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 232 more",
      "id": "e7b71f2c-a51e-4c9f-8db2-066a4c3643e4",
      "legacy_id": "col10449",
      "legacy_version": "1.7",
      "resourcePath": "/resources/5fc217ae874f70e5194c172c8be4083abe4282ac",
      "title": "Images of Memorable Cases: 50 Years at the Bedside",
      "type": "CNX Featured",
      "version": "7.2"
    },
    "... skipped 56"
  ],
  "languages_and_count": [
    [
      "... skipped 2"
    ],
    [
      2,
      "... skipped 1"
    ],
    "... skipped 60"
  ],
  "licenses": [
    {
      "code": "by",
      "isValidForPublication": true,
      "name": "Creative Commons Attribution License",
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "version": "4.0"
    },
    {
      "code": "by-nc-sa",
      "isValidForPublication": false,
      "name": "Creative Commons Attribution-NonCommercial-ShareAlike License",
      "url": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      "version": "4.0"
    },
    "... skipped 9"
  ],
  "messages": [],
  "subjects": [
    {
      "count": {
        "collection": 833,
        "module": 14732
      },
      "id": 5,
      "name": "Science and Technology"
    },
    {
      "count": {
        "collection": 246,
        "module": 3723
      },
      "id": 7,
      "name": "Social Sciences"
    },
    "... skipped 4"
  ]
}
```

## GET https://archive.cnx.org/extras

```json
{
  "featuredLinks": [
    {
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 706 more",
      "id": "d6db603c-cd31-4ca4-be19-d29734673b90",
      "legacy_id": "col11227",
      "legacy_version": "1.4",
      "resourcePath": "/resources/4c2732eca36eb7b56ae1b67dcb510e94744b6c99",
      "title": "Business Fundamentals",
      "type": "CNX Featured",
      "version": "4.3"
    },
    {
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 232 more",
      "id": "e7b71f2c-a51e-4c9f-8db2-066a4c3643e4",
      "legacy_id": "col10449",
      "legacy_version": "1.7",
      "resourcePath": "/resources/5fc217ae874f70e5194c172c8be4083abe4282ac",
      "title": "Images of Memorable Cases: 50 Years at the Bedside",
      "type": "CNX Featured",
      "version": "7.2"
    },
    "... skipped 56"
  ],
  "languages_and_count": [
    [
      "... skipped 2"
    ],
    [
      2,
      "... skipped 1"
    ],
    "... skipped 60"
  ],
  "licenses": [
    {
      "code": "by",
      "isValidForPublication": true,
      "name": "Creative Commons Attribution License",
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "version": "4.0"
    },
    {
      "code": "by-nc-sa",
      "isValidForPublication": false,
      "name": "Creative Commons Attribution-NonCommercial-ShareAlike License",
      "url": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      "version": "4.0"
    },
    "... skipped 9"
  ],
  "messages": [],
  "subjects": [
    {
      "count": {
        "collection": 833,
        "module": 14732
      },
      "id": 5,
      "name": "Science and Technology"
    },
    {
      "count": {
        "collection": 246,
        "module": 3723
      },
      "id": 7,
      "name": "Social Sciences"
    },
    "... skipped 4"
  ]
}
```


# WCAG2AAA Errors

Showing first 50 of 37 errors

```
warning a[href='#scrollable-content'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
warning a.navbar-brand[href='/'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning label WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
ERROR input[type='text'][name='author'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
ERROR input[type='text'][name='author'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
ERROR input[type='text'][name='title'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
ERROR input[type='text'][name='title'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning label WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
ERROR select[name='subject'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select[name='subject'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select[name='subject'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning select[name='subject'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2
ERROR input[type='text'][name='keywords'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
ERROR input[type='text'][name='keywords'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning label WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
ERROR select[name='type'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select[name='type'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select[name='type'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning select[name='type'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2
ERROR select[name='language'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select[name='language'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select[name='language'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning select[name='language'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2
warning label WCAG2AAA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
ERROR select[name='pubYear'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select[name='pubYear'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select[name='pubYear'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning select[name='pubYear'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2
ERROR select[name='sort'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select[name='sort'].form-control WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select[name='sort'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.F68
warning select[name='sort'].form-control WCAG2AAA.Principle1.Guideline1_3.1_3_1.H85.2
ERROR button[type='submit'].btn.col-sm-3 WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning span.secondary.facebook.circle WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning span.secondary.twitter.circle WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning span.secondary.google.circle WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning span.secondary.mail.circle WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
```

