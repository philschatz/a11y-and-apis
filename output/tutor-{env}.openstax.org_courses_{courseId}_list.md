# https://tutor-{env}.openstax.org/courses/{courseId}/list

![image](./screenshots/tutor-{env}.openstax.org_courses_{courseId}_list.png)

# AJAX Calls

## GET /api/courses/1/guide

```json
{
  "children": [
    {
      "chapter_section": [
        1
      ],
      "children": [
        {
          "chapter_section": [
            1,
            1
          ],
          "clue": {
            "confidence_interval": [
              0.783821282853865,
              1
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 3,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1,
            "value": 0.93322550831793,
            "value_interpretation": "high"
          },
          "page_ids": [
            "313"
          ],
          "practice_count": 0,
          "questions_answered_count": 3,
          "title": "The Science of Biology"
        },
        {
          "chapter_section": [
            1,
            2
          ],
          "clue": {
            "confidence_interval": [
              0.820858723472075,
              1
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 4,
            "sample_size_interpretation": "above",
            "unique_learner_count": 1,
            "value": 0.948189315166727,
            "value_interpretation": "high"
          },
          "page_ids": [
            "314"
          ],
          "practice_count": 0,
          "questions_answered_count": 4,
          "title": "Themes and Concepts of Biology"
        }
      ],
      "clue": {
        "confidence_interval": [
          0,
          1
        ],
        "confidence_interval_interpretation": "bad",
        "sample_size": 0,
        "sample_size_interpretation": "below",
        "unique_learner_count": 1,
        "value": 0.5,
        "value_interpretation": "medium"
      },
      "page_ids": [
        "313",
        "314"
      ],
      "practice_count": 0,
      "questions_answered_count": 7,
      "title": "The Study of Life"
    }
  ],
  "page_ids": [
    "313",
    "314"
  ],
  "period_id": "2",
  "title": "Biology For AP® Courses"
}
```


# WCAG2AAA Errors

Showing first 50 of 56 errors

```
warning a[href='https://accounts-dev.openstax.org/profile'][target='_blank'] WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3
warning a[role='menuitem'][tabindex='-1'][target='_blank'][href='http://openstax.force.com/support?l=en_US&c=Products%3ATutor'] WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3
ERROR a[href='#'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a[role='tab'][href=''][tabindex='0'][aria-selected='true'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
ERROR a[role='tab'][href=''][tabindex='-1'][aria-selected='false'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
warning a[role='tab'][href=''][tabindex='-1'][aria-selected='false'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
ERROR div.progress-label.col-sm-3.col-sm-offset-0.col-xs-5.col-xs-offset-2 WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.due-at-label.col-sm-2.col-xs-5 WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button.-hide-button.btn.btn-default[type='button'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
warning div.column-icon.col-sm-1.col-xs-2 WCAG2AAA.Principle1.Guideline1_3.1_3_1.H42
ERROR button[aria-describedby='progress-bar-tooltip-1'][type='button'].btn-block.btn.btn-default WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR span.count WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR button[aria-describedby='progress-bar-tooltip-2'][type='button'].btn-block.btn.btn-default WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR span.count WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a.view-reference-guide[target='_blank'][href='/books/1/'] WCAG2AAA.Principle3.Guideline3_2.3_2_5.H83.3
warning div WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.BgImage
ERROR a[href='#spy'].debug-toggle-link WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
undefined undefined undefined
```

