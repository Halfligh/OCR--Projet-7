import { Link } from 'react-router-dom';
import '../styles/Card.css'

function Card({ id, cover, title }) {

// Modules CSS
  const cardWrapper = {
    position: 'relative',
    width: window.innerWidth < 599 ? '100%' : 350,
    height: window.innerWidth < 599 ? '100%' : 350,
    borderRadius: 10,
    marginBottom: 50,
  }

  const linkWrapper = {
    marginBottom: '30px',
  }

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