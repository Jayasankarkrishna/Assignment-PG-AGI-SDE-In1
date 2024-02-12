// SideMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './side.css'

const SideMenu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile-creation">Profile Creation</Link></li>
                <li><Link to="/chat">ChatBot </Link></li>
                <li><Link to="/agent-workflow">Signup</Link></li>



            </ul>
        </nav>
    );
};

export default SideMenu;
