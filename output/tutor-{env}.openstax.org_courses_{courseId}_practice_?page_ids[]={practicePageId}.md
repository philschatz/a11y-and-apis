# https://tutor-{env}.openstax.org/courses/{courseId}/practice/?page_ids[]={practicePageId}

![image](./screenshots/tutor-{env}.openstax.org_courses_{courseId}_practice_?page_ids[]={practicePageId}.png)

# AJAX Calls

## GET /api/steps/18922

```json
{
  "content": {
    "authors": [
      {
        "name": "OpenStax",
        "user_id": "1"
      }
    ],
    "copyright_holders": [
      {
        "name": "Rice University",
        "user_id": "2"
      }
    ],
    "derived_from": [],
    "editors": [],
    "is_vocab": false,
    "number": 2,
    "published_at": "2015-12-16T20:46:58.856Z",
    "questions": [
      {
        "answers": [
          {
            "content_html": "1- Inductive, 2- Deductive, 3- Inductive, 4- Deductive",
            "id": "13137"
          },
          {
            "content_html": "1- Inductive, 2-Inductive, 3- Inductive, 4- Deductive",
            "id": "13136"
          },
          "... skipped 2"
        ],
        "combo_choices": [],
        "formats": [
          "free-response",
          "multiple-choice"
        ],
        "hints": [],
        "id": "3357",
        "is_answer_order_important": true,
        "stem_html": "<p>Decide if each of the following is an example of inductive or deductive reasoning.</p>\n\n<ol>\n  <li>All flying birds and insects have wings. Birds a ... 553 more",
        "stimulus_html": ""
      }
    ],
    "stimulus_html": "",
    "tags": [
      "filter-type:import:hs",
      "filter-type:import:has-context",
      "... skipped 18"
    ],
    "uid": "2@2",
    "version": 2
  },
  "content_url": "https://exercises-dev.openstax.org/exercises/2@2",
  "group": "default",
  "has_recovery": false,
  "id": "18922",
  "is_completed": false,
  "is_in_multipart": false,
  "labels": [],
  "question_id": "3357",
  "related_content": [
    {
      "chapter_section": [
        1,
        1
      ],
      "title": "The Science of Biology"
    }
  ],
  "task_id": "2684",
  "type": "exercise"
}
```

## GET /api/tasks/2684

```json
{
  "id": "2684",
  "is_deleted": false,
  "is_feedback_available": true,
  "is_shared": false,
  "spy": {},
  "steps": [
    {
      "content": {
        "authors": [
          {
            "name": "OpenStax",
            "user_id": "1"
          }
        ],
        "copyright_holders": [
          {
            "name": "Rice University",
            "user_id": "2"
          }
        ],
        "derived_from": [],
        "editors": [],
        "is_vocab": false,
        "number": 9,
        "published_at": "2015-09-16T20:13:32.713Z",
        "questions": [
          {
            "answers": [
              {
                "content_html": "We are able to breath in and out unconsciously.",
                "id": "35"
              },
              {
                "content_html": "Our hair and fingernails grow at a constant rate over time.",
                "id": "36"
              },
              "... skipped 2"
            ],
            "combo_choices": [],
            "formats": [
              "multiple-choice",
              "free-response"
            ],
            "hints": [],
            "id": "9",
            "is_answer_order_important": true,
            "stem_html": "Like plants, humans also respond to messages from the environment. What are some ways the human body responds to external stimuli?",
            "stimulus_html": ""
          }
        ],
        "stimulus_html": "",
        "tags": [
          "filter-type:import:hs",
          "filter-type:import:has-context",
          "... skipped 18"
        ],
        "uid": "9@1",
        "version": 1
      },
      "content_url": "https://exercises-dev.openstax.org/exercises/9@1",
      "group": "default",
      "has_recovery": false,
      "id": "18926",
      "is_completed": false,
      "is_in_multipart": false,
      "labels": [],
      "question_id": "9",
      "related_content": [
        {
          "chapter_section": [
            1,
            1
          ],
          "title": "The Science of Biology"
        }
      ],
      "task_id": "2684",
      "type": "exercise"
    },
    {
      "content": {
        "authors": [
          {
            "name": "OpenStax",
            "user_id": "1"
          }
        ],
        "copyright_holders": [
          {
            "name": "Rice University",
            "user_id": "2"
          }
        ],
        "derived_from": [],
        "editors": [],
        "is_vocab": false,
        "number": 10,
        "published_at": "2015-09-16T20:13:32.800Z",
        "questions": [
          {
            "answers": [
              {
                "content_html": "DNA is a double helix because it has two spiral strands held together like a spiral staircase.",
                "id": "39"
              },
              {
                "content_html": "Nucleotides are spiral-shaped molecules that bond together to form DNA.",
                "id": "40"
              },
              "... skipped 2"
            ],
            "combo_choices": [],
            "formats": [
              "multiple-choice",
              "free-response"
            ],
            "hints": [],
            "id": "10",
            "is_answer_order_important": true,
            "stem_html": "The word helix means spiral. What does this tell you about the structure of DNA, which is a double helix macromolecule?",
            "stimulus_html": ""
          }
        ],
        "stimulus_html": "",
        "tags": [
          "filter-type:import:hs",
          "filter-type:import:has-context",
          "... skipped 18"
        ],
        "uid": "10@1",
        "version": 1
      },
      "content_url": "https://exercises-dev.openstax.org/exercises/10@1",
      "group": "default",
      "has_recovery": false,
      "id": "18927",
      "is_completed": false,
      "is_in_multipart": false,
      "labels": [],
      "question_id": "10",
      "related_content": [
        {
          "chapter_section": [
            1,
            1
          ],
          "title": "The Science of Biology"
        }
      ],
      "task_id": "2684",
      "type": "exercise"
    },
    "... skipped 4"
  ],
  "title": "Practice",
  "type": "page_practice"
}
```


# WCAG2A Errors

Showing first 50 of 7 errors

```
ERROR html WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2
ERROR a.navbar-brand.navbar-brand[href='/dashboard/'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning a#navbar-dropdown.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
ERROR a[href='#'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
ERROR textarea[placeholder='Enter your response'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Textarea.Name
ERROR textarea[placeholder='Enter your response'] WCAG2A.Principle1.Guideline1_3.1_3_1.F68
ERROR a[href='#spy'].debug-toggle-link WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
```

