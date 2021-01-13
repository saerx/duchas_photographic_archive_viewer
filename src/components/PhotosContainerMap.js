import React, { useState } from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PhotoMap from './PhotoMap';
import PhotosContainer from '../containers/PhotosContainer';

const PhotosContainerMap = ({ photos }) => {

    const [currentLocation, setCurrentLocation] = useState(); //{//lat lng co-ordinates//} 53.264, -7.564
    const [zoom, setZoom] = useState(); //set zoom int amount
    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", iconSize: [30, 30]
    });

    if (!photos){
        return null;
    }

    console.log("photos", photos[0].locationsIreland[0].coordinates);

    const markerNodes = photos.map((photo) => {

        console.log("photoslist", photo.locationsIreland[0]);

        if (photo.locationsIreland[0]) {

            const coordinates = photo.locationsIreland[0].coordinates
            console.log("coordinates", coordinates);

            return ( 
                
            
                <Marker position={[coordinates.latitude, coordinates.longitude]} icon={markerIcon}>
    
                </ Marker>
            )
        } 

        // const coordinates = photo.locationsIreland[0].coordinates;


    });

        // hard coded information in above componenet  

        // passing props into componenet from container, list instead of object

        // populate data into new map component

        // dynamically all the markers will be changed but not zoom

    return  (

        <div className="containerMap">MAP HERE

        <Map center={[53.1424 , -7.6921]} zoom={8}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {markerNodes}
        </Map>
    );
        
        </div>
    );
}

export default PhotosContainerMap;