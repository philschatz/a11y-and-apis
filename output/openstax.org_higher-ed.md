# https://openstax.org/higher-ed

![image](./screenshots/openstax.org_higher-ed.png)

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

## GET https://openstax.org/api/v1/pages?type=pages.HigherEducation

```json
{
  "meta": {
    "total_count": 1
  },
  "pages": [
    {
      "id": 88,
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/88/",
        "type": "pages.HigherEducation"
      },
      "title": "Higher Education"
    }
  ]
}
```

## GET https://openstax.org/api/v1/pages/88/

```json
{
  "adopt_cta": "Contact Us",
  "adopt_description": "<p>If you are an administrator interested in driving adoptions of OpenStax textbooks at your institution, we are here to support you!</p>",
  "adopt_heading": "Adopt as an Institution",
  "get_started_heading": "Getting Started",
  "get_started_step_1_cta": "View Books",
  "get_started_step_1_description": "<p>The entire contents of our free textbooks are available online. Review a book or chapter and see the quality for yourself.</p>",
  "get_started_step_1_heading": "Review a Textbook",
  "get_started_step_2_cta": "Create Account",
  "get_started_step_2_description": "<p>We provide additional free instructor-only resources like test banks and solution manuals to plan your course.</p>",
  "get_started_step_2_heading": "Create a Faculty Account",
  "get_started_step_3_cta": "Adopt",
  "get_started_step_3_description": "<p>Access to our textbooks is completely free. Let us know you've adopted, and share our URL with your students! You can also recommend a book as an o ... 27 more",
  "get_started_step_3_heading": "Adopt a Textbook",
  "id": 88,
  "intro_description": "<p>Some of the most valuable investments don't have a price tag. Neither do our textbooks. Our free, high-quality textbooks and learning technology gi ... 80 more",
  "intro_heading": "Free textbooks. High quality. No catch.",
  "meta": {
    "detail_url": "https://openstax.org/api/v1/pages/88/",
    "type": "pages.HigherEducation"
  },
  "parent": {
    "id": 29,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/pages/29/",
      "type": "pages.HomePage"
    }
  },
  "row_0_box_1_content": "<p>\"Openstax makes acquisition of a textbook a no cost, one click experience.\" </p><p><b><i>— Alexander Wathen, <br/>University of Houston—Downtown</i ... 14 more",
  "row_0_box_1_cta": "",
  "row_0_box_1_image": null,
  "row_0_box_1_image_alignment": "L",
  "row_0_box_1_link": "",
  "row_0_box_2_content": "<p>Concept Coach is our free new tool that helps college students understand and retain what they’ve read. We’re recruiting faculty for our Fall 2016  ... 10 more",
  "row_0_box_2_cta": "Sign up",
  "row_0_box_2_image": {
    "id": 42,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/images/42/",
      "type": "wagtailimages.Image"
    }
  },
  "row_0_box_2_image_alignment": "L",
  "row_0_box_2_link": "http://cc.openstax.org/sign-up",
  "row_0_box_3_content": "",
  "row_0_box_3_cta": "",
  "row_0_box_3_image": null,
  "row_0_box_3_image_alignment": null,
  "row_0_box_3_link": "",
  "row_1_box_1_cta": "Explore Our Subjects",
  "row_1_box_1_description": "<p>All of our textbooks are peer-reviewed and absolutely free. They meet standard scope and sequence requirements and come in web view, PDF, iBooks, o ... 31 more",
  "row_1_box_1_heading": "Our Books",
  "row_1_box_1_image": {
    "id": 37,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/images/37/",
      "type": "wagtailimages.Image"
    }
  },
  "row_1_box_1_link": "http://openstax.org/subjects",
  "row_1_box_2_cta": "Learn More",
  "row_1_box_2_description": "<p>We're integrating our adaptive learning technology with our college textbooks to improve student reading comprehension at zero cost.</p>",
  "row_1_box_2_heading": "Concept Coach",
  "row_1_box_2_image": {
    "id": 38,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/images/38/",
      "type": "wagtailimages.Image"
    }
  },
  "row_1_box_2_link": "http://cc.openstax.org",
  "row_1_box_3_cta": "Discover Free Content",
  "row_1_box_3_description": "<p>OpenStax CNX is an open library of educational content where anyone can contribute. View, share, and add material that you can remix and reuse for  ... 16 more",
  "row_1_box_3_heading": "OpenStax CNX",
  "row_1_box_3_image": {
    "id": 39,
    "meta": {
      "detail_url": "https://openstax.org/api/v1/images/39/",
      "type": "wagtailimages.Image"
    }
  },
  "row_1_box_3_link": "http://cnx.org",
  "row_2_box_1_cta": "See Our Impact",
  "row_2_box_1_description": "<p>Faculty at over 3,000 institutions are opening doors for student success by adopting OpenStax.</p>",
  "row_2_box_1_heading": "Our Impact",
  "row_2_box_1_link": "http://openstax.org/impact",
  "row_2_box_2_cta": "View Partners",
  "row_2_box_2_description": "<p>OpenStax partners have united with us to increase access to high-quality learning materials. Their low-cost tools integrate seamlessly with OpenSta ... 12 more",
  "row_2_box_2_heading": "OpenStax Partners",
  "row_2_box_2_link": "http://openstax.org/partners",
  "search_description": "",
  "seo_title": "",
  "slug": "higher-education",
  "title": "Higher Education"
}
```

## GET https://openstax.org/api/v0/images/42

```json
{
  "created_at": "2016-06-28T14:25:38.167565Z",
  "file": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/original_images/CCStudentsLargerPhoto.jpg",
  "height": 3850,
  "id": 42,
  "title": "Concept Coach Students Larger Image",
  "width": 4206
}
```


# WCAG2AAA Errors

Showing first 50 of 91 errors

```
ERROR a[href='/impact'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/partners'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/partners'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/foundation'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/foundation'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR h1.header[data-id='intro_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='#getting-started'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR i WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR a.btn.btn-orange[href='http://cc.openstax.org/sign-up'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.header[data-id='get_started_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR div.title[data-id='get_started_step_1_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/subjects'][data-id='get_started_step_1_cta'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.title[data-id='get_started_step_2_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='https://openstax.org/accounts/login/openstax/?next=https://openstax.org/faculty-verification'][data-local='true'][data-id='get_started_step_2_ ... 5 more WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.title[data-id='get_started_step_3_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/adoption'][data-id='get_started_step_3_cta'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.title[data-id='adopt_heading'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/contact?subject=College/University Partnerships'][data-id='adopt_cta'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR h3.title WCAG2AAA.Principle1.Guideline1_3.1_3_1_AAA.G141
ERROR a.btn[href='/subjects'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a.btn[href='http://cc.openstax.org'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a.btn[href='//cnx.org'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning span.title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.BgImage
warning p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
ERROR a.btn.btn-cyan[href='http://openstax.org/impact'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning span.title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.BgImage
warning p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
ERROR a.btn.btn-gold[href='http://openstax.org/partners'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR div.hero-quote WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR span.narrow-block WCAG2AAA.Principle1.Guideline1_4.1_4_6.G18.Fail
ERROR a[href='/license'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/tos'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/accessibility-statement'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='https://github.com/openstax'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR a[href='/contact'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR p WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR sup WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR sup WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a.btn.btn-social.facebook[href='https://www.facebook.com/openstax'][title='facebook'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning a.btn.btn-social.twitter[href='https://twitter.com/openstax'][title='twitter'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
warning a.btn.btn-social.linkedin[href='https://www.linkedin.com/company/openstax'][title='linkedin'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.BgImage
undefined undefined undefined
```

