import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePageInfo from '../../utils/usePagesInfos';

import '../../styles/App.css';
import '../../styles/Accommodation.css'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import SlideShow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';

import redStar from '../../assets-figma/red-star.svg'
import greyStar from '../../assets-figma/grey-star.svg'

import data from '../../data/logements.json'


function Accommodation({ pageInfo }) {
  usePageInfo(pageInfo);
  // Récupération du params 
    const { id } = useParams();


  // Recherche de l'id de la kasa dans la data
    const kasa = data.find(item => item.id === id);

  // Récupération de la fonction de navigation
    const navigate = useNavigate();

  // Vérification que l'objet est trouvé sinon redirection

  useEffect(() => {
    // Vérifier si l'id existe dans la data
    if (!data.map(item => item.id).includes(id)) {
      console.log("Redirection vers la page erreur");
      navigate('/error');
    }
  }, );

  // Si kasa est undefined, rendre un composant nul le temps de la redirection
  if (!kasa) {
    return null; 
  }

  return (
  <div className='layout'>
    <Banner />
    <SlideShow pictures={kasa.pictures} alt='Logement' height={window.innerWidth < 599 ? 250 : 450 }/>
    <section className='top-section'>
        <div>
          <h1 className='kasa-title'>{kasa.title}</h1>
          <h2 className='sub-title'>{kasa.location}</h2>
          <div className='tag-wrapper'>
          {kasa.tags.map(tag => (
              <span key={tag} className='tag'>{tag}</span>
          ))}
          </div>
        </div>
        <div className='host-wrap'>
          <div className='host'>
            <p className='host-name'>{kasa.host.name}</p>
            <img className ='host-pic' src={kasa.host.picture} alt='host portrait'></img>
          </div>
          <div>
          { Array.from({ length: parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={redStar} alt='étoile rouge'/>
            ))}
          {Array.from({ length: 5 - parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={greyStar} alt='étoile grise'/> 
          ))}
          </div>
        </div>
    </section>
    <section className='bottom-section'>
      <div className='semi-collapse'>
        <Collapse title={'Description'} subtitle={kasa.description} open={false} titleSize={window.innerWidth < 599 ? 13 : 18} subtitleSize={window.innerWidth < 599 ? 12 : 18} marginBottom={window.innerWidth < 599 ? 15 : 33 }/>
      </div>
      <div className='semi-collapse'>
        <Collapse title={'Équipements'} dataList={kasa.equipments} open={false} titleSize={window.innerWidth < 599 ? 13 : 18} subtitleSize={window.innerWidth < 599 ? 12 : 18}/>
      </div>
    </section>  
    
    <Footer scrollEffect={window.innerWidth < 599 ? false : true}/>
  </div>
  )
}

export default Accommodation;
