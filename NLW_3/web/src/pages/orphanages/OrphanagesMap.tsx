import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import '../../styles/pages/orphanages-map.css';
import '../../styles/components/animations.css';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';
import GetUserPosition from '../../components/GetUserPosition';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}



function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);
    var userPosition = GetUserPosition()
    var latitude = Number(userPosition.latitude)
    var longitude = Number(userPosition.longitude)


    const city = localStorage.getItem('city');
    const state = localStorage.getItem('state');
    return (
        <div id="page-map">
            <aside className="sidebar-pageMaps animate-sidebar">
                <header>
                    <Link to="/">
                        <img src={mapMarkerImg} alt="Happy"/>
                    </Link>
                    <h2 className="animate-sidebar">Escolha um orfanato no mapa</h2>
                    <p className="animate-sidebar" >Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer className="animate-sidebar">
                    <strong>{city}</strong>
                    <span>{state}</span>
                </footer>
            </aside>

            <Map
                center={[latitude , longitude]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

               {orphanages.map(orphanage => {
                   return(
                    <Marker
                    key={orphanage.id}
                    icon={mapIcon}
                    position={[orphanage.latitude,orphanage.longitude]}
               >
                   <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                       <Link to={`/orphanages/${orphanage.id}`}>
                           <FiArrowRight size={20} color="#FFF"/>
                       </Link>
                   </Popup>
               </Marker>
                   )
               })}
            </Map>
            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
    
}

export default OrphanagesMap;