import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {

   const [scrolled, setScrolled] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)
   const location = useLocation()

   useEffect(() => {
    setMenuOpen(false)
   }, [location.pathname])

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav className={`sticky-navbar${scrolled ? ' scrolled' : ''}`}>
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
        <li><Link to='/me'>Me</Link></li>
        <li><Link to='/commercials'>Commercials</Link></li>
        <li><Link to='/film'>Film</Link></li>
        <li><Link to='/stills'>Stills</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
