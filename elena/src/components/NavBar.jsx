import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div className='logo-name'>
        <Link to="/">
          <h2>Elena Medori</h2>
        </Link></div>
        <div className='menu-items'> 
      <ul>
        <li><Link to='/about'>ABOUT</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
