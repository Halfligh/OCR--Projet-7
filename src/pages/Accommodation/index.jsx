import { useParams } from 'react-router-dom';

import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


function Accommodation() {

  const { id } = useParams();

  return (
  <div className='layout'>
    <Banner />
    <p>Fiche logement {id}</p>
    <Footer />
  </div>
  )
}

export default Accommodation;
