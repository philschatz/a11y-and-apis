# https://openstax.org/tos

![image](./screenshots/openstax.org_tos.png)

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

Showing first 50 of 62 errors

```
warning span.logo-quote WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR span.logo-quote WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects'][role='menuitem'][aria-haspopup='true'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects'][role='menuitem'][aria-haspopup='true'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects/math'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects/math'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects/science'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects/science'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects/social-sciences'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects/social-sciences'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects/humanities'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects/humanities'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/subjects/ap'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/subjects/ap'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning sup WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR sup WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/higher-ed'][role='menuitem'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/higher-ed'][role='menuitem'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/k-12'][role='menuitem'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/k-12'][role='menuitem'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/impact'][role='menuitem'][aria-haspopup='true'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/impact'][role='menuitem'][aria-haspopup='true'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR title WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/impact'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/impact'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/partners'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/partners'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
warning a[href='/foundation'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Abs
ERROR a[href='/foundation'][role='menuitem'][tabindex='-1'] WCAG2AAA.Principle1.Guideline1_4.1_4_6.G17.Fail
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2AAA.Principle4.Guideline4_1.4_1_2.H91.Button.Name
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

