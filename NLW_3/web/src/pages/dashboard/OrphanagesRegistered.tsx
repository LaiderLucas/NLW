import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";



import mapIcon from "../../utils/mapIcon";



import '../../styles/pages/orphanages-registered.css';

import Sidebar from "../../components/SidebarDashboard";



export default function OrphanagesRegistered() {
 
  return (
    <div id="orphanages-registered">
    <Sidebar />
      <main>
        <div className="map-container">
                <Map 
                  center={[-15.2310837,-59.3325136]} 
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
                  <Marker interactive={false} icon={mapIcon} position={[-15.2310837,-59.3325136]} />
                </Map>

                <footer>
                  <a target="_blank" rel="noopener noreferrer" href="">Ver rotas no Google Maps</a>
                </footer>
              </div>
      </main>
    </div>
  );
}

