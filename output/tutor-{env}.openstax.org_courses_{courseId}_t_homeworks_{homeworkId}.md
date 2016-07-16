# https://tutor-{env}.openstax.org/courses/{courseId}/t/homeworks/{homeworkId}

![image](./tutor-{env}.openstax.org_courses_{courseId}_t_homeworks_{homeworkId}.png)

# AJAX Calls

## GET /api/plans/69

```json
{
  "id": "69",
  "ecosystem_id": "4",
  "type": "homework",
  "title": "3 part MPQ",
  "is_feedback_immediate": false,
  "is_draft": false,
  "is_publishing": false,
  "is_published": true,
  "publish_last_requested_at": "2016-07-06T19:30:58.399Z",
  "publish_job": {
    "id": "af8f9add-cb30-4973-be4c-42295287bd60",
    "status": "succeeded",
    "progress": 1,
    "errors": []
  },
  "publish_job_url": "/api/jobs/af8f9add-cb30-4973-be4c-42295287bd60",
  "first_published_at": "2016-07-06T19:30:59.515Z",
  "last_published_at": "2016-07-06T19:30:59.515Z",
  "settings": {
    "page_ids": [
      "314"
    ],
    "exercise_ids": [
      "2994"
    ],
    "exercises_count_dynamic": 3
  },
  "tasking_plans": [
    {
      "target_id": "3",
      "target_type": "period",
      "opens_at": "2016-07-06T05:01:00.000Z",
      "due_at": "2016-07-15T12:00:00.000Z"
    },
    {
      "target_id": "4",
      "target_type": "period",
      "opens_at": "2016-07-06T05:01:00.000Z",
      "due_at": "2016-07-15T12:00:00.000Z"
    },
    "... skipped 2"
  ]
}
```

## GET /api/courses/1/exercises/homework_core?page_ids%5B%5D=314&ecosystem_id=4

```json
{
  "total_count": 23,
  "items": [
    {
      "id": "3021",
      "url": "https://exercises-dev.openstax.org/exercises/40@1",
      "content": {
        "attachments": [],
        "tags": [
          "book:stax-apbio",
          "filter-type:import:hs",
          "... skipped 17"
        ],
        "uid": "40@1",
        "number": 40,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.260Z",
        "editors": [],
        "authors": [
          {
            "user_id": 1,
            "name": "OpenStax"
          }
        ],
        "copyright_holders": [
          {
            "user_id": 2,
            "name": "Rice University"
          }
        ],
        "derived_from": [],
        "is_vocab": false,
        "stimulus_html": "",
        "questions": [
          {
            "id": 40,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Some plants called lithops grow in the South African desert and look like stones. How were scientists able to determine they are living organisms?",
            "answers": [
              {
                "id": 159,
                "content_html": "Lithops are succulent plants and show a heterotrophic mode of nutrition.",
                "correctness": "0.0",
                "feedback_html": "Lithops are succulent plants, but they do not show a heterotrophic mode of nutrition."
              },
              {
                "id": 160,
                "content_html": "Lithops are autotrophic. They show growth and reproduction.",
                "correctness": "1.0",
                "feedback_html": "Lithops are succulent plants which can photosynthesize their own food and produce seeds."
              },
              "... skipped 2"
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Lithops grow, perform photosynthesis, and produce seeds."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice",
              "free-response"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot014",
          "type": "generic",
          "is_visible": false
        },
        "... skipped 17"
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3022",
      "url": "https://exercises-dev.openstax.org/exercises/41@1",
      "content": {
        "attachments": [],
        "tags": [
          "book:stax-apbio",
          "filter-type:import:hs",
          "... skipped 17"
        ],
        "uid": "41@1",
        "number": 41,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.270Z",
        "editors": [],
        "authors": [
          {
            "user_id": 1,
            "name": "OpenStax"
          }
        ],
        "copyright_holders": [
          {
            "user_id": 2,
            "name": "Rice University"
          }
        ],
        "derived_from": [],
        "is_vocab": false,
        "stimulus_html": "",
        "questions": [
          {
            "id": 41,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Consider the cardiovascular system. Rank in order of increasing complexity all its levels of organization starting with the hemoglobin.",
            "answers": [
              {
                "id": 163,
                "content_html": "red blood cells, hemoglobin, blood, veins, capillaries, cardiovascular system",
                "correctness": "0.0",
                "feedback_html": "Red blood cells have higher complexity than hemoglobin."
              },
              {
                "id": 164,
                "content_html": "oxygen, carbon dioxide, red blood cells, hemoglobin, blood, artery, cardiovascular system.",
                "correctness": "0.0",
                "feedback_html": "Oxygen and carbon dioxide are not part of the cardiovascular system."
              },
              "... skipped 2"
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "One example: hemoglobin, red blood cells, blood, artery, veins, capillaries, cardiovascular system."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice",
              "free-response"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot015",
          "type": "generic",
          "is_visible": false
        },
        "... skipped 17"
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    "... skipped 21"
  ]
}
```

