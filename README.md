# dna-responsive-nav

> React component for a responsive navigation bar with a search box using Semantic-UI theme.

[![NPM](https://img.shields.io/npm/v/dna-responsive-nav.svg)](https://www.npmjs.com/package/dna-responsive-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

https://deniapps.com/playground/dna-rn

## About

I created this tiny package to solve the issue that neither Semantic UI nor Semantic UI React offers a responsive navbar. They provide an [example](https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js) about how to create one using sidebar, but it's just way too complicated, and not easy to use in my opinion.

You can customize the style by creating a new css file based one the default one at `dna-responsive-nav/dist/dna-rn.css` to match your site.

NOTE: It uses semantic-ui for icon and input, so you have to import 'semantic-ui-css/semantic.min.css' if you site is not yet using it. (I am looking for a better solution to fix this drawback.)

## Features

- With a responsive search box
- Be able to disable the search box
- Simple & Slick (Only three options)
- Scrollable navigation links in the desktop mode in case you have many links
- Fading effect when navigation links overflows at the left and right edges (i.e. x-overflow)

## Screenshots

![Blog-DeNiApps-mobile](https://user-images.githubusercontent.com/66892370/91248617-057a6380-e723-11ea-9b22-13840f2e52f6.png)
![Blog-DeNiApps-search](https://user-images.githubusercontent.com/66892370/91248659-1fb44180-e723-11ea-958e-f75e1b084dc1.png)

## Install

```bash
npm install --save dna-responsive-nav
```

## Options

| option       | required? | type     | explain                                                      |
| ------------ | --------- | -------- | ------------------------------------------------------------ |
| siteName     | yes       | string   | site name                                                    |
| links        | yes       | node     | site navigation links                                        |
| logo         | no        | string   | image path of the site logo, if no set, then logo is hidden. |
| handleSearch | no        | function | if not set, the search box is hidden.                        |

By default both siteName and logo show when the page width is >= 780px, and only logo shows when the page width is < 780px.
But you can overwrite this by using css style sheet. Make a new one from the default one at `dna-responsive-nav/dist/dna-rn.css`,
and change the following lines:

```css
/** when page width >=780px **/
.dnarn nav .logo img {
  display: inline-block; /** to show/hide logo image **/
  vertical-align: middle;
  padding-right: 5px; /** editable **/
  height: 36px; /** editable **/
}
.dnarn nav .logo span {
  display: none; /** to hide/show sitename **/
}

/** when page width < 780px **/
@media (max-width: 779px) {
  .dnarn nav .logo img {
    padding-right: 0;
    display: none; /** to hide/show the logo image **/
  }

  .dnarn nav .logo span {
    display: inline-block; /** to show/hide sitename **/
  }
}
```

## Usage

```jsx
import React from 'react'
import { useRouter } from 'next/router'

import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import 'dna-responsive-nav/dist/dna-rn.css'

// we use next/router as example to get the pathname, by which we set "is-active" class to <a>
const router = useRouter()

const links = (
  <ul>
    <li key='blog-menu'>
      <a
        className={router.pathname === '/blog' ? 'is-active' : ''}
        href='/blog'
      >
        Blog
      </a>
    </li>
    <li key='about-menu'>
      <a
        className={router.pathname === '/about' ? 'is-active' : ''}
        href='/about'
      >
        About Us
      </a>
    </li>
    <li key='playground-menu'>
      <a
        className={router.pathname === '/playground' ? 'is-active' : ''}
        href='/playground'
      >
        Playground
      </a>
    </li>
    <li key='mistakes'>
      <a
        className={router.pathname === '/mistakes' ? 'is-active' : ''}
        href='/mistakes'
      >
        Mistakes
      </a>
    </li>
  </ul>
)

const handleSearch = (kw) => {
  if (kw) {
    const url = 'https://deniapps.com/search?kw=' + encodeURIComponent(kw)
    window.open(url, '_blank')
  }
}

const App = () => {
  return (
    <ResponsiveHeader
      siteName='DeNiApps'
      links={links}
      logo='/image/YOUR-LOGO-PATH.png'
      handleSearch={handleSearch}
    />
  )
}

export default App
```

## License

MIT © [deniapps](https://github.com/deniapps)
