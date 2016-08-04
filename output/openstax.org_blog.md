# https://openstax.org/blog

![image](./screenshots/openstax.org_blog.png)

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


# WCAG2AAA Errors

Showing first 50 of 5 errors

```
warning link[rel='mask-icon'][href='/safari-pinned-tab.svg'][color='#f47641'] WCAG2AAA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
ERROR a[href='#maincontent'] WCAG2AAA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR h2 WCAG2AAA.Principle1.Guideline1_3.1_3_1_AAA.G141
warning style[type='text/css'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
```

