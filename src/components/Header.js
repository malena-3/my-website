import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className="theHeader">
            <h1>Malena Lodi</h1>
            <nav>
                <a href="#aboutPg"> About </a>
                <a href="#projectsPg"> Projects </a>
                <a href="#galleryPg"> Gallery </a>
                <a href="#contactPg"> Contact </a>
            </nav>
        </header>

    )
}

export default Header;