import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import style from './App.module.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import App from './App'

function Mapa() {
    const position = [-25.424860448678242, -49.27232921860062];

    return (
        <>
          <App/>
          <div className={style.mapas}>
            <h2>Mapa</h2>
            <div className="mapa" >           
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100vw", height: "70vh"}}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <a href="https://maps.app.goo.gl/AKKf8sP3cD1Be53q7" target='_blank'>Senai Celso Charuri</a>
                    </Popup>
                  </Marker>
                </MapContainer> 
            </div>
          </div>
        </>
    )
}

export default Mapa