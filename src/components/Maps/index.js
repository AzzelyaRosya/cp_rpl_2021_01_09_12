import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { map } from "leaflet";

export default function Maps() {
  // Position [Lat,Lng]
  const position = [-6.229064, 106.956979];
  // Pop Up Content
  const companyName = "SMK Negeri 1 Bekasi";
  // Marker Costum
  const markerIcon = new L.Icon({
    iconUrl: require("../../assets/img/marker.png"),
    iconSize: [26, 27],
  });
  // Map Size
  const mapStyles = {
    maxWidth: "100%",
    height: "300px",
  };

  return (
    <>
      {/* <div className={maps}> */}
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
        <Marker position={position} icon={markerIcon}>
          <Popup>{companyName}</Popup>
        </Marker>
      </MapContainer>
      {/* </div> */}
    </>
  );
}
