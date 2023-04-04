import React, { useEffect } from 'react';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card';
import ImageWrapper from '../../components/ImageWrapper'

import '../../styles/App.css';
import ImageTitle from '../../assets-figma/IMG.png'

import logements from '../../data/logements.json'


function Home({ pageInfo }) {

  // Génération des cards selon la data
  function renderCards() {
    return logements.map((item) => (
      <Card id={item.id} cover={item.cover} title={item.title} />
    ));
  }

  // Génération des infos de la page 
  useEffect(() => {
    document.title = pageInfo.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", pageInfo.description);
    }
  }, [pageInfo]);

  // Modules CSS
  const cardList = {
    padding: window.innerWidth < 599 ? 0 : 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: window.innerWidth > 599 ? '#F6F6F6' : 'white',
    borderRadius: '25px',
    paddingBottom: '150px',
    }

  return (
  <div className='layout'>
    <Banner />
    <ImageWrapper src={ImageTitle} alt='Paysage montagne' text="Chez vous, partout et ailleurs" height={200} gradient/>
    <div style={cardList}>{renderCards()}</div>
    <Footer scrollEffect={true} />
  </div>
  )
}

export default Home;
