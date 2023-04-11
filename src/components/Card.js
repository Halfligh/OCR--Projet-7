import { Link } from 'react-router-dom';
import '../styles/Card.css'

function Card({ id, cover, title }) {

// Modules CSS
  const cardWrapper = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    margin: window.innerWidth < 599 ? 0 : 10, 
    zIndex : 2,
  }

  const linkWrapper = {
    marginBottom: '30px',
    width: window.innerWidth < 599 ? '100%' : window.innerWidth < 1024 ? window.innerWidth / 3 : window.innerWidth / 4,
    height: window.innerWidth < 599 ? 225 : window.innerWidth < 1024 ? window.innerWidth / 3 : window.innerWidth / 4,
  };

  return (
    <Link style= {linkWrapper} to={`/accommodation/${id}`}>
      <div style={cardWrapper}>
        <div className='opacity-gradient'/>
        <img className='card-img' src={cover} alt={title} />
        <div className='card-bottom'>
          <h3 className='card-title'>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;