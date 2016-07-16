# https://tutor-{env}.openstax.org/courses/{courseId}/tasks/{taskId}

![image](./tutor-{env}.openstax.org_courses_{courseId}_tasks_{taskId}.png)

# AJAX Calls

## GET /api/tasks/1

```json
{
  "id": "1",
  "type": "reading",
  "title": "Read Chapter 1. The Study of Life",
  "opens_at": "2016-06-24T05:01:00.000Z",
  "due_at": "2016-06-29T12:00:00.000Z",
  "last_worked_at": "2016-06-30T12:00:00.000Z",
  "is_shared": false,
  "steps": [
    {
      "id": "24",
      "task_id": "1",
      "type": "reading",
      "group": "core",
      "is_completed": true,
      "last_completed_at": "2016-06-30T12:00:00.000Z",
      "first_completed_at": "2016-06-30T12:00:00.000Z",
      "has_recovery": false,
      "related_content": [
        {
          "title": "Themes and Concepts of Biology",
          "chapter_section": [
            1,
            2
          ]
        }
      ],
      "labels": [],
      "content_url": "https://archive-staging-tutor.cnx.org/contents/cb7cf05b-7e16-4a53-a498-003b01ec3d7f@27",
      "chapter_section": [
        1,
        2
      ],
      "content_html": "<body xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:qml=\"http://cnx.rice.edu/qml/ ... 2410 more"
    },
    {
      "id": "25",
      "task_id": "1",
      "type": "exercise",
      "group": "personalized",
      "is_completed": false,
      "has_recovery": false,
      "related_content": [],
      "labels": [],
      "content_url": "https://exercises-dev.openstax.org/exercises/34@1",
      "is_in_multipart": false,
      "question_id": "34",
      "content": {
        "tags": [
          "book:stax-apbio",
          "filter-type:import:hs",
          "... skipped 17"
        ],
        "uid": "34@1",
        "number": 34,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.198Z",
        "editors": [],
        "authors": [
          {
            "user_id": "1",
            "name": "OpenStax"
          }
        ],
        "copyright_holders": [
          {
            "user_id": "2",
            "name": "Rice University"
          }
        ],
        "derived_from": [],
        "is_vocab": false,
        "stimulus_html": "",
        "questions": [
          {
            "id": "34",
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following statements does not represent a characteristic shared by all living organisms?",
            "answers": [
              {
                "id": "135",
                "content_html": "photosynthesis"
              },
              {
                "id": "136",
                "content_html": "reproduction"
              },
              "... skipped 2"
            ],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      }
    },
    "... skipped 23"
  ],
  "is_feedback_available": true,
  "spy": {
    "ecosystem_id": 1,
    "ecosystem_title": "Biology For AP® Courses (d52e93f4-8653-4273-86da-3850001c0786@9.14) - 2016-06-28 19:00:30 UTC"
  }
}
```

