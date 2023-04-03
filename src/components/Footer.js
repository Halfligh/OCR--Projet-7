import { useEffect, useState } from 'react';
import '../styles/Footer.css';
import LogoWhite from '../assets-figma/LOGO-white.svg';

function Footer({ scrollEffect }) {
  const [opacity, setOpacity] = useState(scrollEffect ? 0 : 1);

  useEffect(() => {
    if (scrollEffect === true) {
      function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const opacity = Math.min(1, scrollTop / (documentHeight - windowHeight));
        setOpacity(opacity);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollEffect]);

  return (
    <div className="kasa-footer" style={{ opacity }}>
      <div className="footer-wrapper">
        <img src={LogoWhite} alt={'Logo'} className="logo-white"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;