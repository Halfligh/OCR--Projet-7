import React, { useEffect } from 'react';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ImageWrapper from '../../components/ImageWrapper';
import Collapse from '../../components/Collapse';

import '../../styles/App.css';
import ImageAbout from '../../assets-figma/IMG-about.png'


function About({ pageInfo }) {

  const data = [
    {
      id: 1,
      title: "Fiabilité",
      subtitle:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      subtitle:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      subtitle:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      subtitle:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  // Génération des informations de la page 
  useEffect(() => {
    document.title = pageInfo.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", pageInfo.description);
    }
  }, [pageInfo]);


  const collapseWrapper = {
    paddingBottom : 150, 
    display: 'flex',
    flexDirection : 'column',
    width: window.innerWidth < 599 ? '100%' : '90%',
    marginLeft : 'auto',
    marginRight : 'auto',
  }

  return (
  <div className='layout'>
    <Banner />
    <ImageWrapper src={ImageAbout} alt='Paysage montagne' height={200} marginBottom={33}/>
    <div style={collapseWrapper}>
      {data.map((item) => (
        <Collapse key={item.id} title={item.title} titleSize={window.innerWidth < 599 ? 13 : 24} subtitle={item.subtitle} subtitleSize={window.innerWidth < 599 ? 12 : 24} open={false} width={'100%'} marginBottom={window.innerWidth < 599 ? 20 : 33 }/>
      ))}
    </div>
    <Footer scrollEffect={true} />
  </div>
  )
}

export default About;
