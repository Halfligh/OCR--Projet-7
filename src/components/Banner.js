import { Link, useLocation } from 'react-router-dom'

import '../styles/Banner.css'
import Logo from '../assets-figma/LOGO.svg'

function Banner() {
  const location = useLocation();

  return ( 
    <div className='kasa-banner'>
       <Link to="/">
        <img src={Logo} alt={'Logo'} className='logo'/>
      </Link>
      
      <nav className='navigation-ul'>
        <Link className={`navigation ${location.pathname === "/" ? "active" : ""}`} to="/">Accueil</Link>
        <Link className={`navigation ${location.pathname === "/about" ? "active" : ""}`} to="/about">À propos</Link>
      </nav>
    </div>
  )
}

export default Banner