# https://tutor-{env}.openstax.org/qa/{ecosystemId}/section/{bookSection}

![image](./tutor-{env}.openstax.org_qa_{ecosystemId}_section_{bookSection}.png)

# AJAX Calls

## GET /api/ecosystems

```json
[
  {
    "id": 2,
    "books": [
      {
        "id": 2,
        "uuid": "f10533ca-f803-490d-b935-88899941197f",
        "title": "Mini CC Biology Tes Coll",
        "version": "3.1"
      }
    ]
  },
  {
    "id": 1,
    "books": [
      {
        "id": 1,
        "uuid": "d52e93f4-8653-4273-86da-3850001c0786",
        "title": "Biology For AP® Courses",
        "version": "9.14"
      }
    ]
  },
  "... skipped 2"
]
```

## GET /api/ecosystems/1/readings

```json
[
  {
    "id": "1",
    "uuid": "d52e93f4-8653-4273-86da-3850001c0786",
    "cnx_id": "d52e93f4-8653-4273-86da-3850001c0786@9.14",
    "archive_url": "https://archive-staging-tutor.cnx.org",
    "webview_url": "https://archive-staging-tutor.cnx.org",
    "title": "Biology For AP® Courses",
    "type": "part",
    "chapter_section": [],
    "children": [
      {
        "id": "37",
        "title": "Ecosystems",
        "type": "part",
        "chapter_section": [
          37
        ],
        "children": [
          {
            "id": "199",
            "uuid": "81ba476c-4db2-47fe-a315-f63dba818a51",
            "cnx_id": "81ba476c-4db2-47fe-a315-f63dba818a51@21",
            "title": "Energy Flow through Ecosystems",
            "type": "page",
            "chapter_section": [
              37,
              2
            ]
          },
          {
            "id": "200",
            "uuid": "77e9b486-5d40-4fca-8a77-b049590ecb86",
            "cnx_id": "77e9b486-5d40-4fca-8a77-b049590ecb86@19",
            "title": "Biogeochemical Cycles",
            "type": "page",
            "chapter_section": [
              37,
              3
            ]
          },
          "... skipped 2"
        ]
      },
      {
        "id": "38",
        "title": "Conservation Biology and Biodiversity",
        "type": "part",
        "chapter_section": [
          38
        ],
        "children": [
          {
            "id": "204",
            "uuid": "1f383a77-28e1-4731-b53b-838f52ddc587",
            "cnx_id": "1f383a77-28e1-4731-b53b-838f52ddc587@5",
            "title": "Threats to Biodiversity",
            "type": "page",
            "chapter_section": [
              38,
              3
            ]
          },
          {
            "id": "205",
            "uuid": "d27666c2-d08e-4ca4-aa45-4af2263a07dd",
            "cnx_id": "d27666c2-d08e-4ca4-aa45-4af2263a07dd@4",
            "title": "Preserving Biodiversity",
            "type": "page",
            "chapter_section": [
              38,
              4
            ]
          },
          "... skipped 3"
        ]
      },
      "... skipped 36"
    ]
  }
]
```

## GET /api/ecosystems/1/exercises/?page_ids%5B%5D=5

```json
{
  "total_count": 18,
  "items": [
    {
      "id": "46",
      "url": "https://exercises-dev.openstax.org/exercises/46@1",
      "content": {
        "attachments": [],
        "tags": [
          "filter-type:import:hs",
          "filter-type:import:has-context",
          "... skipped 18"
        ],
        "uid": "46@1",
        "number": 46,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.325Z",
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
            "id": 46,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "Use the periodic table to describe what a Bohr model of Fluorine (F) would look like and explain why the Bohr model is not an accurate representation  ... 37 more",
            "answers": [
              {
                "id": 183,
                "content_html": "Bohr model would have 2 electron rings, Bohr model would not show the sub-shell of second ring",
                "correctness": "1.0",
                "feedback_html": "Bohr model would not show the sub-shells of the second ring."
              },
              {
                "id": 184,
                "content_html": "Bohr model would have one electron ring, Bohr model would not give information about number of electron in each ring",
                "correctness": "0.0",
                "feedback_html": "Bohr model would have two electron rings. The first ring has two electrons and second has seven electrons."
              },
              "... skipped 2"
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "The nucleus of fluorine in the Bohr model would show <span data-math=\"9\">9</span> protons and <span data-math=\"10\">10</span> neutrons, yielding its at ... 408 more"
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
          "id": "apbio-ch02-ex005",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch02-ex005",
          "type": "generic",
          "is_visible": false
        },
        "... skipped 18"
      ],
      "pool_types": [
        "practice_widget",
        "all_exercises"
      ],
      "has_interactive": false,
      "has_video": false
    },
    {
      "id": "48",
      "url": "https://exercises-dev.openstax.org/exercises/48@1",
      "content": {
        "attachments": [],
        "tags": [
          "filter-type:import:hs",
          "filter-type:import:has-context",
          "... skipped 18"
        ],
        "uid": "48@1",
        "number": 48,
        "version": 1,
        "published_at": "2015-09-16T20:13:33.353Z",
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
            "id": 48,
            "is_answer_order_important": true,
            "stimulus_html": "",
            "stem_html": "What makes ionic bonds different from covalent bonds?",
            "answers": [
              {
                "id": 191,
                "content_html": "Ionic bond involves the sharing of electrons whereas a covalent bond involves the transfer of electrons.",
                "correctness": "0.0",
                "feedback_html": "The sharing of electrons occurs in covalent bonding. The transfer of electrons occurs in an ionic bond."
              },
              {
                "id": 192,
                "content_html": "An ionic bond involves the transfer of electrons whereas a covalent bond involves the van der Waals force of interaction.",
                "correctness": "0.0",
                "feedback_html": "The covalent bond is entirely different from the van der Waals force of interaction."
              },
              "... skipped 2"
            ],
            "collaborator_solutions": [
              {
                "attachments": [],
                "solution_type": "detailed",
                "content_html": "Ionic bonds occur when one atom transfers one or more electrons to the other, resulting in positively and negatively charged ions. The oppositely char ... 116 more"
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
          "id": "apbio-ch02-ex007",
          "type": "generic",
          "is_visible": false
        },
        {
          "id": "exid:apbio-ch02-ex007",
          "type": "generic",
          "is_visible": false
        },
        "... skipped 18"
      ],
      "pool_types": [
        "practice_widget",
        "all_exercises"
      ],
      "has_interactive": false,
      "has_video": false
    },
    "... skipped 16"
  ]
}
```

