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
}
```

## GET /api/courses/1/exercises/homework_core?page_ids%5B%5D=314&ecosystem_id=4

```json
{
  "total_count": 23,
  "items": [
    {
      "id": "2994",
      "url": "https://exercises-dev.openstax.org/exercises/13@6",
      "preview": "\nClick on the Collisions simulation. Familiarize yourself with the variables and try changing a few of them. In the questions that follow, you will see a set of instructions that guide you in experimenting with the collisions simulation. \n<div class=\"preview interactive\">Interactive</div>\n\nWhy are viruses not considered living? Is it because they're not real?\n\nWhere do virii go when they're old?\n\nWhat was wrong in question # 2?",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "apbio-ch01-ex013",
          "book:stax-bio",
          "time:short",
          "blooms:3",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex013",
          "filter-type:import:hs"
        ],
        "uid": "13@6",
        "number": 13,
        "version": 6,
        "published_at": "2016-07-05T19:13:06.732Z",
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
        "stimulus_html": "Click on the Collisions simulation. Familiarize yourself with the variables and try changing a few of them. In the questions that follow, you will see a set of instructions that guide you in experimenting with the collisions simulation. \n<iframe src=\"https://archive.cnx.org/specials/2c7acb3c-2fbd-11e5-b2d9-e7f92291703c/collision-lab/\"></iframe>",
        "questions": [
          {
            "id": 6408,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Why are viruses not considered living? Is it because they're not real?",
            "answers": [
              {
                "id": 24965,
                "content_html": "They are not made of cells.",
                "correctness": "1.0",
                "feedback_html": "Viruses are not made up of cells. They are made up of DNA or RNA surrounded by a protein coat."
              },
              {
                "id": 24966,
                "content_html": "They cannot replicate.",
                "correctness": "0.0",
                "feedback_html": "Viruses cannot replicate without a host. They are not considered living because they are not made up of cells."
              },
              {
                "id": 24967,
                "content_html": "They do not contain DNA or RNA.",
                "correctness": "0.0",
                "feedback_html": "Viruses are made up of DNA or RNA."
              },
              {
                "id": 24968,
                "content_html": "They lack a cell membrane.",
                "correctness": "0.0",
                "feedback_html": "Many viruses have lipid envelopes, which is not the same as lacking a cell membrane. Viruses are not made up of living cells and this differentiates them from living beings."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "They are not made of cells."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "free-response",
              "multiple-choice"
            ],
            "combo_choices": []
          },
          {
            "id": 6409,
            "is_answer_order_important": false,
            "stimulus_html": "",
            "stem_html": "Where do virii go when they're old?",
            "answers": [
              {
                "id": 24969,
                "content_html": "To the Head",
                "correctness": "1.0",
                "feedback_html": "really?"
              },
              {
                "id": 24970,
                "content_html": "To the Feet",
                "correctness": "0.0",
                "feedback_html": "Really?  Really, really?"
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "what do you men by your answer?"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "free-response",
              "multiple-choice"
            ],
            "combo_choices": []
          },
          {
            "id": 6410,
            "is_answer_order_important": false,
            "stimulus_html": "",
            "stem_html": "What was wrong in question # 2?",
            "answers": [
              {
                "id": 24971,
                "content_html": "It was undefined",
                "correctness": "1.0",
                "feedback_html": "like a tortise"
              },
              {
                "id": 24972,
                "content_html": "It didn't have any sense",
                "correctness": "0.0",
                "feedback_html": ""
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "RNA / DNA"
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex013",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex013",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": true,
      "has_video": false
    },
    {
      "id": "2995",
      "url": "https://exercises-dev.openstax.org/exercises/14@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo03",
          "apbio-ch01-ex014",
          "book:stax-bio",
          "blooms:2",
          "time:short",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex014",
          "filter-type:import:hs"
        ],
        "uid": "14@1",
        "number": 14,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.870Z",
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
            "id": 14,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "The presence of a membrane-enclosed nucleus is a characteristic of what?",
            "answers": [
              {
                "id": 53,
                "content_html": "bacteria",
                "correctness": "0.0",
                "feedback_html": "Bacteria are prokaryotes and are enucleated."
              },
              {
                "id": 54,
                "content_html": "eukaryotic cells",
                "correctness": "1.0",
                "feedback_html": "Eukaryotic cells contain a membrane bound nucleus."
              },
              {
                "id": 55,
                "content_html": "living organisms",
                "correctness": "0.0",
                "feedback_html": "All living organisms do not contain membrane enclosed nucleus."
              },
              {
                "id": 56,
                "content_html": "prokaryotic cells",
                "correctness": "0.0",
                "feedback_html": "Prokaryotic cells do not contain a membrane bound nucleus."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "A membrane-enclosed nucleaus is a characteristic of eukaryotic cells."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo03",
          "type": "lo",
          "description": "Recognize and interpret a phylogenetic tree",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex014",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex014",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "2996",
      "url": "https://exercises-dev.openstax.org/exercises/15@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "apbio-ch01-ex015",
          "book:stax-bio",
          "blooms:2",
          "time:short",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex015",
          "filter-type:import:hs"
        ],
        "uid": "15@1",
        "number": 15,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.882Z",
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
            "id": 15,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "What is a group of individuals of the same species living in the same area called?",
            "answers": [
              {
                "id": 57,
                "content_html": "a community",
                "correctness": "0.0",
                "feedback_html": "A community consists of all individuals that belong to different species."
              },
              {
                "id": 58,
                "content_html": "an ecosystem",
                "correctness": "0.0",
                "feedback_html": "An ecosystem includes all the abiotic and biotic components, not just species belonging to a particular group."
              },
              {
                "id": 59,
                "content_html": "a family",
                "correctness": "0.0",
                "feedback_html": "A group of individuals of the same species living in the same area is called a population."
              },
              {
                "id": 60,
                "content_html": "a population",
                "correctness": "1.0",
                "feedback_html": "A population is a group of individuals that belong to same species living in a particular geographical area and have the capability to interbreed."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "The individuals are part of a population."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex015",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex015",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "2997",
      "url": "https://exercises-dev.openstax.org/exercises/16@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok2",
          "ost-chapter-review",
          "review",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "apbio-ch01-ex016",
          "book:stax-bio",
          "dok:2",
          "time:short",
          "blooms:3",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex016",
          "filter-type:import:hs"
        ],
        "uid": "16@1",
        "number": 16,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.899Z",
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
            "id": 16,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following sequences represents the hierarchy of biological organization from the most inclusive to the least complex level?",
            "answers": [
              {
                "id": 61,
                "content_html": "biosphere, ecosystem, community, population, organism",
                "correctness": "1.0",
                "feedback_html": "Biosphere is the most inclusive and organism is the least complex level in the given sequence of hierarchy."
              },
              {
                "id": 62,
                "content_html": "organelle, tissue, biosphere, ecosystem, population",
                "correctness": "0.0",
                "feedback_html": "Biosphere and ecosystem are amongst the most inclusive and a tissue is the least complex level."
              },
              {
                "id": 63,
                "content_html": "organism, organ, tissue, organelle, molecule",
                "correctness": "0.0",
                "feedback_html": "Are you sure organism is the least complex level in the given sequence of hierarchy."
              },
              {
                "id": 64,
                "content_html": "organism, community, biosphere, molecule, tissue, organ",
                "correctness": "0.0",
                "feedback_html": "Molecule is the least complex level in the sequence of hierarchy."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "biosphere, ecosystem, community, population, organism"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex016",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex016",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "2998",
      "url": "https://exercises-dev.openstax.org/exercises/17@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok2",
          "ost-chapter-review",
          "review",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo03",
          "apbio-ch01-ex017",
          "book:stax-bio",
          "dok:2",
          "time:short",
          "blooms:3",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex017",
          "filter-type:import:hs"
        ],
        "uid": "17@1",
        "number": 17,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.928Z",
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
            "id": 17,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Where in a phylogenetic tree would you expect to find the organism that had evolved most recently?",
            "answers": [
              {
                "id": 65,
                "content_html": "at the base",
                "correctness": "0.0",
                "feedback_html": "Recently evolved organisms are not placed at the base."
              },
              {
                "id": 66,
                "content_html": "at the nodes",
                "correctness": "0.0",
                "feedback_html": "Nodes connect branches. Recently evolved organisms are not placed at the nodes."
              },
              {
                "id": 67,
                "content_html": "at the branch tips",
                "correctness": "1.0",
                "feedback_html": "The tips of the tree branches represent the recently evolved taxa."
              },
              {
                "id": 68,
                "content_html": "within the branches",
                "correctness": "0.0",
                "feedback_html": "Organism evolved most recently can be found at the branch tips."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "The most recent evolutions will be found at the branch tips."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo03",
          "type": "lo",
          "description": "Recognize and interpret a phylogenetic tree",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex017",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex017",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "2999",
      "url": "https://exercises-dev.openstax.org/exercises/18@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "apbio-ch01-ex018",
          "book:stax-bio",
          "blooms:2",
          "time:short",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex018",
          "filter-type:import:hs"
        ],
        "uid": "18@1",
        "number": 18,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.933Z",
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
            "id": 18,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "What is a characteristic that is not present in all living things?",
            "answers": [
              {
                "id": 69,
                "content_html": "homeostasis and regulation",
                "correctness": "0.0",
                "feedback_html": "Homeostasis and regulation occurs in all living beings."
              },
              {
                "id": 70,
                "content_html": "metabolism",
                "correctness": "0.0",
                "feedback_html": "Living organisms do metabolize, while non-living organisms do not."
              },
              {
                "id": 71,
                "content_html": "nucleus containing DNA",
                "correctness": "1.0",
                "feedback_html": "The nucleus containing DNA is not present in all living organisms."
              },
              {
                "id": 72,
                "content_html": "reproduction",
                "correctness": "0.0",
                "feedback_html": "All living organisms reproduce."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Not all living things have a nucleus containing DNA."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex018",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex018",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3000",
      "url": "https://exercises-dev.openstax.org/exercises/19@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok3",
          "time-medium",
          "ost-chapter-review",
          "blooms-3",
          "critical-thinking",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "apbio-ch01-ex019",
          "book:stax-bio",
          "blooms:3",
          "dok:3",
          "time:medium",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex019",
          "filter-type:import:hs"
        ],
        "uid": "19@1",
        "number": 19,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.956Z",
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
            "id": 19,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Consider the levels of organization of the biological world and place each of these items in order from smallest level of organization to most encompassing: skin cell, elephant, water molecule, planet Earth, tropical rainforest, hydrogen atom, wolf pack, liver.",
            "answers": [
              {
                "id": 73,
                "content_html": "hydrogen atom, water molecule, skin cell, liver, elephant, wolf pack, tropical rainforest, planet Earth",
                "correctness": "1.0",
                "feedback_html": "Hydrogen atom, water molecule, skin cell, liver, elephant, wolf pack, tropical rainforest, planet Earth is the correct order from smallest level of organization to most encompassing."
              },
              {
                "id": 74,
                "content_html": "hydrogen atom, skin cell, water molecule, liver, elephant, wolf pack, tropical rainforest, planet Earth",
                "correctness": "0.0",
                "feedback_html": "A skin cell is more encompassing than a water molecule."
              },
              {
                "id": 75,
                "content_html": "hydrogen atom, skin cell, water molecule, liver, wolf pack, elephant, tropical rainforest, planet Earth",
                "correctness": "0.0",
                "feedback_html": "Try to carefully visualize the list given and arrange them from the smallest to the longst level of organization."
              },
              {
                "id": 76,
                "content_html": "water molecule, hydrogen atom, skin cell, liver, elephant, wolf pack, tropical rainforest, planet Earth",
                "correctness": "0.0",
                "feedback_html": "A water molecule is not the smallest level of organization, hydrogen atom is."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Smallest level of organization to longest: hydrogen atom, water molecule, skin cell, liver, elephant, wolf pack, tropical rainforest, planet Earth"
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "time-medium",
          "type": "length",
          "name": "Length: M",
          "is_visible": true,
          "data": "medium"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok:3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "time:medium",
          "type": "length",
          "name": "Length: M",
          "is_visible": true,
          "data": "medium"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "critical-thinking",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex019",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex019",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3001",
      "url": "https://exercises-dev.openstax.org/exercises/20@2",
      "preview": "\nWatch this video about DNA:\n<div class=\"preview video\">Video</div>\n\nWhat scientific evidence was used by Carl Woese to determine there should be a separate domain for Archaea?\n\nDo you think the video was helpful?",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "blooms-4",
          "ost-chapter-review",
          "time-long",
          "critical-thinking",
          "dok4",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo03",
          "apbio-ch01-ex020",
          "book:stax-bio",
          "time:long",
          "blooms:4",
          "dok:4",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex020",
          "filter-type:import:hs"
        ],
        "uid": "20@2",
        "number": 20,
        "version": 2,
        "published_at": "2016-05-19T14:05:58.336Z",
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
        "stimulus_html": "Watch this video about DNA:\n<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen=\"\"></iframe>",
        "questions": [
          {
            "id": 6403,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "What scientific evidence was used by Carl Woese to determine there should be a separate domain for Archaea?",
            "answers": [
              {
                "id": 24949,
                "content_html": "a sequence of DNA",
                "correctness": "0.0",
                "feedback_html": "Woese did not use a sequence of DNA. He used a sequence of rRNA."
              },
              {
                "id": 24950,
                "content_html": "a sequence of rRNA",
                "correctness": "1.0",
                "feedback_html": "Woese used a sequence of rRNA as evidence to determine that there should be a separate domain for Archaea."
              },
              {
                "id": 24951,
                "content_html": "a sequence of mRNA.",
                "correctness": "0.0",
                "feedback_html": "A sequence of rRNA, not mRNA, was used."
              },
              {
                "id": 24952,
                "content_html": "a sequence of tRNA.",
                "correctness": "0.0",
                "feedback_html": "rRNA was used as a scientific evidence by Carl Woese."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Woese mainly used the sequence of ribosomal RNA subunits."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "free-response",
              "multiple-choice"
            ],
            "combo_choices": []
          },
          {
            "id": 6404,
            "is_answer_order_important": false,
            "stimulus_html": "",
            "stem_html": "Do you think the video was helpful?",
            "answers": [
              {
                "id": 24953,
                "content_html": "YES",
                "correctness": "1.0",
                "feedback_html": "Really?"
              },
              {
                "id": 24954,
                "content_html": "NO",
                "correctness": "0.0",
                "feedback_html": "I thought so."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Based on the above do you still think so?"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "true-false"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo03",
          "type": "lo",
          "description": "Recognize and interpret a phylogenetic tree",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms:4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "critical-thinking",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "dok:4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex020",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex020",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": true
    },
    {
      "id": "3002",
      "url": "https://exercises-dev.openstax.org/exercises/21@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "blooms-4",
          "ost-chapter-review",
          "time-long",
          "critical-thinking",
          "dok4",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "apbio-ch01-ex021",
          "book:stax-bio",
          "time:long",
          "blooms:4",
          "dok:4",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex021",
          "filter-type:import:hs"
        ],
        "uid": "21@1",
        "number": 21,
        "version": 1,
        "published_at": "2015-09-16T20:13:32.991Z",
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
            "id": 21,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Both astronomy and astrology study the stars. Which one is considered a natural science? Explain your reasoning.",
            "answers": [
              {
                "id": 81,
                "content_html": "Astrology is a natural science as it indirectly influences human affairs and the natural world.",
                "correctness": "0.0",
                "feedback_html": "Astrology is not natural science."
              },
              {
                "id": 82,
                "content_html": "Astronomy is a natural science as it deals with observations and prediction of events in the sky, which is based on the laws of physics.",
                "correctness": "1.0",
                "feedback_html": "Astronomy is a natural science that deals with the study of celestial objects such as stars, galaxies, planets, moons, asteroids, comets and nebulae. It helps in the prediction of events in the sky and encompasses the laws of physics."
              },
              {
                "id": 83,
                "content_html": "Astrology is a natural science as it deals with observations and prediction of events in the sky, influences human affairs and the natural world.",
                "correctness": "0.0",
                "feedback_html": "Astrology does not deal with the prediction of events in the sky."
              },
              {
                "id": 84,
                "content_html": "Astrology is a natural science as it deals with the study of asteroids and comets, which is based on the laws of natural sciences.",
                "correctness": "0.0",
                "feedback_html": "Astronomy is a natural science not astrology."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Astrology does involve observations of celestial bodies, but is a way to predict human affairs based on astronomical data not supported by tested hypothesis backed by that data. Astronomy is the science of observing, measuring, and making prediction of events in the sky based on past observations and laws of physics."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms:4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "critical-thinking",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "dok:4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex021",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex021",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3003",
      "url": "https://exercises-dev.openstax.org/exercises/22@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "dok1",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-aplo-1-14",
          "apbio-ch01-ex022",
          "ap-test-prep",
          "book:stax-bio",
          "time:short",
          "blooms:3",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex022",
          "filter-type:import:hs"
        ],
        "uid": "22@1",
        "number": 22,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.013Z",
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
            "id": 22,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following structures is conserved in all living organisms and points to a common origin?",
            "answers": [
              {
                "id": 85,
                "content_html": "All living organisms have mitochondria that produce energy.",
                "correctness": "0.0",
                "feedback_html": "All living organisms do not have mitochondria."
              },
              {
                "id": 86,
                "content_html": "All living organisms store genetic material in DNA/RNA.",
                "correctness": "1.0",
                "feedback_html": "Correct! All living organisms store genetic information using the same molecules: DNA and RNA."
              },
              {
                "id": 87,
                "content_html": "All living organisms use the energy from sunlight",
                "correctness": "0.0",
                "feedback_html": "All living organisms do not obtain energy from sunlight."
              },
              {
                "id": 88,
                "content_html": "All living organisms have a nucleus.",
                "correctness": "0.0",
                "feedback_html": "All living organisms do not have a nucleus."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "All living organisms store genetic material in DNA/RNA."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-14",
          "type": "aplo",
          "name": "1.14",
          "description": "The student is able to pose scientific questions that correctly identify essential properties of share, core life processes that provide insights into the history of life on Earth.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex022",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex022",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3004",
      "url": "https://exercises-dev.openstax.org/exercises/23@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok3",
          "ost-chapter-review",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-aplo-1-14",
          "ap-test-prep",
          "apbio-ch01-ex023",
          "book:stax-bio",
          "blooms:2",
          "time:short",
          "dok:3",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex023",
          "filter-type:import:hs"
        ],
        "uid": "23@1",
        "number": 23,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.025Z",
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
            "id": 23,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following statements is the strongest argument in favor of two organisms, A and B, being closely related evolutionarily?",
            "answers": [
              {
                "id": 89,
                "content_html": "A and B look alike.",
                "correctness": "0.0",
                "feedback_html": "Only using morphological similarity cannot be the basis for concluding that two organisms are closely related."
              },
              {
                "id": 90,
                "content_html": "A and B live in the same ecosystem.",
                "correctness": "0.0",
                "feedback_html": "Ecosystem includes many species living together. Just because they share the same ecosystem does not mean the two organisms are closely related."
              },
              {
                "id": 91,
                "content_html": "A and B use the same metabolic pathways.",
                "correctness": "0.0",
                "feedback_html": "Metabolic pathways of living organisms can be similar. This does not serve as basis to conclude that two organisms are closely related."
              },
              {
                "id": 92,
                "content_html": "The DNA sequences of A and B are highly homologous.",
                "correctness": "1.0",
                "feedback_html": "If the DNA sequences of the two organisms share homology, then they can be closely related evolutionarily."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "The DNA sequences of A and B are highly homologous."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-14",
          "type": "aplo",
          "name": "1.14",
          "description": "The student is able to pose scientific questions that correctly identify essential properties of share, core life processes that provide insights into the history of life on Earth.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok:3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex023",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex023",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3005",
      "url": "https://exercises-dev.openstax.org/exercises/24@1",
      "content": {
        "attachments": [
          {
            "id": 1,
            "asset": {
              "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png",
              "large": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/large_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              },
              "medium": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/medium_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              },
              "small": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/small_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              }
            }
          }
        ],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "dok1",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "ap-test-prep",
          "apbio-ch01-s02-aplo-1-18",
          "apbio-ch01-ex024",
          "book:stax-bio",
          "time:short",
          "blooms:3",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex024",
          "filter-type:import:hs"
        ],
        "uid": "24@1",
        "number": 24,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.051Z",
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
            "id": 24,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "<p><img src=\"https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/large_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png\" alt=\"A phylogenetic tree begins with organism 1, with four branches at points A, B, C and D. The organisms at the ends of these branches are 2, 3, 4 and 5 respectively.\"></p>\n\n<p>In the phylogenetic tree shown, which organism is most distantly related to 2?</p>\n",
            "answers": [
              {
                "id": 93,
                "content_html": "1",
                "correctness": "0.0",
                "feedback_html": "Branches 1 and 2 evolved at the same time and share similarities."
              },
              {
                "id": 94,
                "content_html": "3",
                "correctness": "0.0",
                "feedback_html": "Branch 3 is not the most distantly related to 2."
              },
              {
                "id": 95,
                "content_html": "4",
                "correctness": "0.0",
                "feedback_html": "Branch 5 is most distantly related to branch 2."
              },
              {
                "id": 96,
                "content_html": "5",
                "correctness": "1.0",
                "feedback_html": "5 is most distantly related to 2 as it is evident in the phylogenetic tree that 5 diverged from the main branch much earlier than rest of the organisms."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Number 5"
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-18",
          "type": "aplo",
          "name": "1.18",
          "description": "The student is able to evaluate evidence provided by a data set in conjunction with a phylogenetic tree or simply cladogram to determine evolutionary history and speciation.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex024",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex024",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3006",
      "url": "https://exercises-dev.openstax.org/exercises/25@1",
      "content": {
        "attachments": [
          {
            "id": 2,
            "asset": {
              "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png",
              "large": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/large_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              },
              "medium": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/medium_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              },
              "small": {
                "url": "https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/small_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png"
              }
            }
          }
        ],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok2",
          "ost-chapter-review",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "ap-test-prep",
          "apbio-ch01-s02-aplo-1-18",
          "apbio-ch01-ex025",
          "book:stax-bio",
          "dok:2",
          "time:short",
          "blooms:3",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex025",
          "filter-type:import:hs"
        ],
        "uid": "25@1",
        "number": 25,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.067Z",
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
            "id": 25,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "<p><img src=\"https://s3-us-west-2.amazonaws.com/openstax-assets/pxorif9287q9er-dev/exercises/attachments/large_f883cccc89631d44673009303b141089b92cb52b88175f96ad305ca13098eb73.png\" alt=\"A phylogenetic tree begins with organism 1, with four branches at points A, B, C and D. The organisms at the ends of these branches are 2, 3, 4 and 5 respectively.\"></p>\n\n<p>In the diagram shown which is the most recent common ancestor of 1 and 3?</p>\n",
            "answers": [
              {
                "id": 97,
                "content_html": "A",
                "correctness": "0.0",
                "feedback_html": "A cannot be a common ancestor of 1 and 3."
              },
              {
                "id": 98,
                "content_html": "B",
                "correctness": "1.0",
                "feedback_html": "B is the recent common ancestor of 1 and 3."
              },
              {
                "id": 99,
                "content_html": "C",
                "correctness": "0.0",
                "feedback_html": "The most recent common ancestor of 1 and 3 in the phylogenetic tree is B."
              },
              {
                "id": 100,
                "content_html": "D",
                "correctness": "0.0",
                "feedback_html": "D is not the most recent common ancestor of both 1 and 3."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "The most recent common ancestor to 1 and 3 is B."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-18",
          "type": "aplo",
          "name": "1.18",
          "description": "The student is able to evaluate evidence provided by a data set in conjunction with a phylogenetic tree or simply cladogram to determine evolutionary history and speciation.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex025",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex025",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3007",
      "url": "https://exercises-dev.openstax.org/exercises/26@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "blooms-4",
          "ost-chapter-review",
          "time-long",
          "dok4",
          "apbio-ch01-s02",
          "apbio-ch01-s02-aplo-1-14",
          "ap-test-prep",
          "apbio-ch01-ex026",
          "book:stax-bio",
          "time:long",
          "blooms:4",
          "dok:4",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex026",
          "filter-type:import:hs"
        ],
        "uid": "26@1",
        "number": 26,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.073Z",
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
            "id": 26,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "The French scientist Jacques Monod famously said, “Anything found to be true of <em>E. coli</em> must also be true of elephants.” How is this statement based on the notion that living organisms share a common ancestor?",
            "answers": [
              {
                "id": 101,
                "content_html": "<em>E. coli</em> is a eukaryote and share similarities with most of the living organisms.",
                "correctness": "0.0",
                "feedback_html": "<em>E. coli</em> is not a eukaryote, it is a prokaryote."
              },
              {
                "id": 102,
                "content_html": "<em>E. coli</em> is a prokaryote. The various metabolic processes and core functions in <em>E. coli</em> share homology with higher organisms.",
                "correctness": "1.0",
                "feedback_html": "<em>E. coli</em> is a prokaryote and the various metabolic processes, structures and functions are applicable to higher organisms."
              },
              {
                "id": 103,
                "content_html": "<em>E. coli</em> contains a nucleus and membrane bound cell organelles that are shared by all the living organisms.",
                "correctness": "0.0",
                "feedback_html": "<em>E. coli</em> does not contain a nucleus and membrane bound organelles."
              },
              {
                "id": 104,
                "content_html": "<em>E. coli</em> is a prokaryote and reproduces through binary fission which is common to most of the living organisms.",
                "correctness": "0.0",
                "feedback_html": "<em>E. coli</em> is a prokaryote but binary fission is not the common mode of reproduction in higher organisms."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "All organisms share core structures and functions; therefore, basic research done on <em>E. coli</em> applies to higher organisms: metabolic pathway, molecular biology major processes, and so on."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-14",
          "type": "aplo",
          "name": "1.14",
          "description": "The student is able to pose scientific questions that correctly identify essential properties of share, core life processes that provide insights into the history of life on Earth.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms:4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "dok4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "dok:4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex026",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch01-ex026",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3008",
      "url": "https://exercises-dev.openstax.org/exercises/27@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "time-long",
          "dok4",
          "apbio-ch01-s02",
          "ap-test-prep",
          "apbio-ch01-s02-aplo-1-18",
          "apbio-ch01-ex027",
          "blooms-5",
          "book:stax-bio",
          "time:long",
          "dok:4",
          "blooms:5",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "exid:apbio-ch01-ex027",
          "filter-type:import:hs"
        ],
        "uid": "27@1",
        "number": 27,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.097Z",
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
            "id": 27,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Birds have been reclassified as reptiles. Which lines of evidence have led to this reclassification?",
            "answers": [
              {
                "id": 105,
                "content_html": "<em>Archeopteryx</em> is the connecting link between birds and reptiles which shows that birds and reptiles are related.",
                "correctness": "0.0",
                "feedback_html": "<em>Archeopteryx</em> is a connecting link between birds and reptiles, but this is not the basis for reclassifying birds as reptiles."
              },
              {
                "id": 106,
                "content_html": "Birds have scales, having the same origin as that of reptiles.",
                "correctness": "1.0",
                "feedback_html": "Birds have feathers which are said to be modified scales. Birds have scales on their feet. They show some skeletal similarity which provides evidence for the reclassification of birds as reptiles."
              },
              {
                "id": 107,
                "content_html": "Birds and reptiles have the same circulatory and excretory systems and both are egg laying animals.",
                "correctness": "0.0",
                "feedback_html": "Birds and reptiles do not share homology in circulatory and excretory systems."
              },
              {
                "id": 108,
                "content_html": "Birds and reptiles have similar anatomical and morphological features.",
                "correctness": "0.0",
                "feedback_html": "Birds and reptiles do not have similar anatomical and morphological features."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Birds have scales. Similar tissues produce scales and feathers, and birds have scales on their feet. Fossils show the many branches of the avian phylogenetic tree share a common ancestor with modern reptiles."
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-aplo-1-18",
          "type": "aplo",
          "name": "1.18",
          "description": "The student is able to evaluate evidence provided by a data set in conjunction with a phylogenetic tree or simply cladogram to determine evolutionary history and speciation.",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "dok4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "dok:4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "ap-test-prep",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ex027",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-5",
          "type": "blooms",
          "name": "Blooms: 5",
          "is_visible": true,
          "data": "5"
        },
        {
          "id": "blooms:5",
          "type": "blooms",
          "name": "Blooms: 5",
          "is_visible": true,
          "data": "5"
        },
        {
          "id": "exid:apbio-ch01-ex027",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3015",
      "url": "https://exercises-dev.openstax.org/exercises/34@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "tutor-only",
          "apbio-ch01-ot007",
          "blooms-1",
          "book:stax-bio",
          "time:short",
          "dok:1",
          "blooms:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "34@1",
        "number": 34,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.198Z",
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
            "id": 34,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following statements does not represent a characteristic shared by all living organisms?",
            "answers": [
              {
                "id": 133,
                "content_html": "growth",
                "correctness": "0.0",
                "feedback_html": "Growth is a characteristic shared by all living organisms."
              },
              {
                "id": 134,
                "content_html": "metabolism",
                "correctness": "0.0",
                "feedback_html": "Metabolism is a characteristic of all living organisms."
              },
              {
                "id": 135,
                "content_html": "photosynthesis",
                "correctness": "1.0",
                "feedback_html": "Only some living organisms have the capability to photosynthesize. Therefore, photosynthesis doesn’t represent a characteristic shared by all living organisms."
              },
              {
                "id": 136,
                "content_html": "reproduction",
                "correctness": "0.0",
                "feedback_html": "All living organisms reproduce."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Photosynthesis"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot007",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-1",
          "type": "blooms",
          "name": "Blooms: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "blooms:1",
          "type": "blooms",
          "name": "Blooms: 1",
          "is_visible": true,
          "data": "1"
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3016",
      "url": "https://exercises-dev.openstax.org/exercises/35@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok2",
          "ost-chapter-review",
          "review",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "tutor-only",
          "apbio-ch01-ot008",
          "book:stax-bio",
          "dok:2",
          "time:short",
          "blooms:3",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "35@1",
        "number": 35,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.203Z",
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
            "id": 35,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Plants grown indoors bend towards the light. This is an example of which of the following characteristics of life?",
            "answers": [
              {
                "id": 137,
                "content_html": "adaptation to the environment",
                "correctness": "0.0",
                "feedback_html": "Adaptation enhances the survival fitness of an individual. It is the response to the environment."
              },
              {
                "id": 138,
                "content_html": "metabolism",
                "correctness": "0.0",
                "feedback_html": "Bending towards light is not an example of metabolism."
              },
              {
                "id": 139,
                "content_html": "regulation",
                "correctness": "0.0",
                "feedback_html": "The process of bending may be regulated due to external factors like a response to the environment."
              },
              {
                "id": 140,
                "content_html": "response to the environment",
                "correctness": "1.0",
                "feedback_html": "Bending of a plant towards light is an example of a plant’s response to external stimuli from the environment."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Response to the environment"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot008",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3017",
      "url": "https://exercises-dev.openstax.org/exercises/36@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-3",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "tutor-only",
          "apbio-ch01-ot009",
          "book:stax-bio",
          "time:short",
          "blooms:3",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "36@1",
        "number": 36,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.220Z",
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
            "id": 36,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "In the following hierarchy, which is the broadest unit of life?",
            "answers": [
              {
                "id": 141,
                "content_html": "cell",
                "correctness": "0.0",
                "feedback_html": "The cell is the basic unit of life and not the longest unit of life."
              },
              {
                "id": 142,
                "content_html": "DNA",
                "correctness": "0.0",
                "feedback_html": "DNA is the smallest unit in the hierarchy given."
              },
              {
                "id": 143,
                "content_html": "the gastrointestinal tract",
                "correctness": "1.0",
                "feedback_html": "Gastrointestinal tract is the longest unit of life in the hierarchy given. It includes parts of stomach, the large intestine and the small intestine."
              },
              {
                "id": 144,
                "content_html": "stomach",
                "correctness": "0.0",
                "feedback_html": "The stomach is a part of gastrointestinal tract, which forms the longest unit of life in the given sequence."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Gastrointestinal tract"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "blooms-3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:3",
          "type": "blooms",
          "name": "Blooms: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot009",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3018",
      "url": "https://exercises-dev.openstax.org/exercises/37@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "dok2",
          "ost-chapter-review",
          "review",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "tutor-only",
          "apbio-ch01-ot010",
          "book:stax-bio",
          "dok:2",
          "blooms:2",
          "time:short",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "37@1",
        "number": 37,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.232Z",
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
            "id": 37,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Which of the following units of life includes non-biological (abiotic) elements?",
            "answers": [
              {
                "id": 145,
                "content_html": "a community",
                "correctness": "0.0",
                "feedback_html": "A community does not include non-biological elements."
              },
              {
                "id": 146,
                "content_html": "an ecosystem",
                "correctness": "1.0",
                "feedback_html": "Ecosystem is the unit of life that includes both biotic and abiotic elements."
              },
              {
                "id": 147,
                "content_html": "an organism",
                "correctness": "0.0",
                "feedback_html": "Organisms do not include abiotic elements."
              },
              {
                "id": 148,
                "content_html": "a population",
                "correctness": "0.0",
                "feedback_html": "A population includes the same group of species living in a geographical area. It does not include any non-biological element."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Community"
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot010",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3019",
      "url": "https://exercises-dev.openstax.org/exercises/38@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "review",
          "dok1",
          "time-short",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo03",
          "tutor-only",
          "apbio-ch01-ot011",
          "book:stax-bio",
          "blooms:2",
          "time:short",
          "dok:1",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "38@1",
        "number": 38,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.238Z",
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
            "id": 38,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "In which domain of life are humans classified?",
            "answers": [
              {
                "id": 149,
                "content_html": "Archaea",
                "correctness": "0.0",
                "feedback_html": "Humans are not classified under the domain Archaea."
              },
              {
                "id": 150,
                "content_html": "Bacteria",
                "correctness": "0.0",
                "feedback_html": "Humans do not come under the domain Bacteria."
              },
              {
                "id": 151,
                "content_html": "Eukarya",
                "correctness": "1.0",
                "feedback_html": "Humans are classified under the domain Eukarya."
              },
              {
                "id": 152,
                "content_html": "Protista",
                "correctness": "0.0",
                "feedback_html": "Protista is not a domain."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Eukarya"
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo03",
          "type": "lo",
          "description": "Recognize and interpret a phylogenetic tree",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "time-short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "time:short",
          "type": "length",
          "name": "Length: S",
          "is_visible": true,
          "data": "short"
        },
        {
          "id": "dok:1",
          "type": "dok",
          "name": "DOK: 1",
          "is_visible": true,
          "data": "1"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot011",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3020",
      "url": "https://exercises-dev.openstax.org/exercises/39@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "time-medium",
          "dok2",
          "ost-chapter-review",
          "review",
          "blooms-2",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo03",
          "tutor-only",
          "apbio-ch01-ot012",
          "book:stax-bio",
          "dok:2",
          "blooms:2",
          "time:medium",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
        ],
        "uid": "39@1",
        "number": 39,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.254Z",
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
            "id": 39,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "<p>Which of the following domains contains prokaryotes?</p>\n\n<ol>\n  <li>Archaea</li>\n  <li>Bacteria</li>\n  <li>Eukarya</li>\n</ol>\n",
            "answers": [
              {
                "id": 153,
                "content_html": "2 only",
                "correctness": "0.0",
                "feedback_html": "Prokaryotes also come under the domain Archaea."
              },
              {
                "id": 154,
                "content_html": "3 only",
                "correctness": "0.0",
                "feedback_html": "Prokaryotes do not come under the domain Eukarya."
              },
              {
                "id": 155,
                "content_html": "1 and 2",
                "correctness": "1.0",
                "feedback_html": "Both Archaea and Bacteria contains prokaryotes."
              },
              {
                "id": 156,
                "content_html": "2 and 3",
                "correctness": "0.0",
                "feedback_html": "Bacteria contain prokaryotes. The prokaryotes cannot classify under the eukarya domain since they are enucleated."
              }
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Archaea and bacteria contain prokaryotes. Prokaryotes cannot classify under the eukarya domain, since they are enucleated."
              }
            ],
            "community_solutions": [],
            "hints": [],
            "formats": [
              "multiple-choice"
            ],
            "combo_choices": []
          }
        ]
      },
      "tags": [
        {
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo03",
          "type": "lo",
          "description": "Recognize and interpret a phylogenetic tree",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-medium",
          "type": "length",
          "name": "Length: M",
          "is_visible": true,
          "data": "medium"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time:medium",
          "type": "length",
          "name": "Length: M",
          "is_visible": true,
          "data": "medium"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "dok:2",
          "type": "dok",
          "name": "DOK: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "blooms-2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "blooms:2",
          "type": "blooms",
          "name": "Blooms: 2",
          "is_visible": true,
          "data": "2"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot012",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "3021",
      "url": "https://exercises-dev.openstax.org/exercises/40@1",
      "content": {
        "attachments": [],
        "tags": [
          "apbio",
          "apbio-ch01",
          "ost-chapter-review",
          "time-long",
          "critical-thinking",
          "dok4",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo01",
          "blooms-5",
          "tutor-only",
          "apbio-ch01-ot014",
          "book:stax-bio",
          "time:long",
          "dok:4",
          "blooms:5",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
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
                "id": 157,
                "content_html": "Lithops reproduce and are heterotrophic.",
                "correctness": "0.0",
                "feedback_html": "Lithops are autotrophic and not heterotrophic."
              },
              {
                "id": 158,
                "content_html": "Lithops are lithotrophic and they reproduce.",
                "correctness": "0.0",
                "feedback_html": "Lithops are not lithotrophic, they are autotrophic."
              },
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
              }
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo01",
          "type": "lo",
          "description": "Identify and describe the properties of life",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "critical-thinking",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "dok:4",
          "type": "dok",
          "name": "DOK: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "blooms-5",
          "type": "blooms",
          "name": "Blooms: 5",
          "is_visible": true,
          "data": "5"
        },
        {
          "id": "blooms:5",
          "type": "blooms",
          "name": "Blooms: 5",
          "is_visible": true,
          "data": "5"
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot014",
          "type": "generic",
          "is_visible": false
        }
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
          "apbio",
          "apbio-ch01",
          "dok3",
          "blooms-4",
          "ost-chapter-review",
          "time-long",
          "critical-thinking",
          "apbio-ch01-s02",
          "apbio-ch01-s02-lo02",
          "tutor-only",
          "apbio-ch01-ot015",
          "book:stax-bio",
          "dok:3",
          "time:long",
          "blooms:4",
          "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type:practice",
          "book:stax-apbio",
          "filter-type:import:hs"
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
                "id": 161,
                "content_html": "hemoglobin, red blood cells, blood, artery, capillaries, veins, cardiovascular system",
                "correctness": "1.0",
                "feedback_html": "The correct ranking with respect to increasing complexity is hemoglobin, red blood cells, blood, artery, capillaries, veins, cardiovascular system."
              },
              {
                "id": 162,
                "content_html": "hemoglobin, red blood cells, blood, artery, veins, cardiovascular system",
                "correctness": "0.0",
                "feedback_html": "Capillaries are a part of cardiovascular system. They will be placed after the artery and before veins."
              },
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
              }
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
          "id": "context-cnxmod:cb7cf05b-7e16-4a53-a498-003b01ec3d7f",
          "type": "cnxmod",
          "is_visible": false,
          "data": "cb7cf05b-7e16-4a53-a498-003b01ec3d7f"
        },
        {
          "id": "apbio-ch01-s02-lo02",
          "type": "lo",
          "description": "Describe the levels of organization among living things",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": true
        },
        {
          "id": "apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms-4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "book:stax-bio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "dok:3",
          "type": "dok",
          "name": "DOK: 3",
          "is_visible": true,
          "data": "3"
        },
        {
          "id": "blooms:4",
          "type": "blooms",
          "name": "Blooms: 4",
          "is_visible": true,
          "data": "4"
        },
        {
          "id": "type:practice",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "book:stax-apbio",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "filter-type:import:hs",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "ost-chapter-review",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "time-long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "time:long",
          "type": "length",
          "name": "Length: L",
          "is_visible": true,
          "data": "long"
        },
        {
          "id": "critical-thinking",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-s02",
          "type": "generic",
          "chapter_section": [
            1,
            2
          ],
          "is_visible": false
        },
        {
          "id": "tutor-only",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "apbio-ch01-ot015",
          "type": "generic",
          "is_visible": false
        }
      ],
      "pool_types": [
        "homework_core"
      ],
      "is_excluded": false,
      "has_interactive": false,
      "has_video": false
    }
  ]
}
```

