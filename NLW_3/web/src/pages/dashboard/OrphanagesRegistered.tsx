import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";



import mapIcon from "../../utils/mapIcon";

import trash from "../../images/trash.svg"
import edit from "../../images/edit.svg"



import '../../styles/pages/orphanages-registered.css';

import Sidebar from "../../components/SidebarDashboard";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}


export default function OrphanagesRegistered() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);
 
  return (
    <div id="orphanages-registered">
      <Sidebar />
      <header>
        <h1>Orfanatos Cadastrados</h1>
        <span>2 Orfanatos</span>
      </header>
      <main id="content">

        {orphanages.map(orphanage => {
          return (
            <div className="map-container">
            <Map
              key={orphanage.id}
              center={[orphanage.latitude,orphanage.longitude]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]} />
            </Map>

            <footer>
            <h1>{orphanage.name}</h1>
              <div>
                <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                <Link to={`/orphanages/${orphanage.id}`}>
                <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                </Link>
              </div>
            </footer>
          </div>
          )
        })}
        
              
      </main>
    </div>
  );
}

