import React from 'react';
import Button from '../button/Button';
import '../../App.css';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className='header'>Need to get in touch?</h1>
            <form>
                <label className="contact-label">Full name:</label>
                <input type="text" placeholder="Full name"></input>
                <label className="contact-label">E-mail Address:</label>
                <input type="text" placeholder="E-mail Address"></input>
                <label className="contact-label">Message:</label>
                <textarea></textarea>
                <Button className="submit-button" buttonStyle="btn-outline" buttonSize="btn-large" link='/'>Send</Button>
            </form>
            <h1 className="social-header">Alternatively</h1>
            {/* Connect with us */}
            <div className="alternatives">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-snapchat"></i>
              <i className="fab fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Contact
