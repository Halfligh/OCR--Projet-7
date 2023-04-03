import React, { useState } from 'react';
import ImageWrapper from '../components/ImageWrapper';
import SharpArrow from '../assets-figma/sharp-arrow-icon.svg';

function SlideShow({ id, src, alt, text, height, pictures }) {

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

  const containerStyles = {
    position: 'relative', // Ajout de la propriété position relative sur l'élément parent
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
  };
  
  const rightArrowStyles = {
    cursor : 'pointer',
  };

  return (
    <div style={containerStyles}> {/* Ajout de styles sur l'élément parent */}
      <div style={arrowWrapStyles}>
        <img src={SharpArrow} alt='Précédent' onClick={handlePrev} style={leftArrowStyles}/>
        <img src={SharpArrow} alt='Suivant' onClick={handleNext} style={rightArrowStyles}/> 
      </div>
      <ImageWrapper src={images[currentIndex]} alt={alt} height={height} gradient/>
    </div>
  );
}

export default SlideShow;