import React, { useState } from 'react';
import arrowIcon from '../assets-figma/arrow-icon.svg';
import '../styles/keyframes.css'

const Collapse = ({ title, subtitle, titleSize, subtitleSize, isOpen, width, flexDirection,dataList })  => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(isOpen);

  const handleClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  const wraperStyles = {
    width: width,
    marginLeft: width ? null : 'auto',
    marginRight: width ? null : 'auto',
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
  };

  const arrowStyles = {
    height: 25,
    width: 25,
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
        ) : ( <p style={{padding : 20}}>{subtitle}</p> )}
      </div>
    </div>
  );
};

export default Collapse;
