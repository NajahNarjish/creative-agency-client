import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import "./Header.css"

const Header = () => {
    return (
        <div className = "header-container">
            <Navbar/>
            <HeaderBanner/>
        </div>
    );
};

export default Header;