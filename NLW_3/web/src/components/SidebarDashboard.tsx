import React from 'react';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import power from '../images/power.svg';
import mapPin from '../images/map-pin.svg';
import alertCircle from '../images/alert-circle.svg';

import '../styles/components/sidebar.css'
import '../styles/components/animations.css';
import { ManyToOne } from 'typeorm';


export default function Sidebar() {

    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar animate-sidebar">
        <img src={mapMarkerImg} alt="Happy" />
          <div>
            <button type="button" className="rounded-button">
              <img src={mapPin} alt="Mapa"/>
            </button>
            <button type="button" className="rounded-button selected">
              <img src={alertCircle} alt="Alerta"/>
            </button>
          </div>
        <footer>
          <button className="animate-sidebar rounded-button" type="button" onClick={goBack}>
            <img src={power} alt="sair"/>
          </button>
        </footer>
      </aside>
    )
}