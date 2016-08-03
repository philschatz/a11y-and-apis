# https://openstax.org/contact

![image](./screenshots/openstax.org_contact.png)

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

## GET https://openstax.org/api/v1/pages?type=pages.ContactUs&fields=title%2Ctagline%2Cmailing_header%2Cmailing_address%2Cphone_number

```json
{
  "meta": {
    "total_count": 1
  },
  "pages": [
    {
      "id": 89,
      "mailing_address": "<h3>OpenStax</h3><p>Rice University</p><p><br/></p><p>6100 Main St. MS 375</p><p><br/></p><p>Houston, TX 77005</p>",
      "mailing_header": "Mailing Address",
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/89/",
        "type": "pages.ContactUs"
      },
      "phone_number": "(713) 348-5012",
      "tagline": "If you have any questions or feedback, drop us a line!",
      "title": "Contact Us"
    }
  ]
}
```


# WCAG2A Errors

Showing first 50 of 11 errors

```
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Button.Name
ERROR select.hidden WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Select.Name
warning select.hidden WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Select.Value
ERROR select.hidden WCAG2A.Principle1.Guideline1_3.1_3_1.F68
warning select.hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
ERROR input[name='name'][type='text'][size='20'][required=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
ERROR input[name='name'][type='text'][size='20'][required=''] WCAG2A.Principle1.Guideline1_3.1_3_1.F68
ERROR input[name='email'][pattern='[^@]+@([^@\.]+\.)+[^@\.]+'][type='text'][required=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
ERROR input[name='email'][pattern='[^@]+@([^@\.]+\.)+[^@\.]+'][type='text'][required=''] WCAG2A.Principle1.Guideline1_3.1_3_1.F68
ERROR textarea[cols='50'][name='description'][rows='6'][required=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Textarea.Name
ERROR textarea[cols='50'][name='description'][rows='6'][required=''] WCAG2A.Principle1.Guideline1_3.1_3_1.F68
```

