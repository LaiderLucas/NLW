import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'


import GetUserPosition from '../components/GetUserPosition'


import '../styles/pages/landing.css'
import '../styles/components/animations.css'

import logoImg from '../images/logo.svg'

function Landing() {
  GetUserPosition()
  const city = localStorage.getItem('city');
  const state = localStorage.getItem('state');

  
    return (
    <div id="page-landing">
      <div className="content-wrapper">
       
        <div className="header-landing animate-up">
          <img src={logoImg} alt="Happy"/>
          <div className="location">
            <strong>{city}</strong>
            <span>{state}</span>
          </div>
        </div>

        <main className="animate-up">
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

       
       
          <Link to="/login" className="access-restricted animate-up">
            <span>Acesso Restrito</span>
          </Link>
        

        <Link to="/app" className="enter-app animate-up">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>
    </div>
)

}

export default Landing;