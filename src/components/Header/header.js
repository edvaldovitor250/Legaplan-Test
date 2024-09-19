import React from 'react';
import "../../styles/Header.scss"

const Header = ({ userName, currentDate }) => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="FocalPoint Logo" />
        </div>
        <div className="welcome">
          <h1>Bem-vindo de volta, {userName}</h1>
        </div>
        <div className="date">
          <p>{currentDate}</p>
        </div>
      </header>
      <div className="line"></div> {/* Linha fora do header */}
    </div>
  );
};

export default Header;
