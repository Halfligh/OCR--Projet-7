import React, { useState } from 'react';
import arrowIcon from '../assets-figma/arrow-icon.svg';
import '../styles/keyframes.css'

const Collapse = ({ title, subtitle, titleSize, subtitleSize, isOpen, width, flexDirection, dataList, marginBottom  })  => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(isOpen);

  const handleClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const wraperStyles = {
    width: width,
    marginLeft: width ? null : 'auto',
    marginRight: width ? null : 'auto',
    marginBottom: marginBottom ? marginBottom : 33,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
  }

  const titleStyles = {
    height: window.innerWidth < 599 ? 30 : 42,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#FF6060',
    borderRadius: 5,
    color: 'white',
    fontWeight: 500,
    fontSize: titleSize ? titleSize : 24,
    paddingLeft: 18,
    justifyContent: 'space-between',
  };

  const subtitleStyles = {
    display: 'flex',
    justifyContent: 'center',
    color: '#FF6060',
    fontSize: subtitleSize ? subtitleSize : 24,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
    transition: 'height 0.5s ease-in-out',
    height: isCollapseOpen ? 'auto' : 0,
    opacity: isCollapseOpen ? 1 : 0,
    borderRadius : 5,
    flexDirection : flexDirection ? flexDirection : null,
    fontWeight: 400,
    lineHeight: window.innerWidth < 599 ? '18px' : '35px', 
  };

  const arrowStyles = {
    height: window.innerWidth < 599 ? 16 : 25,
    width: window.innerWidth < 599 ? 16 : 25,
    paddingRight: 18,
    animation: `${isCollapseOpen ? 'rotateUp' : 'rotateDown'} 0.5s ease-out forwards`,
  };

  const ulStyles = {
    listStyle : 'none',
    width: '100%',
  }

  const listStyles = {
    paddingLeft: 0,
    paddingBottom : 5,
  }

  const subtitleText = {
    padding: window.innerWidth < 599 ? 10 : 20,
  }

  return (
    <div style={wraperStyles}>
      <div style={titleStyles} onClick={handleClick}>
        <p>{title}</p>
        <img style={arrowStyles} src={arrowIcon} alt='Flèche' />
      </div>
      <div style={subtitleStyles}>
        { dataList ? ( 
        <ul style={ulStyles}>
          {dataList.map((thing, index) => (
            <li style={listStyles} key={index}>{thing}</li>
          ))}
       </ul> 
        ) : ( <p style={subtitleText}>{subtitle}</p> )}
      </div>
    </div>
  );
};

export default Collapse;
