import React from 'react'
import '../../App.css';
import './About.css';
import LocationMap from '../map/LocationMap';

const About = () => {
    return (
        <div className="about-container">
          <div className="info-container">
            {/* Who are we text */}
            <h1> > WHO ARE WE?</h1>
            <p>
              Small local business providing the very best-in class service for delivering any size parcels. We aim to provide the top quality customer service, on time deliveries as well as best parcel treatment possible. Your parcel is our priority. A company you can trust at a rate you can afford.
            </p>
            <p>
              Tired of delayed deliveries? Tired of your parcels being mishandled by couriers? Try us today!
            </p>
            <p>
              Extremely competitive prices, wide range of services and a customer service to die for! What else can you ask of a delivery service?
            </p>
            {/* Where are we based */}
            <h1> > HOW TO FIND US?</h1>
            <div className="location-holder">
              <LocationMap />
              <div className="address-holder">
                <h3>VECTRA TRANSPORT UK & EU LTD</h3>
                <p>Mount Street</p>
                <p>Birmingham</p>
                <p>B7 5GA</p>
                <div className="contact-detail">
                  <i className="fas fa-envelope"></i>
                  <p>vectratransportltd@gmail.com</p>
                </div>
                <div className="contact-detail">
                <i className="fas fa-phone-square"></i>
                  <p>073 8080 9107</p>
                </div>
              </div>
            </div>
            {/* Connect with us */}
            <h1> > CONNECT WITH US ON</h1>
            <div className="social-media-holder">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-snapchat"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
    )
}

export default About
