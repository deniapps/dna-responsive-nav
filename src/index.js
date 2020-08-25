import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Input, Icon } from 'semantic-ui-react'
// import { Router, Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

const ResponsiveHeader = (props) => {
  const [kw, setKW] = useState('')

  useEffect(() => {
    const menuBtn = document.querySelector('.dnarn .menu-icon')
    const searchBtn = document.querySelector('.dnarn .search-icon')
    const cancelBtn = document.querySelector('.dnarn .cancel-icon')
    const items = document.querySelector('.dnarn .nav-items')
    const form = document.querySelector('.dnarn form')
    menuBtn.onclick = () => {
      items.classList.add('active')
      menuBtn.classList.add('hide')
      searchBtn && searchBtn.classList.add('hide')
      cancelBtn && cancelBtn.classList.add('show')
    }
    if (cancelBtn) {
      cancelBtn.onclick = () => {
        items.classList.remove('active')
        menuBtn.classList.remove('hide')
        searchBtn && searchBtn.classList.remove('hide')
        cancelBtn && cancelBtn.classList.remove('show')
        form && form.classList.remove('active')
      }
    }
    if (searchBtn) {
      searchBtn.onclick = () => {
        form && form.classList.add('active')
        searchBtn.classList.add('hide')
        cancelBtn.classList.add('show')
      }
    }
  })

  const handleChange = (e) => {
    e.preventDefault()
    setKW(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (props.handleSearch) {
      props.handleSearch(kw)
    }
  }

  return (
    <div className='dnarn'>
      <nav>
        <div className='menu-icon'>
          <Icon name='sidebar' />
        </div>
        <div className='logo'>
          <a href='/'>{props.siteName}</a>
        </div>
        <div className='nav-items scroll'>{props.links}</div>
        <div className='search-icon'>
          {props.handleSearch && <Icon name='search' />}
        </div>

        <div className='cancel-icon'>
          <Icon name='close' />
        </div>

        {props.handleSearch && (
          <form onSubmit={handleFormSubmit}>
            <Input
              icon={<Icon name='search' link onClick={handleFormSubmit} />}
              className='search-data'
              required
              placeholder='Search...'
              onChange={handleChange}
              value={kw}
            />
          </form>
        )}
      </nav>
    </div>
  )
}

ResponsiveHeader.propTypes = {
  siteName: PropTypes.string,
  links: PropTypes.node,
  handleSearch: PropTypes.func
}

export default ResponsiveHeader
