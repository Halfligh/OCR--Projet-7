import { useParams } from 'react-router-dom';

import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import SlideShow from '../../components/Slideshow';
import data from '../../data/logements.json'


function Accommodation() {

  // Récupération du params 
  const { id } = useParams();


  // Recherche de l'id de la kasa dans la data
  const kasa = data.find(item => item.id === id);

  return (
  <div className='layout'>
    <Banner />
    <SlideShow pictures={kasa.pictures} alt='Logement' height={415}/>
    <Footer />
  </div>
  )
}

export default Accommodation;
