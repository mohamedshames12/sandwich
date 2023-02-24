import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import Footer from '../components/Footer'

const Contact = () => {


  return (
      <>
            <div className='contacts'>
      <h2>Get In Touch</h2>
        <div className="container-contacts">
            <div className="box-contacts">
                <input type="text" placeholder='your name'/>
                <input type="numder" placeholder='your numder'/>
                <input type="email" placeholder='your email'/>
                <textarea placeholder='your message'></textarea>
                <button>send message</button>
            </div>
            <div className="map">
                <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
                  <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                </MapContainer>
            </div>
        </div>
    </div>

    <Footer />      
      </>
  )
}

export default Contact