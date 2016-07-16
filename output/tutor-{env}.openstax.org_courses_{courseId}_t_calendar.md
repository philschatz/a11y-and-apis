# https://tutor-{env}.openstax.org/courses/{courseId}/t/calendar

![image](./tutor-{env}.openstax.org_courses_{courseId}_t_calendar.png)

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
          "371",
          "372",
          "... skipped 2"
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

