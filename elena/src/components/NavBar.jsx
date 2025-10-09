import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {


   const [menuOpen, setMenuOpen] = useState(false)
   const location = useLocation()

   useEffect(() => {
    setMenuOpen(false)
   }, [location.pathname])



  return (
    <nav className='sticky-navbar'>
      <div className='logo-name'>
        <Link to="/">
          <span className='logo-desktop'>ELENA MEDORI</span>
          <span className='logo-mobile'>EM</span>
        </Link>
       </div>
       <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Apri menu"
      >
        ☰
      </button>
        <div className={`menu-items${menuOpen ? ' open' : ''}`}> 
      <ul>
        <li><Link to='/commercials'>Commercials</Link></li>
        <li><Link to='/film'>Film</Link></li>
        <li><Link to='/stills'>Stills</Link></li>
        <li><Link to='/me'>Me</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
