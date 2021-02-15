import React from 'react';
import Button from '../button/Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Newsletter for latest offers!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="E-mail Address" className="footer-input"></input>
                        <Button link='/' buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
