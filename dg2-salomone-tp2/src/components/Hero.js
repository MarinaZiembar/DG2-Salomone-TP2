import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { date } from '../utils/Date';
import videoArticulos from '../img/menu-articulos.mp4';



function Hero() {
  return (
    <div className="Hero">
      <div id="background-hero">
        <Link className="brand" to="/">
          <p>Bang.</p>
        </Link>
      </div>
      <Menu 
         background_url={videoArticulos} 
         dato_curioso="La superficie de la luna está hecha de un polvo pegajoso y sumamente abrasivo, dañino para la respiración y para el vestuario de los astronautas."
      />
      <h1>Artículos</h1>
      <p className="date">{date()}</p>
    </div>
  );
}

export default Hero;