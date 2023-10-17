import React from 'react';
import { Link } from 'react-router-dom';
import usePageInfo from '../../utils/usePagesInfos';
import '../../styles/Error.css'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'


function Error({ pageInfo }) {
  usePageInfo(pageInfo);

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
        <div className='link'>
          <Link className='navigation-error' to="/">Retourner sur la page d'accueil</Link>
        </div>
      </div>
      <Footer scrollEffect={true}/>
    </div>
  )
}

export default Error;
