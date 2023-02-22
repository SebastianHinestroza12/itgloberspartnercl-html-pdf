📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PDF READER

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)


This component is for reading files in PDF format.


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677036212/catalogo_yce3kz.png">

## Configuration 

1. Import the Pdf Reader app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.pdf-reader": "0.x"
  }
 ```
 
 2. Add the pdf-reader block to the store-theme. for example:
```json
 {
   "flex-layout.row#pdf__reader": {
    "title": "Custom Pdf Reader",
    "children": [
      "pdf-reader"
    ]
  },
  "pdf-reader": {
    "props": {
      "pdfUrl": "https://file-examples.com/storage/fe1aa0c9d563ea1e4a1fd34/2017/10/file-sample_150kB.pdf",
      "width": 500,
      "height": 700
    }
  }
}
   ```
| Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `pdf-reader` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store-theme block to render a default pdf reader viewer.   |

### Pdf-reader props

| Prop name    | Type            | Description    | Default value                                                                                       |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `pdfURL`        | `string`       |  Define the url to render in the pdf-reader file       | `undefined`              |
| `width`        | `number`       | Define the width  to render pdf-reader apps      | `undefined`              |
| `height`        | `number`       | Define the height to render pdf-reader apps         | `undefined`       
## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` container__pdf `|

<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
