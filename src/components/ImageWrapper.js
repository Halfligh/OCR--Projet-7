import React from 'react';

function ImageWrapper({ src, alt, text }) {
  const backgroundStyles = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    position: 'relative',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 25,
  };

  const homeSubtitleStyles = {
    position: 'absolute',
    color: 'white',
    fontSize: '48px',
  }

  const imageStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '25px',
    objectFit: 'cover',
  }

  return (
    <div style={backgroundStyles}>
        <div style={overlayStyles}/>
        <img src={src} alt={alt} style={imageStyles} />
        <h1 style={homeSubtitleStyles}>{text}</h1>
    </div>
  );
}

export default ImageWrapper;