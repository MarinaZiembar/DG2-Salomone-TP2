import React from 'react';
import Menu from './Menu';
import { date } from '../utils/Date';



function Hero() {
  return (
    <div className="Hero">
        <div id="background-hero">
            <iframe width="200%" height="100%" src="https://www.youtube.com/embed/0k23DVv_xsA?controls=0&autoplay=1&showinfo=0&mute=1&hd=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop" allowFullScreen></iframe>
        </div>
        <p className="brand">Bang.</p>
        <Menu />
        <h1>Artículos</h1>
        <p> {date()} </p>
    </div>
  );
}

export default Hero;