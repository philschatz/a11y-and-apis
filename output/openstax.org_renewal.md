# https://openstax.org/renewal

![image](./screenshots/openstax.org_renewal.png)

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

Showing first 50 of 18 errors

```
ERROR a[href='#maincontent'] WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
ERROR button.expand[type='button'][role='button'][aria-haspopup='true'][aria-label='Toggle Meta Navigation Menu'][tabindex='0'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Button.Name
warning label WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning label WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning label WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning label WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning select[name='00NU00000053nzR'][required=''].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
warning select[name='00NU00000055spw'].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
warning label WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning select[multiple=''][name='00NU0000005VmTu'].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
warning label#other-partner.hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning label.question WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning select[multiple=''][name='00NU00000055spm'].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
warning select[name='00NU00000055sq6'].hidden WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Select.Value
warning select[name='00NU00000055sq6'].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
warning label.question WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
warning select[name='00NU00000055sqB'].hidden WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Select.Value
warning select[name='00NU00000055sqB'].hidden WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2
```

