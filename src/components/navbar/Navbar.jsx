import React from "react";
import './Navbar.css';
import logo_light from '../../assets/day-mode.png';
import logo_dark from '../../assets/night-mode.png';
import { Link } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="navitem"><Link to="/">Home</Link></li>
                <li className="navitem"><Link to="/Articales">Articles</Link></li>
                <li className="navitem"><Link to="/About">About</Link></li>
            </ul>
            <img 
                onClick={toggleMode} 
                src={theme === 'light' ? logo_dark : logo_light} 
                className="theme-toggle-icon"
                alt="Theme toggle"
            />
        </nav>
    );
}

export default Navbar;