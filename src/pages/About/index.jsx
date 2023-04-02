import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ImageWrapper from '../../components/ImageWrapper';

import ImageAbout from '../../assets-figma/IMG-about.png'


function About() {
  return (
  <div className='layout'>
    <Banner />
    <ImageWrapper src={ImageAbout} alt='Paysage montagne'/>
    <Footer />
  </div>
  )
}

export default About;
