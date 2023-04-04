import React, { useState } from 'react';
import arrowIcon from '../assets-figma/arrow-icon.svg';
import '../styles/keyframes.css'

const Collapse = ({ title, subtitle, isOpen })  => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(isOpen);

  const handleClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const wraperStyles = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 31,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
  }

  const titleStyles = {
    height: 42,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#FF6060',
    borderRadius: 5,
    color: 'white',
    fontWeight: 500,
    fontSize: 24,
    paddingLeft: 18,
    justifyContent: 'space-between',
  };

  const subtitleStyles = {
    display: 'flex',
    justifyContent: 'center',
    color: '#FF6060',
    fontSize: 24,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
    transition: 'height 0.5s ease-in-out',
    height: isCollapseOpen ? 'auto' : 0,
    opacity: isCollapseOpen ? 1 : 0,
    borderRadius : 5,
  };

  const arrowStyles = {
    height: 25,
    width: 25,
    paddingRight: 18,
    animation: `${isCollapseOpen ? 'rotateUp' : 'rotateDown'} 0.5s ease-out forwards`,
  };

  return (
    <div style={wraperStyles}>
      <div style={titleStyles} onClick={handleClick}>
        <p>{title}</p>
        <img style={arrowStyles} src={arrowIcon} alt='Flèche' />
      </div>
      <div style={subtitleStyles}>
        <p style={{padding : 10}}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Collapse;
