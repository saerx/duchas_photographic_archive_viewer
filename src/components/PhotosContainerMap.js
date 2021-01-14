import React, { useState } from 'react';
import { Popup, MapContainer as Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PhotoMap from './PhotoMap';
import PhotosContainer from '../containers/PhotosContainer';

const PhotosContainerMap = ({ photos }) => {

    const markerIcon = L.icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", iconSize: [30, 30]
    });

    if (!photos) {
        return null;
    }

    // const centreCoords = photos[0].counties[0].coordinates;

    // setCurrentLocation(centreCoords); 

    const markerNodes = photos.map((photo) => {

        console.log("photoslist", photo.locationsIreland[0]);


        if (photo.locationsIreland[0]) {

            const coordinates = photo.locationsIreland[0].coordinates
            console.log("coordinates", coordinates);

            let photoYear = null;
            if (photo.date) {
                photoYear = <>{photo.date.year}</>
            }
            else {
                photoYear = <>No year to display</>
            }

            return (

                <Marker position={[coordinates.latitude, coordinates.longitude]} icon={markerIcon}>
                    <Popup>
                        <b>Location:</b> {photo.locationsIreland[0].nameEN}<br></br>
                        <b>Description:</b> {photo.archivedDescription}<br></br>
                        <b>Year:</b> {photoYear}<br></br>
                        <b>Photographer:</b> {photo.photographer.names[0].fullName}

                    </Popup>
                </ Marker>
            )
        }

        // const coordinates = photo.locationsIreland[0].coordinates;


    });

    // hard coded information in above componenet  

    // passing props into componenet from container, list instead of object

    // populate data into new map component

    // dynamically all the markers will be changed but not zoom

    return (

        <div className="containerMap">



            <Map center={[53.264, -7.564]} zoom={6}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {markerNodes}
            </Map>

        </div>
    );
}

export default PhotosContainerMap;