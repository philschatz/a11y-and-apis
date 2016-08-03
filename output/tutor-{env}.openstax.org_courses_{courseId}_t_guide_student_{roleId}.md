# https://tutor-{env}.openstax.org/courses/{courseId}/t/guide/student/{roleId}

![image](./screenshots/tutor-{env}.openstax.org_courses_{courseId}_t_guide_student_{roleId}.png)

# AJAX Calls

## GET /api/courses/1/guide/role/2

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
              0.34020793706504,
              0.793797208732559
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 7,
            "sample_size_interpretation": "above",
            "unique_learner_count": 1,
            "value": 0.567002572898799,
            "value_interpretation": "medium"
          },
          "page_ids": [
            "314"
          ],
          "practice_count": 0,
          "questions_answered_count": 7,
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
      "questions_answered_count": 10,
      "title": "The Study of Life"
    },
    {
      "chapter_section": [
        6
      ],
      "children": [
        {
          "chapter_section": [
            6,
            1
          ],
          "clue": {
            "confidence_interval": [
              0,
              1
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 1,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1,
            "value": 0.5,
            "value_interpretation": "medium"
          },
          "page_ids": [
            "338"
          ],
          "practice_count": 0,
          "questions_answered_count": 1,
          "title": "Energy and Metabolism"
        },
        {
          "chapter_section": [
            6,
            2
          ],
          "clue": {
            "confidence_interval": [
              0.84436497289566,
              1
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 5,
            "sample_size_interpretation": "above",
            "unique_learner_count": 1,
            "value": 0.957674282366725,
            "value_interpretation": "high"
          },
          "page_ids": [
            "339"
          ],
          "practice_count": 0,
          "questions_answered_count": 5,
          "title": "Potential, Kinetic, Free, and Activation Energy"
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
        "338",
        "339"
      ],
      "practice_count": 0,
      "questions_answered_count": 6,
      "title": "Metabolism"
    }
  ],
  "page_ids": [
    "338",
    "339",
    "... skipped 2"
  ],
  "period_id": "1",
  "title": "Biology For AP® Courses"
}
```


# WCAG2A Errors

Showing first 50 of 46 errors

```
ERROR html WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2
ERROR a.navbar-brand.navbar-brand[href='/dashboard/'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a#navbar-dropdown.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
ERROR a[href='#'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a[role='menuitem'][tabindex='-1'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning h3 WCAG2A.Principle1.Guideline1_3.1_3_1_A.G141
ERROR a[href='#spy'].debug-toggle-link WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
```

