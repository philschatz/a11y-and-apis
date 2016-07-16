# https://openstax.org/partners

![image](./openstax.org_partners.png)

# AJAX Calls

## GET https://openstax.org/app/helpers/backbone/model.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _backbone = require('backbone');\n\nvar _backbone2 = _interopRequir ... 376 more"
```

## GET https://openstax.org/app/models/pagemodel.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _model = require('~/helpers/backbo ... 1958 more"
```

## GET https://openstax.org/app/pages/partners/partners.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _get = function get(object, proper ... 13961 more"
```

## GET https://openstax.org/app/helpers/backbone/loading-view.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target,  ... 7101 more"
```

## GET https://openstax.org/app/components/filter-button/filter-button.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { funct ... 4767 more"
```

## GET https://openstax.org/app/components/strips/strips.hbs.js

```json
"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.template = undefined;\n\nvar _handlebars = require(\"handlebars ... 534 more"
```

## GET https://openstax.org/app/pages/partners/icon/icon.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { funct ... 4133 more"
```

## GET https://openstax.org/app/pages/partners/partner/partner.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { funct ... 4265 more"
```

## GET https://openstax.org/app/pages/partners/partners.hbs.js

```json
"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.template = undefined;\n\nvar _handlebars = require(\"handlebars ... 1095 more"
```

## GET https://openstax.org/app/components/loading-section/loading-section.js

```json
"'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { funct ... 2490 more"
```

## GET https://openstax.org/api/v1/pages?type=news.NewsArticle&fields=slug%2Ctitle%2Cdate%2Cauthor%2Cpin_to_top%2Csubheading%2Cbody%2Carticle_image

```json
{
  "meta": {
    "total_count": 0
  },
  "pages": []
}
```

## GET https://openstax.org/app/components/loading-section/loading-section.hbs.js

```json
"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.template = undefined;\n\nvar _handlebars = require(\"handlebars ... 3688 more"
```

## GET https://openstax.org/app/pages/partners/icon/icon.hbs.js

```json
"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.template = undefined;\n\nvar _handlebars = require(\"handlebars\") ... 1797 more"
```

## GET https://openstax.org/app/pages/partners/partner/partner.hbs.js

```json
"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.template = undefined;\n\nvar _typeof = typeof Symbol === \"func ... 1840 more"
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

## GET https://openstax.org/api/v1/pages?type=pages.EcosystemAllies&fields=title%2Cclassroom_text

```json
{
  "meta": {
    "total_count": 1
  },
  "pages": [
    {
      "classroom_text": "<p>\n\n\n\n\n\n\n\n</p><p>OpenStax Partners have united with us in our mission to make high-quality learning materials affordable and accessible to students a ... 90 more",
      "id": 50,
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/50/",
        "type": "pages.EcosystemAllies"
      },
      "title": "Partners"
    }
  ]
}
```

## GET https://openstax.org/api/v1/pages?type=allies.Ally&fields=ally_subject_list%2Ctitle%2Cshort_description%2Clong_description%2Cheading%2Cis_ap%2Cally_bw_logo

```json
{
  "meta": {
    "total_count": 18
  },
  "pages": [
    {
      "ally_bw_logo": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/original_images/emath-1_gray.png",
      "ally_subject_list": [
        "Math"
      ],
      "heading": "eMath",
      "id": 87,
      "is_ap": false,
      "long_description": "<p>eMath is a fully customizable online adaptive courseware focusing on student success. eMath provides ample options to help students learn and perfo ... 1290 more",
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/87/",
        "type": "allies.Ally"
      },
      "short_description": "<p>eMath is a fully customizable online adaptive courseware focusing on student success. eMath supports textbooks from OpenStax with tens of thousands ... 81 more",
      "title": "eMath"
    },
    {
      "ally_bw_logo": "https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/original_images/Rice_Online_Learning_logo_BW.png",
      "ally_subject_list": [
        "Science"
      ],
      "heading": "Rice Online Learning",
      "id": 92,
      "is_ap": true,
      "long_description": "<p>Rice Online Learning offers the AP<sup>®</sup> Physics 1 online course through the edX platform and has partnered with OpenStax to bring this conte ... 766 more",
      "meta": {
        "detail_url": "https://openstax.org/api/v1/pages/92/",
        "type": "allies.Ally"
      },
      "short_description": "<p>Rice Online Learning offers the AP<sup>®</sup> Physics 1 online course through the edX platform and has partnered with OpenStax to bring this conte ... 48 more",
      "title": "Rice Online Learning"
    },
    "... skipped 16"
  ]
}
```

