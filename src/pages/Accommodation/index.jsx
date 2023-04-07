import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    <SlideShow pictures={kasa.pictures} alt='Logement' height={415}/>
    <section className='top-section'>
        <div>
          <h1 className='kasa-title'>{kasa.title}</h1>
          <h2 className='sub-title'>{kasa.location}</h2>
          <div>
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
          { Array.from({ length: parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={redStar} alt='étoile rouge'/>
            ))}
          {Array.from({ length: 5 - parseInt(kasa.rating)}, (_, index) => (
              <img key={index} className='star' src={greyStar} alt='étoile grise'/> 
          ))}
        </div>
    </section>
    <section className='bottom-section'>
      <div className='semi-collapse'>
        <Collapse title={'Description'} subtitle={kasa.description} open={false} titleSize={18} subtitleSize={18}/>
      </div>
      <div className='semi-collapse'>
        <Collapse title={'Équipements'} dataList={kasa.equipments} open={false} titleSize={18} subtitleSize={18}/>
      </div>
    </section>  
    
    <Footer scrollEffect={true}/>
  </div>
  )
}

export default Accommodation;
