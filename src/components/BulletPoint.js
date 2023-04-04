function BulletPoint({ active, onClick }) {
    const circleStyles = {
      display: 'inline-block',
      margin: '0 5px',
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: active ? '#FF6060' : '#F6F6F6',
      cursor: 'pointer',
    };
  
    return <div style={circleStyles} onClick={onClick}></div>;
  }

  export default BulletPoint