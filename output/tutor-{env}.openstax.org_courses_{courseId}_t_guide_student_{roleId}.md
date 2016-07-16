# https://tutor-{env}.openstax.org/courses/{courseId}/t/guide/student/{roleId}

![image](./tutor-{env}.openstax.org_courses_{courseId}_t_guide_student_{roleId}.png)

# AJAX Calls

## GET /api/courses/1/performance

```json
[
  {
    "period_id": "3",
    "overall_average_score": 0.267561983471074,
    "data_headings": [
      {
        "title": "Read Chapter 1. The Study of Life",
        "plan_id": 1,
        "type": "reading",
        "due_at": "2016-06-28T12:00:00.000Z"
      },
      {
        "title": "HW Chapter 1 The Study of Life",
        "plan_id": 3,
        "type": "homework",
        "due_at": "2016-06-27T12:00:00.000Z",
        "average_score": 0.512396694214876
      },
      "... skipped 1"
    ],
    "students": [
      {
        "name": "Isobel Witting",
        "first_name": "Isobel",
        "last_name": "Witting",
        "role": 28,
        "student_identifier": "BMYQ68I17V",
        "average_score": 0.5,
        "data": [
          {
            "type": "reading",
            "id": 27,
            "status": "in_progress",
            "step_count": 25,
            "completed_step_count": 1,
            "completed_on_time_step_count": 1,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 8,
            "completed_exercise_count": 0,
            "completed_on_time_exercise_count": 0,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 0,
            "correct_on_time_exercise_count": 0,
            "correct_accepted_late_exercise_count": 0,
            "score": 0,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          {
            "type": "homework",
            "id": 69,
            "status": "completed",
            "step_count": 11,
            "completed_step_count": 11,
            "completed_on_time_step_count": 11,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 11,
            "completed_exercise_count": 11,
            "completed_on_time_exercise_count": 11,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 11,
            "correct_on_time_exercise_count": 11,
            "correct_accepted_late_exercise_count": 0,
            "score": 1,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-27T12:00:00.000Z",
            "last_worked_at": "2016-06-27T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": true
          },
          "... skipped 1"
        ]
      },
      {
        "name": "Nathan Zuckerman",
        "first_name": "Nathan",
        "last_name": "Zuckerman",
        "role": 29,
        "student_identifier": "IQU0FL48NP",
        "average_score": 0.227272727272727,
        "data": [
          {
            "type": "reading",
            "id": 28,
            "status": "in_progress",
            "step_count": 25,
            "completed_step_count": 24,
            "completed_on_time_step_count": 24,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 8,
            "completed_exercise_count": 7,
            "completed_on_time_exercise_count": 7,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 6,
            "correct_on_time_exercise_count": 6,
            "correct_accepted_late_exercise_count": 0,
            "score": 0.75,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          {
            "type": "homework",
            "id": 70,
            "status": "completed",
            "step_count": 11,
            "completed_step_count": 11,
            "completed_on_time_step_count": 11,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 11,
            "completed_exercise_count": 11,
            "completed_on_time_exercise_count": 11,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 5,
            "correct_on_time_exercise_count": 5,
            "correct_accepted_late_exercise_count": 0,
            "score": 0.454545454545455,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-27T12:00:00.000Z",
            "last_worked_at": "2016-06-27T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": true
          },
          "... skipped 1"
        ]
      },
      "... skipped 9"
    ]
  },
  {
    "period_id": "4",
    "overall_average_score": 0.287190082644628,
    "data_headings": [
      {
        "title": "Read Chapter 6. Metabolism",
        "plan_id": 2,
        "type": "reading",
        "due_at": "2016-06-28T12:00:00.000Z"
      },
      {
        "title": "Read Chapter 1. The Study of Life",
        "plan_id": 1,
        "type": "reading",
        "due_at": "2016-06-28T12:00:00.000Z"
      },
      "... skipped 2"
    ],
    "students": [
      {
        "name": "Myron Sauer",
        "first_name": "Myron",
        "last_name": "Sauer",
        "role": 40,
        "student_identifier": "0JO15HZWSL",
        "average_score": 0.181818181818182,
        "data": [
          {
            "type": "reading",
            "id": 59,
            "status": "in_progress",
            "step_count": 18,
            "completed_step_count": 2,
            "completed_on_time_step_count": 2,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 6,
            "completed_exercise_count": 0,
            "completed_on_time_exercise_count": 0,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 0,
            "correct_on_time_exercise_count": 0,
            "correct_accepted_late_exercise_count": 0,
            "score": 0,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          {
            "type": "reading",
            "id": 39,
            "status": "in_progress",
            "step_count": 25,
            "completed_step_count": 24,
            "completed_on_time_step_count": 24,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 8,
            "completed_exercise_count": 7,
            "completed_on_time_exercise_count": 7,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 6,
            "correct_on_time_exercise_count": 6,
            "correct_accepted_late_exercise_count": 0,
            "score": 0.75,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          "... skipped 2"
        ]
      },
      {
        "name": "Janelle Skiles",
        "first_name": "Janelle",
        "last_name": "Skiles",
        "role": 38,
        "student_identifier": "ZSWB7KN52D",
        "average_score": 0.136363636363636,
        "data": [
          {
            "type": "reading",
            "id": 57,
            "status": "completed",
            "step_count": 18,
            "completed_step_count": 18,
            "completed_on_time_step_count": 18,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 6,
            "completed_exercise_count": 6,
            "completed_on_time_exercise_count": 6,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 3,
            "correct_on_time_exercise_count": 3,
            "correct_accepted_late_exercise_count": 0,
            "score": 0.5,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          {
            "type": "reading",
            "id": 37,
            "status": "in_progress",
            "step_count": 25,
            "completed_step_count": 2,
            "completed_on_time_step_count": 2,
            "completed_accepted_late_step_count": 0,
            "exercise_count": 8,
            "completed_exercise_count": 0,
            "completed_on_time_exercise_count": 0,
            "completed_accepted_late_exercise_count": 0,
            "correct_exercise_count": 0,
            "correct_on_time_exercise_count": 0,
            "correct_accepted_late_exercise_count": 0,
            "score": 0,
            "recovered_exercise_count": 0,
            "due_at": "2016-06-28T12:00:00.000Z",
            "last_worked_at": "2016-06-28T11:59:00.000Z",
            "is_late_work_accepted": false,
            "is_included_in_averages": false
          },
          "... skipped 2"
        ]
      },
      "... skipped 9"
    ]
  },
  "... skipped 2"
]
```

## GET /api/courses/1/guide/role/2

```json
{
  "period_id": "1",
  "title": "Biology For AP® Courses",
  "page_ids": [
    "338",
    "339",
    "... skipped 2"
  ],
  "children": [
    {
      "title": "The Study of Life",
      "chapter_section": [
        1
      ],
      "questions_answered_count": 10,
      "clue": {
        "value": 0.697475170372314,
        "value_interpretation": "medium",
        "confidence_interval": [
          0.441473756598886,
          0.968733381407464
        ],
        "confidence_interval_interpretation": "bad",
        "sample_size": 2,
        "sample_size_interpretation": "below",
        "unique_learner_count": 1
      },
      "practice_count": 0,
      "page_ids": [
        "313",
        "314"
      ],
      "children": [
        {
          "title": "The Science of Biology",
          "chapter_section": [
            1,
            1
          ],
          "questions_answered_count": 3,
          "clue": {
            "value": 0.562745914473422,
            "value_interpretation": "medium",
            "confidence_interval": [
              0.399343345192471,
              0.990959804212301
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 0,
            "sample_size_interpretation": "below",
            "unique_learner_count": 0
          },
          "practice_count": 0,
          "page_ids": [
            "313"
          ]
        },
        {
          "title": "Themes and Concepts of Biology",
          "chapter_section": [
            1,
            2
          ],
          "questions_answered_count": 7,
          "clue": {
            "value": 0.770453517317548,
            "value_interpretation": "medium",
            "confidence_interval": [
              0.434350388763339,
              0.95713719576185
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 2,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1
          },
          "practice_count": 0,
          "page_ids": [
            "314"
          ]
        }
      ]
    },
    {
      "title": "Metabolism",
      "chapter_section": [
        6
      ],
      "questions_answered_count": 6,
      "clue": {
        "value": 0.582632007011849,
        "value_interpretation": "medium",
        "confidence_interval": [
          0.162603714430814,
          0.930994750957806
        ],
        "confidence_interval_interpretation": "bad",
        "sample_size": 6,
        "sample_size_interpretation": "above",
        "unique_learner_count": 1
      },
      "practice_count": 0,
      "page_ids": [
        "338",
        "339"
      ],
      "children": [
        {
          "title": "Energy and Metabolism",
          "chapter_section": [
            6,
            1
          ],
          "questions_answered_count": 1,
          "clue": {
            "value": 0.61012560984335,
            "value_interpretation": "medium",
            "confidence_interval": [
              0.117813246062838,
              0.935649254393405
            ],
            "confidence_interval_interpretation": "bad",
            "sample_size": 1,
            "sample_size_interpretation": "below",
            "unique_learner_count": 1
          },
          "practice_count": 0,
          "page_ids": [
            "338"
          ]
        },
        {
          "title": "Potential, Kinetic, Free, and Activation Energy",
          "chapter_section": [
            6,
            2
          ],
          "questions_answered_count": 5,
          "clue": {
            "value": 0.675765614381951,
            "value_interpretation": "medium",
            "confidence_interval": [
              0.382994381635556,
              0.826817304802315
            ],
            "confidence_interval_interpretation": "good",
            "sample_size": 5,
            "sample_size_interpretation": "above",
            "unique_learner_count": 1
          },
          "practice_count": 0,
          "page_ids": [
            "339"
          ]
        }
      ]
    }
  ]
}
```

