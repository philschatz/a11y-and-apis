# https://tutor-{env}.openstax.org/qa/{ecosystemId}

![image](./screenshots/tutor-{env}.openstax.org_qa_{ecosystemId}.png)

# AJAX Calls

## GET /api/ecosystems/1/exercises/?page_ids%5B%5D=1

```json
{
  "items": [],
  "total_count": 0
}
```


# WCAG2A Errors

Showing first 50 of 9 errors

```
ERROR html WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2
ERROR a[href=''][aria-selected='false'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId
warning a[href=''][aria-selected='false'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder
warning a#available-books.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
warning a#navbar-dropdown.dropdown-toggle[type='button'][aria-haspopup='true'][aria-expanded='false'][href=''] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref
ERROR a[href='#'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
warning h3 WCAG2A.Principle1.Guideline1_3.1_3_1_A.G141
ERROR a.page-navigation.next[href='/qa/1/section/1.1'] WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent
ERROR a[href='#spy'].debug-toggle-link WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID
```

