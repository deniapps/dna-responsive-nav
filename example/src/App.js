import React from 'react'

import ResponsiveHeader from 'dna-responsive-nav'
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
