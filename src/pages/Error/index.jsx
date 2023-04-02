import '../../styles/App.css';
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


function Error() {
  return (
  <div className='layout'>
    <Banner />
    <p>erreur 404</p>
    <Footer />
  </div>
  )
}

export default Error;
