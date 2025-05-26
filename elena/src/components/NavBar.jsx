import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  // const [isTrasparent, setIsTrasparent ] = useState (false)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsTrasparent(window.scrollY > 50)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return ()=> window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <nav className='sticky-navbar'>
      <div className='logo-name'>
        <Link to="/">
          <h2>ELENA MEDORI</h2>
        </Link></div>
        <div className='menu-items'>  
      <ul>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/commercials'>COMMERCIALS</Link></li>
        <li><Link to='/movies'>MOVIES</Link></li>
        <li><Link to='/stills'>STILLS</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar
