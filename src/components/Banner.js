import '../styles/Banner.css'
import Logo from '../assets-figma/LOGO.svg'

function Banner() {
    return ( 
    <div className='kasa-banner'>
        <img src={Logo} alt={'Logo'} className='logo'></img>
        <ul className='navigation-ul'>
            <li className='navigation-li'>
                <a className='navigation-a'>
                    <p>Accueil</p>
                </a>
            </li>
            <li className='navigation-li'>
                <a className='navigation-a'>
                    <p>À propos</p>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Banner