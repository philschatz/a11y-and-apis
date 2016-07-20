# https://openstax.org/subjects

![image](./screenshots/openstax.org_subjects.png)

# AJAX Calls

## GET https://openstax.org/api/v1/pages?type=news.NewsArticle&fields=slug%2Ctitle%2Cdate%2Cauthor%2Cpin_to_top%2Csubheading%2Cbody%2Carticle_image

```json
{
  "meta": {
    "total_count": 0
  },
  "pages": []
}
```

## GET https://openstax.org/api/user/

```json
[
  {
    "accounts_id": null,
    "groups": [],
    "is_staff": false,
    "is_superuser": false,
    "pending_verification": false,
    "username": ""
  }
]
```

## GET https://openstax.org/api/v1/pages?type=books.BookIndex

```json
{
  "meta": {
    "total_count": 1
  },
  "pages": [
    {
      "id": 30,
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/30/",
        "type": "books.BookIndex"
      },
      "title": "Subjects"
    }
  ]
}
```

## GET https://openstax.org/api/v1/pages/30

```json
{
  "dev_standard_1_description": "<p>Our open source textbooks are written by professional content developers who are experts in their fields.<br/></p>",
  "dev_standard_1_heading": "Expert Authors",
  "dev_standard_2_description": "<p>All textbooks meet standard scope and sequence requirements, making them seamlessly adaptable into existing courses.</p>",
  "dev_standard_2_heading": "Standard Scope and Sequence",
  "dev_standard_3_description": "<p>OpenStax textbooks undergo a rigorous peer review process. You can view the list of contributors when you click on each book.</p>",
  "dev_standard_3_heading": "Peer Reviewed",
  "dev_standards_heading": "Development Standards",
  "id": 30,
  "meta": {
    "detail_url": "https://openstax.org/api/v1/pages/30/",
    "type": "books.BookIndex"
  },
  "page_description": "<h2>Open source. Peer-reviewed. 100% free.</h2><p>And backed by additional learning resources. Review our OpenStax textbooks and decide if they are ri ... 122 more",
  "parent": {
    "id": 29,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/pages/29/",
      "type": "pages.HomePage"
    }
  },
  "subject_list_heading": "Subjects",
  "title": "Subjects"
}
```

## GET https://openstax.org/api/v1/pages?type=books.Book&fields=title%2Csubject_name%2Cis_ap%2Ccover_url%2Chigh_resolution_pdf_url%2Clow_resolution_pdf_url%2Cibook_link%2Cibook_link_volume_2%2Cwebview_link%2Cconcept_coach_link%2Cbookshare_link%2Camazon_link%2Camazon_price%2Camazon_blurb%2Cbookstore_link%2Cbookstore_blurb%2Cslug&limit=50

```json
{
  "meta": {
    "total_count": 27
  },
  "pages": [
    {
      "amazon_blurb": "",
      "amazon_link": "",
      "amazon_price": "0.00",
      "bookshare_link": "",
      "bookstore_blurb": "",
      "bookstore_link": "",
      "concept_coach_link": "",
      "cover_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/american_government.svg",
      "high_resolution_pdf_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/American_Government-OP.pdf",
      "ibook_link": "",
      "ibook_link_volume_2": "",
      "id": 84,
      "is_ap": false,
      "low_resolution_pdf_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/American_Government-LR.pdf",
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/84/",
        "type": "books.Book"
      },
      "slug": "american-government",
      "subject_name": "Social Sciences",
      "title": "American Government",
      "webview_link": "http://cnx.org/content/col11995"
    },
    {
      "amazon_blurb": "",
      "amazon_link": "",
      "amazon_price": "0.00",
      "bookshare_link": "",
      "bookstore_blurb": "",
      "bookstore_link": "",
      "concept_coach_link": "",
      "cover_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/Chmistry-Atoms-First.svg",
      "high_resolution_pdf_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/col12012-1.6-OP.pdf",
      "ibook_link": "",
      "ibook_link_volume_2": "",
      "id": 93,
      "is_ap": false,
      "low_resolution_pdf_url": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/col12012-1.6-LR.pdf",
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/93/",
        "type": "books.Book"
      },
      "slug": "chemistry-atoms-first",
      "subject_name": "Science",
      "title": "Chemistry: Atoms First",
      "webview_link": ""
    },
    "... skipped 25"
  ]
}
```

