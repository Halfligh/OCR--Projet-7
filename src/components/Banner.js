import { Link } from 'react-router-dom'

import '../styles/Banner.css'
import Logo from '../assets-figma/LOGO.svg'

function Banner() {
    return ( 
    <div className='kasa-banner'>
        <img src={Logo} alt={'Logo'} className='logo'></img>
        <nav classname='navigation-ul'>
            <Link classname='navigation-li' to="/" >Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
    </div>
    )
}

export default Banner