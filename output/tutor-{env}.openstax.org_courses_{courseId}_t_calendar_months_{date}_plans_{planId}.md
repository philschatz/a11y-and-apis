# https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar/months/{date}/plans/{planId}

![image](./tutor-{env}.openstax.org_courses_{courseId}_t_calendar_months_{date}_plans_{planId}.png)

# AJAX Calls

## GET /api/courses/1/dashboard?start_at=2016-06-30&end_at=2016-08-01

```json
{
  "plans": [
    {
      "id": "69",
      "is_trouble": false,
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
          "target_id": "1",
          "target_type": "period",
          "opens_at": "2016-07-06T05:01:00.000Z",
          "due_at": "2016-07-15T12:00:00.000Z"
        },
        {
          "target_id": "2",
          "target_type": "period",
          "opens_at": "2016-07-06T05:01:00.000Z",
          "due_at": "2016-07-15T12:00:00.000Z"
        },
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
        }
      ]
    },
    {
      "id": "96",
      "is_trouble": false,
      "ecosystem_id": "4",
      "type": "reading",
      "title": "assignment builder name",
      "description": "lkjlkj2",
      "is_draft": true,
      "is_publishing": false,
      "is_published": false,
      "settings": {
        "page_ids": [
          "369",
          "370",
          "371",
          "372"
        ]
      },
      "tasking_plans": [
        {
          "target_id": "3",
          "target_type": "period",
          "opens_at": "2016-07-09T05:01:00.000Z",
          "due_at": "2016-07-21T12:00:00.000Z"
        }
      ]
    }
  ],
  "tasks": [],
  "role": {
    "id": "1",
    "type": "teacher"
  },
  "course": {
    "name": "Biology I",
    "teachers": [
      {
        "id": "1",
        "role_id": "1",
        "first_name": "Charles",
        "last_name": "Morris"
      }
    ]
  }
}
```

## GET /api/plans/69/stats

```json
{
  "id": "69",
  "type": "homework",
  "title": "3 part MPQ",
  "stats": [
    {
      "period_id": "3",
      "name": "3rd",
      "mean_grade_percent": 33,
      "total_count": 11,
      "complete_count": 0,
      "partially_complete_count": 1,
      "current_pages": [
        {
          "id": "314",
          "title": "Themes and Concepts of Biology",
          "student_count": 1,
          "correct_count": 1,
          "incorrect_count": 2,
          "chapter_section": [
            1,
            2
          ],
          "is_trouble": false
        }
      ],
      "spaced_pages": [],
      "is_trouble": false
    },
    {
      "period_id": "1",
      "name": "1st",
      "mean_grade_percent": 17,
      "total_count": 9,
      "complete_count": 0,
      "partially_complete_count": 2,
      "current_pages": [
        {
          "id": "314",
          "title": "Themes and Concepts of Biology",
          "student_count": 2,
          "correct_count": 1,
          "incorrect_count": 5,
          "chapter_section": [
            1,
            2
          ],
          "is_trouble": false
        }
      ],
      "spaced_pages": [],
      "is_trouble": false
    },
    {
      "period_id": "2",
      "name": "2nd",
      "mean_grade_percent": 50,
      "total_count": 10,
      "complete_count": 1,
      "partially_complete_count": 0,
      "current_pages": [
        {
          "id": "314",
          "title": "Themes and Concepts of Biology",
          "student_count": 1,
          "correct_count": 2,
          "incorrect_count": 2,
          "chapter_section": [
            1,
            2
          ],
          "is_trouble": false
        }
      ],
      "spaced_pages": [],
      "is_trouble": false
    },
    {
      "period_id": "4",
      "name": "4th",
      "mean_grade_percent": 50,
      "total_count": 11,
      "complete_count": 1,
      "partially_complete_count": 0,
      "current_pages": [
        {
          "id": "314",
          "title": "Themes and Concepts of Biology",
          "student_count": 1,
          "correct_count": 1,
          "incorrect_count": 3,
          "chapter_section": [
            1,
            2
          ],
          "is_trouble": false
        }
      ],
      "spaced_pages": [],
      "is_trouble": false
    }
  ],
  "shareable_url": "/@/kEyX0d/3-part-mpq"
}
```

