import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Navbar.css';

const Navbar = () => {
    const [button, setButton] = useState(true);
    const [click, setClick ] = useState(false);

    const toggleMenuIcon = () => 
    {
        setClick(!click);
    }

    const closeMobileMenu = () =>
    {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960)
        {
            setButton(false)
        }
        else
        {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton(); 
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i class="fas fa-truck-loading"></i>
                    <p>VECTRA</p>
                    <i class="fas fa-truck"></i>
                    </Link>
                    <div className="menu-icon" onClick={toggleMenuIcon}>
                        <i className={ click? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
