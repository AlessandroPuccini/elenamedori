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
        <Link to="/elenamedori/">
          <h1>ELENA MEDORI</h1>
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
        <li><Link to='/me'>ME</Link></li>
        <li><Link to='/commercials'>COMMERCIALS</Link></li>
        <li><Link to='/film'>FILM</Link></li>
        <li><Link to='/stills'>STILLS</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
