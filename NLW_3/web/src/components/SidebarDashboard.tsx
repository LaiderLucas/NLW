import React from 'react';

import logotipo from '../images/logotipo.svg';

import '../styles/components/sidebar-dashboard.css'
import '../styles/components/animations.css';
import GetUserPosition from './GetUserPosition';


export default function SidebarDashboard() {
  GetUserPosition();
  const city = localStorage.getItem('city');
  const state = localStorage.getItem('state');
    return (
        <aside className="app-sidebar animate-sidebar">
          <img className="logotipo animate-sidebar" src={logotipo} alt="Happy" />
          
          <div className="location animate-sidebar">
            <strong>{city}</strong>
            <span>{state}</span>
          </div>
      </aside>
    )
}