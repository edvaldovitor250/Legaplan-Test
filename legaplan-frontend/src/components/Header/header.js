import React from 'react';
import "../../styles/Header.scss"
import SVGIconLogo from '../../assets/SVG/SVGIconLogo';
import SVGIconTextLogo from '../../assets/SVG/SVGIconTextLogo';

const Header = ({ userName, currentDate }) => {
    return (
        <div className="header-container">
            <header className="header">
                <div className="logo">
                    <SVGIconLogo />

                    <SVGIconTextLogo />
                </div>

                <div className="welcome">
                    <h1>Bem-vindo de volta, {userName}</h1>
                </div>
                <div className="date">
                    <p>{currentDate}</p>
                </div>
            </header>
            <div className="line"></div>
        </div>
    );
};

export default Header;
