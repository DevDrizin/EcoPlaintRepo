import React from 'react';
import './index.css'; 
import searchIcon from '../../assets/search-icon.png'; 

function Busca() {
  return (
    <div className="Busca">
      <input type="text" placeholder="Faça a sua pesquisa..." className="Busca-input" />
      <button className="Busca-button">
        <img src={searchIcon} alt="Search" className="Busca-icon" />
      </button>
    </div>
  );
}

export default Busca;

