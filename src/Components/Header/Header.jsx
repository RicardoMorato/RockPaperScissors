import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score-container">
        <p>score</p>
        <h1>10</h1>
      </div>
    </div>
  );
}

export default Header;
