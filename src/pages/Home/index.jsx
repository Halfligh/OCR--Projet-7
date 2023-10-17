import React from 'react';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Card';
import ImageWrapper from '../../components/ImageWrapper'
import usePageInfo from '../../utils/usePagesInfos';

import '../../styles/App.css';
import ImageTitle from '../../assets-figma/IMG.png'

import logements from '../../data/logements.json'


function Home({ pageInfo }) {
  usePageInfo(pageInfo);
  // Génération des cards selon la data
  function renderCards() {
    return logements.map((item, index) => (
      <Card id={item.id} key={index} cover={item.cover} title={item.title} />
    ));
  }
 

  // Modules CSS

  const cardList = {
    padding: window.innerWidth < 599 ? 0 : 30,
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
    backgroundColor: window.innerWidth > 599 ? '#F6F6F6' : 'white',
    borderRadius: '25px',
    paddingBottom: '150px',
    }

  return (
  <div className='layout'>
    <Banner />
    <ImageWrapper src={ImageTitle} alt='Paysage montagne' text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs"
 height={window.innerWidth < 599 ? 120 : 200} marginBottom={'30px'} gradient/>
    <div style={cardList}>{renderCards()}</div>
    <Footer scrollEffect={true} />
  </div>
  )
}

export default Home;
