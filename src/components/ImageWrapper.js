import React from 'react';

function ImageWrapper({ src, alt, text, height, clean, gradient, marginBottom }) {
  const backgroundStyles = {
    height: height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: marginBottom ? marginBottom : 51,
    position: 'relative',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: gradient ? null : 'rgba(0, 0, 0, 0.3)',
    borderRadius: window.innerWidth < 599 ? 10 : 25,
    background: gradient ? 'linear-gradient(to right, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.42))' : null, 
  };

  const homeSubtitleStyles = {
    position: 'absolute',
    color: 'white',
    textAlign: window.innerWidth < 599 ? 'start' : 'center',
    fontSize: window.innerWidth < 599 ? 24 : 48,
    fontWeight: window.innerWidth < 599 ? 500 : 800,
    padding: window.innerWidth < 599 ? 20 : null,
  }

  const imageStyles = {
    height: '100%',
    width: '100%',
    borderRadius: window.innerWidth < 599 ? 10 : 25,
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