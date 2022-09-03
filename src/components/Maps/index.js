import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { map } from 'leaflet';

export default function Maps() {
  // Position [Lat,Lng]
  const position = [-6.229064, 106.956979];
  // Pop Up Content
<<<<<<< HEAD
  const companyName = "SMK Negeri 1 Bekasi";
=======
  const companyName = 'Aula Ibrahim';
>>>>>>> a9922628411591e573a387e4eae2d6f49b73c853
  // Marker Costum
  const markerIcon = new L.Icon({
    iconUrl: require('../../assets/img/marker.png'),
    iconSize: [26, 27],
  });
  // Map Size
  const mapStyles = {
<<<<<<< HEAD
    width: "100%",
    height: "330px",
=======
    width: '50%',
    height: '100px',
    position: 'relative',
  };

  const maps = {
    position: 'relative',
>>>>>>> a9922628411591e573a387e4eae2d6f49b73c853
  };

  return (
    <>
      {/* <div className={maps}> */}
<<<<<<< HEAD
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={mapStyles}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=j7EvBpZRF5gMBEEp9ADt"
        />
=======
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={mapStyles}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
>>>>>>> a9922628411591e573a387e4eae2d6f49b73c853
        <Marker position={position} icon={markerIcon}>
          <Popup>{companyName}</Popup>
        </Marker>
      </MapContainer>
      {/* </div> */}
    </>
  );
}
