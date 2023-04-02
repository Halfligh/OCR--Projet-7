import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card';

import ImageTitle from '../../assets-figma/IMG.png'

import logements from '../../data/logements.json'


function Home() {

  // Génération des cards selon la data
  function renderCards() {
    return logements.map((item) => (
      <Card key={item.id} cover={item.cover} title={item.title} />
    ));
  }

  return (
  <div className='layout'>
    <Banner />
    <div className='home-image-wrapper'>
      <div className='opacity'/>
      <img className='home-image' src={ImageTitle} alt='Paysage montagne'/>
      <h1 className='home-subtitle'> Chez vous, partout et ailleurs</h1>
    </div>
    <div className='card-list'>{renderCards()}</div>
    <Footer />
  </div>
  )
}

export default Home;
