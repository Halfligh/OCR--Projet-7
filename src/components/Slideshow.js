import React, { useState } from 'react';
import ImageWrapper from '../components/ImageWrapper';
import BulletPoint from './BulletPoint';
import SharpArrow from '../assets-figma/sharp-arrow-icon.svg';

function SlideShow({ id, src, alt, text, marginBottom, height, pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = pictures;

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };


  const containerStyles = {
    position: 'relative',
  };

  const arrowWrapStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '96%',
    zIndex: 2,
    height: 20,
    paddingLeft: '2%',
    paddingRight: '2%',
  };

  const leftArrowStyles = {
    transform: 'rotate(180deg)', // Ajout de la rotation à gauche
    cursor : 'pointer',
    height: window.innerWidth < 599 ? 20 : null, 
  };
  
  const rightArrowStyles = {
    cursor : 'pointer',
    height: window.innerWidth < 599 ? 20 : null, 
  };


  const bulletPointsStyles = {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  // Vérifie s'il n'y a qu'une seule image dans le carrousel
  const showArrowsAndBullets = images.length > 1;

  return (
    <div style={containerStyles}>
     
     {showArrowsAndBullets && (
        <div style={arrowWrapStyles}>
          <img src={SharpArrow} alt='Précédent' onClick={handlePrev} style={leftArrowStyles}/>
          <img src={SharpArrow} alt='Suivant' onClick={handleNext} style={rightArrowStyles}/> 
        </div>
        )}

      <ImageWrapper src={images[currentIndex]} alt={alt} height={height} marginBottom={window.innerWidth < 599 ? 1 : marginBottom} gradient/>

      { window.innerWidth > 599 ? 
      (
      showArrowsAndBullets && (
        <div style={bulletPointsStyles}>
          {images.map((image, index) => (
            <BulletPoint
              key={index}
              active={currentIndex === index}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>
        ) )
         : null }
  

    </div>
  );
}

export default SlideShow;