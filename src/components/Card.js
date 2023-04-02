import '../styles/Card.css'

function Card({ id, cover, title }) {
  return (
    <div className='card-wrapper'>
      <div className='opacity-gradient'/>
      <img className='card-img' src={cover} alt={title} />
      <div className='card-bottom'>
        <h3 className='card-title'>{title}</h3>
      </div>
    </div>
  );
}

export default Card;