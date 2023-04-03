import React, { useState } from 'react';
import arrowIcon from '../assets-figma/arrow-icon.svg';
import '../styles/keyframes.css'

const Collapse = ({ title, subtitle }, index, array)  => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
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
    backgroundColor: '#F6F6F6',
    height: isOpen ? 'auto' : '0px',
    overflow: 'hidden',
    padding: isOpen ? '18px' : '0px',
    transition: 'opacity 0.5s ease-in, padding 0.5s ease-in-out',
    animation: isOpen ? 'slideDown 0.5s ease-in-out forwards' : '',
    opacity: isOpen ? 1 : 0,
    borderRadius : 5,
  };

  const arrowStyles = {
    height: 25,
    width: 25,
    paddingRight: 18,
    animation: `${isOpen ? 'rotateDown' : 'rotateUp'} 0.5s ease-in-out forwards`,
  };

  return (
    <div style={wraperStyles}>
      <div style={titleStyles} onClick={handleClick}>
        <p>{title}</p>
        <img style={arrowStyles} src={arrowIcon} alt='Flèche' />
      </div>
      <div style={subtitleStyles}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Collapse;