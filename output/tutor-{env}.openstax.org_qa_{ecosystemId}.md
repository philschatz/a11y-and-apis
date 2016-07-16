# https://tutor-{env}.openstax.org/qa/{ecosystemId}

![image](./tutor-{env}.openstax.org_qa_{ecosystemId}.png)

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

## GET /api/ecosystems/1/exercises/?page_ids%5B%5D=1

```json
{
  "total_count": 0,
  "items": []
}
```

