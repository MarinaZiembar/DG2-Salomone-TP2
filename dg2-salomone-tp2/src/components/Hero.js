import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { date } from '../utils/Date';
import videoArticulos from '../img/menu-articulos.mp4';



function Hero() {
  return (
    <div className="Hero">
      <div id="background-hero">
        <iframe width="200%" height="100%" src="https://www.youtube.com/embed/0k23DVv_xsA?controls=0&autoplay=1&showinfo=0&mute=1&hd=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop" allowFullScreen></iframe>
      </div>
      <Link className="brand" to="/">
        <p>Bang.</p>
      </Link>
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