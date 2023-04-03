import { Link } from 'react-router-dom';
import '../../styles/Error.css'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


function Error() {
  return (
    <div className='layout'>
      <Banner />
      <div className='main'>
        <div className='big-title'>
          <p>404</p>
        </div>
        <div className='subtitle'>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        </div>
        <div>
          <Link className='navigation-error' to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer scrollEffect={false} />
    </div>
  )
}

export default Error;
