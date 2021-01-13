import React, { useState } from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import MapPhotos from "./MapPhotos.js";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PhotosMap = ({ photos }) => {
    const [currentLocation, setCurrentLocation] = useState(); //{//lat lng co-ordinates//} 53.264, -7.564
    const [zoom, setZoom] = useState(); //set zoom int amount
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/maps-locations-5/24/map_location_pin_geolocation_photo_image-512.png", iconSize: [30, 30]
    });

    const photoMarkers = photos.map((photo, index) => {
        return (
         <Marker key={index} position={[photo.lat, photo.lng]} icon={markerIcon}>
            <Popup>
                
            </Popup>
         </Marker>
        )
    })

    return (
        <Map center={currentLocation} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {photoMarkers}
        </Map>
    );
}

export default PhotosMap;