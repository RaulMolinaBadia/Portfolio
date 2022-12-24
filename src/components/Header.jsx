import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header () {
  const [selectedTab, setSelectedTab] = useState('home')
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
        <img src='/vite.svg' alt='icon' />
        </Link>
      </div>
      <nav className='menu'>
        <Link
          className={selectedTab == 'home' ? 'tab-highlighted' : ''}
          onClick={() => handleTabClick('home')}
          to='/home'
        >
          Home
        </Link>
        <Link
          className={selectedTab === 'about' ? 'tab-highlighted' : ''}
          onClick={() => handleTabClick('about')}
          to='/about'
        >
          About
        </Link>
        <Link
          className={selectedTab === 'projects' ? 'tab-highlighted' : ''}
          onClick={() => handleTabClick('projects')}
          to='/projects'
        >
          Projects
        </Link>
        <Link
          className={selectedTab === 'contact' ? 'tab-highlighted' : ''}
          onClick={() => handleTabClick('contact')}
          to='/contact'
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
