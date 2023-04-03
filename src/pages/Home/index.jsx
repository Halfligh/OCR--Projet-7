import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card';
import ImageWrapper from '../../components/ImageWrapper'

import ImageTitle from '../../assets-figma/IMG.png'

import logements from '../../data/logements.json'


function Home() {

  // Génération des cards selon la data
  function renderCards() {
    return logements.map((item) => (
      <Card id={item.id} cover={item.cover} title={item.title} />
    ));
  }

  return (
  <div className='layout'>
    <Banner />
    <ImageWrapper src={ImageTitle} alt='Paysage montagne' text="Chez vous, partout et ailleurs" height={200}/>
    <div className='card-list'>{renderCards()}</div>
    <Footer scrollEffect={true} />
  </div>
  )
}

export default Home;
