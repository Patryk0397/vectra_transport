import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './LocationMap.css';

// 52.4732847735 -1.88983644064
const DEFAULT_LONGITUDE = -1.8609;
const DEFAULT_LATITUDE = 52.5036;

const LocationMap = () => {
    return (
        <>
            <MapContainer center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
                    <Marker position={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]} />
            </MapContainer>
        </>
    )
}

export default LocationMap
