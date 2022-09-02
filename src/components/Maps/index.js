import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { map } from 'leaflet';

export default function Maps() {
  // Position [Lat,Lng]
  const position = [-6.285290277546415, 106.9787338722417];
  // Pop Up Content
  const companyName = 'Aula Ibrahim';
  // Marker Costum
  const markerIcon = new L.Icon({
    iconUrl: require('../../assets/img/marker.png'),
    iconSize: [26, 27],
  });
  // Map Size
  const mapStyles = {
    width: '50%',
    height: '100px',
    position: 'relative',
  };

  const maps = {
    position: 'relative',
  };

  return (
    <>
      {/* <div className={maps}> */}
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={mapStyles}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={markerIcon}>
          <Popup>{companyName}</Popup>
        </Marker>
      </MapContainer>
      {/* </div> */}
    </>
  );
}
