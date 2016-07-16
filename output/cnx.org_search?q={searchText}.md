# https://cnx.org/search?q={searchText}

![image](./cnx.org_search?q={searchText}.png)

# AJAX Calls

## GET https://cnx.org/users/profile

```json
"<!DOCTYPE html><html lang=\"en-US\"><head><title>OpenStax CNX</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-sca ... 733 more"
```

## GET https://archive.cnx.org/extras

```json
{
  "featuredLinks": [
    {
      "title": "Business Fundamentals",
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 706 more",
      "resourcePath": "/resources/4c2732eca36eb7b56ae1b67dcb510e94744b6c99",
      "version": "4.3",
      "legacy_id": "col11227",
      "legacy_version": "1.4",
      "type": "CNX Featured",
      "id": "d6db603c-cd31-4ca4-be19-d29734673b90"
    },
    {
      "title": "Images of Memorable Cases: 50 Years at the Bedside",
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 232 more",
      "resourcePath": "/resources/5fc217ae874f70e5194c172c8be4083abe4282ac",
      "version": "7.2",
      "legacy_id": "col10449",
      "legacy_version": "1.7",
      "type": "CNX Featured",
      "id": "e7b71f2c-a51e-4c9f-8db2-066a4c3643e4"
    },
    "... skipped 56"
  ],
  "messages": [],
  "licenses": [
    {
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "code": "by",
      "name": "Creative Commons Attribution License",
      "version": "4.0",
      "isValidForPublication": true
    },
    {
      "url": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      "code": "by-nc-sa",
      "name": "Creative Commons Attribution-NonCommercial-ShareAlike License",
      "version": "4.0",
      "isValidForPublication": false
    },
    "... skipped 9"
  ],
  "subjects": [
    {
      "count": {
        "collection": 819,
        "module": 14577
      },
      "id": 5,
      "name": "Science and Technology"
    },
    {
      "count": {
        "collection": 245,
        "module": 3703
      },
      "id": 7,
      "name": "Social Sciences"
    },
    "... skipped 4"
  ],
  "languages_and_count": [
    [
      "hu-hu",
      1
    ],
    [
      "es-ar",
      2
    ],
    "... skipped 60"
  ]
}
```

## GET https://archive.cnx.org/extras

```json
{
  "featuredLinks": [
    {
      "title": "Business Fundamentals",
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 706 more",
      "resourcePath": "/resources/4c2732eca36eb7b56ae1b67dcb510e94744b6c99",
      "version": "4.3",
      "legacy_id": "col11227",
      "legacy_version": "1.4",
      "type": "CNX Featured",
      "id": "d6db603c-cd31-4ca4-be19-d29734673b90"
    },
    {
      "title": "Images of Memorable Cases: 50 Years at the Bedside",
      "abstract": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:md=\"http://cnx.rice.edu/mdml\" xmlns:c=\"http://cnx.rice.edu/cnxml\" xmlns:html=\"http://www.w3.org/1999/x ... 232 more",
      "resourcePath": "/resources/5fc217ae874f70e5194c172c8be4083abe4282ac",
      "version": "7.2",
      "legacy_id": "col10449",
      "legacy_version": "1.7",
      "type": "CNX Featured",
      "id": "e7b71f2c-a51e-4c9f-8db2-066a4c3643e4"
    },
    "... skipped 56"
  ],
  "messages": [],
  "licenses": [
    {
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "code": "by",
      "name": "Creative Commons Attribution License",
      "version": "4.0",
      "isValidForPublication": true
    },
    {
      "url": "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      "code": "by-nc-sa",
      "name": "Creative Commons Attribution-NonCommercial-ShareAlike License",
      "version": "4.0",
      "isValidForPublication": false
    },
    "... skipped 9"
  ],
  "subjects": [
    {
      "count": {
        "collection": 819,
        "module": 14577
      },
      "id": 5,
      "name": "Science and Technology"
    },
    {
      "count": {
        "collection": 245,
        "module": 3703
      },
      "id": 7,
      "name": "Social Sciences"
    },
    "... skipped 4"
  ],
  "languages_and_count": [
    [
      "hu-hu",
      1
    ],
    [
      "es-ar",
      2
    ],
    "... skipped 60"
  ]
}
```

## GET https://archive.cnx.org/search?q=SELENIUM_NO_RESULTS

```json
{
  "query": {
    "sort": [],
    "per_page": 20,
    "page": 1,
    "limits": [
      {
        "tag": "text",
        "value": "SELENIUM_NO_RESULTS"
      }
    ]
  },
  "results": {
    "items": [
      {
        "bodySnippet": null,
        "summarySnippet": "  \n Name several real-world applications of the study of electrostatics. \n  ",
        "pubDate": "2012-07-06T02:19:29Z",
        "title": "Applications of Electrostatics",
        "keywords": [
          "Van de Graaff generator",
          "xerography",
          "... skipped 5"
        ],
        "authors": [
          {
            "index": 16,
            "id": "OpenStaxCollege"
          }
        ],
        "id": "56ae5355-400b-4330-8552-980b0744e2ca@6",
        "mediaType": "application/vnd.org.cnx.module"
      },
      {
        "bodySnippet": null,
        "summarySnippet": " A series of discussion topics relating bacteria and archaea to everyday life ",
        "pubDate": "2016-06-15T17:44:04Z",
        "title": "07.2 Discussion topics on bacteria and archaea  MS MI",
        "keywords": [
          "archaea",
          "symbiosis",
          "... skipped 2"
        ],
        "authors": [
          {
            "index": 11,
            "id": "bis2ateam"
          }
        ],
        "id": "4fa27801-3cd6-4821-a1d2-4bd37b60ad55@1",
        "mediaType": "application/vnd.org.cnx.module"
      },
      "... skipped 18"
    ],
    "total": 37,
    "auxiliary": {
      "types": [
        {
          "id": "application/vnd.org.cnx.collection",
          "name": "Book"
        },
        {
          "id": "application/vnd.org.cnx.module",
          "name": "Page"
        }
      ],
      "authors": [
        {
          "surname": "Bear",
          "suffix": "",
          "firstname": "Robert",
          "title": "",
          "fullname": "Robert Bear",
          "id": "RobbieBear13"
        },
        {
          "surname": "OpenStax College",
          "suffix": "",
          "firstname": "",
          "title": "",
          "fullname": "OpenStax",
          "id": "OpenStaxCollege"
        },
        "... skipped 15"
      ]
    },
    "limits": [
      {
        "tag": "keyword",
        "values": [
          {
            "count": 3,
            "value": "zinc blende"
          },
          {
            "count": 2,
            "value": "zone refining"
          },
          "... skipped 98"
        ]
      },
      {
        "tag": "subject",
        "values": [
          {
            "count": 47,
            "value": "Science and Technology"
          },
          {
            "count": 1,
            "value": "Social Sciences"
          }
        ]
      },
      "... skipped 3"
    ]
  }
}
```

