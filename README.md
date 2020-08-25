# dna-responsive-nav

> React component for a responsive navigation bar with search box

[![NPM](https://img.shields.io/npm/v/dna-responsive-nav.svg)](https://www.npmjs.com/package/dna-responsive-nav) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## Demo

https://deniapps.com/playground/dna-rn

## Install

```bash
npm install --save dna-responsive-nav
```

## Usage

```jsx
import React from 'react'

import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import 'dna-responsive-nav/dist/dna-rn.css'

const links = (
  <ul>
    <li key='blog-menu'>
      <a href='/blog'>Blog</a>
    </li>
    <li key='about-menu'>
      <a href='/about'>About Us</a>
    </li>
    <li key='playground-menu'>
      <a href='/playground'>Playground</a>
    </li>
    <li key='docs'>
      <a href='/docs'>Docs</a>
    </li>
    <li key='tutorial'>
      <a href='/tutorial'>Tutorial</a>
    </li>
    <li key='community'>
      <a href='/community'>Community</a>
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
      handleSearch={handleSearch}
    />
  )
}

export default App
```

## License

MIT © [deniapps](https://github.com/deniapps)
