import React from 'react';
import '../../App.css';
import Button from '../button/Button';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-headers">
                <h1>VECTRA TRANSPORT</h1>
                <p>A JOURNEY OF A THOUSAND PARCELS</p>
            </div>
            <div className="hero-btns">
                <div className="btn-fly-left">
                    <Button buttonStyle='btn-outline' buttonSize='btn-large' link='/shop'>
                        GET STARTED
                    </Button>
                </div>
                <div className="btn-fly-right">
                    <Button buttonStyle='btn-primary' buttonSize='btn-large' link='/about'>
                        ABOUT US
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
