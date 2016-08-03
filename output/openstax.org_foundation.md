# https://openstax.org/foundation

![image](./screenshots/openstax.org_foundation.png)

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


# WCAG2A Errors

Showing first 50 of 10 errors

```
ERROR a[href='#maincontent'] WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR a[href='http://www.arnoldfoundation.org/'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
ERROR a[href='http://www.gatesfoundation.org/'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
ERROR a[href='http://www.hewlett.org/'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
ERROR a[href='http://www.kazanjian.org/'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
ERROR img[src='/images/foundation/maxfield.png'] WCAG2A.Principle1.Guideline1_1.1_1_1.H37
ERROR a[href='http://www.rice.edu'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
ERROR img[src='/images/foundation/sick-fund.gif'] WCAG2A.Principle1.Guideline1_1.1_1_1.H37
ERROR a[href='http://20mm.org/'] WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2
```

