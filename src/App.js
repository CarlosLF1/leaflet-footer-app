import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as restaurant from './component/restaurantData.json';

export default function App() {
  return (
    <MapContainer center={[49.420429, 11.700490]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                
      />

      {/* {restaurant.map() */}
      <Marker key={restaurant} position={[
        restaurant?.latitude,
        restaurant?.longetude
      ]}
      />
    </MapContainer>
  );
}


