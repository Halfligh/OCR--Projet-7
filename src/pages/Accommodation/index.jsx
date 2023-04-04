import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/App.css';
import '../../styles/Accommodation.css'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import SlideShow from '../../components/Slideshow';

import redStar from '../../assets-figma/red-star.svg'
import greyStar from '../../assets-figma/grey-star.svg'

import data from '../../data/logements.json'


function Accommodation({ pageInfo }) {

  // Génération des informations de la page 
  useEffect(() => {
    document.title = pageInfo.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", pageInfo.description);
    }
  }, [pageInfo]);

  // Récupération du params 
  const { id } = useParams();


  // Recherche de l'id de la kasa dans la data
  const kasa = data.find(item => item.id === id);

  return (
  <div className='layout'>
    <Banner />
    <SlideShow pictures={kasa.pictures} alt='Logement' height={415}/>
    <section className='top-section'>
        <div>
          <h1 className='kasa-title'>{kasa.title}</h1>
          <h2 className='sub-title'>{kasa.location}</h2>
          <p>tags</p>
        </div>
        <div className='host-wrap'>
          <div className='host'>
            <p className='host-name'>{kasa.host.name}</p>
            <img className ='host-pic' src={kasa.host.picture} alt='host portrait'></img>
          </div>
          { Array.from({ length: parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={redStar} alt='étoile rouge'/>
            ))}
          {Array.from({ length: 5 - parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={greyStar} alt='étoile grise'/> 
          ))}
        </div>
    </section>
    <section>
    
    </section>
    
    <Footer />
  </div>
  )
}

export default Accommodation;
