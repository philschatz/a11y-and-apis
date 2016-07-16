# https://tutor-{env}.openstax.org/courses/{courseId}/t/guide/student/{roleId}

![image](./tutor-{env}.openstax.org_courses_{courseId}_t_guide_student_{roleId}.png)

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
              0.399343345192471,
              0.990959804212301
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 0,
            "sample_size_interpretation": "below",
            "unique_learner_count": 0,
            "value": 0.562745914473422,
            "value_interpretation": "medium"
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
              0.434350388763339,
              0.95713719576185
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 2,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1,
            "value": 0.770453517317548,
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
          0.441473756598886,
          0.968733381407464
        ],
        "confidence_interval_interpretation": "bad",
        "sample_size": 2,
        "sample_size_interpretation": "below",
        "unique_learner_count": 1,
        "value": 0.697475170372314,
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
              0.117813246062838,
              0.935649254393405
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 1,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1,
            "value": 0.61012560984335,
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
              0.382994381635556,
              0.826817304802315
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 5,
            "sample_size_interpretation": "above",
            "unique_learner_count": 1,
            "value": 0.675765614381951,
            "value_interpretation": "medium"
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
          0.162603714430814,
          0.930994750957806
        ],
        "confidence_interval_interpretation": "bad",
        "sample_size": 6,
        "sample_size_interpretation": "above",
        "unique_learner_count": 1,
        "value": 0.582632007011849,
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

