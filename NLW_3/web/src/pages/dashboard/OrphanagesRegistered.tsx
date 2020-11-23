import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";



import mapIcon from "../../utils/mapIcon";

import trash from "../../images/trash.svg"
import edit from "../../images/edit.svg"



import '../../styles/pages/orphanages-registered.css';

import Sidebar from "../../components/SidebarDashboard";



export default function OrphanagesRegistered() {
 
  return (
    <div id="orphanages-registered">
      <Sidebar />
      <header>
        Orfanatos Cadastrados
      </header>
      <main id="content">
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
                <h1>Orfanato Teste</h1>
                  <div>
                    <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                    <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                  </div>
                </footer>
              </div>


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
                <h1>Orfanato Teste</h1>
                  <div>
                    <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                    <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                  </div>
                </footer>
              </div>

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
                <h1>Orfanato Teste</h1>
                  <div>
                    <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                    <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                  </div>
                </footer>
              </div>

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
                <h1>Orfanato Teste</h1>
                  <div>
                    <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                    <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                  </div>
                </footer>
              </div>

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
                <h1>Orfanato Teste</h1>
                  <div>
                    <button className="rounded-button btn-edit"><img src={edit} alt="Editar"/></button>
                    <button className="rounded-button btn-edit"><img src={trash} alt="Excluir'"/></button>
                  </div>
                </footer>
              </div>


      </main>
    </div>
  );
}

