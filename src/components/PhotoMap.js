import React, { useState } from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PhotoMap = ({ photo }) => {
    const [currentLocation, setCurrentLocation] = useState(); //{//lat lng co-ordinates//} 53.264, -7.564
    const [zoom, setZoom] = useState(); //set zoom int amount
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", iconSize: [30, 30]
    });

    // const photoMarkers = photos.map((photo, index) => {
    //     return (

    //     )
    // })
    if (!photo){
        return null
    }


        // hard coded information in above componenet  

        // passing props into componenet from container, list instead of object

        // populate data into new map component

        // dynamically all the markers will be changed but not zoom
        
    console.log("photo", photo.locationsIreland[0].coordinates)
    const coordinates = photo.locationsIreland[0].coordinates
    return (
        <Map center={[coordinates.latitude, coordinates.longitude]} zoom={6}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coordinates.latitude, coordinates.longitude]} icon={markerIcon}>
                <Popup>
                   <b>Location:</b> {photo.locationsIreland[0].nameEN}<br></br>
                   <b>Description:</b> {photo.archivedDescription}<br></br>
                   <b>Year:</b> {photo.date.year}<br></br>
                   <b>Photographer:</b> {photo.photographer.names[0].fullName}
                   
                </Popup>
            </Marker>
        </Map>
    );
}

export default PhotoMap;