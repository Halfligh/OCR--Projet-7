import '../styles/Footer.css'
import LogoWhite from '../assets-figma/LOGO-white.svg'

function Footer() {
    return ( 
    <div className='kasa-footer'>
        <div className='footer-wrapper'>
            <img src={LogoWhite} alt={'Logo'} className='logo-white'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer