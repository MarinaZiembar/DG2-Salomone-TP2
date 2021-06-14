import React from 'react';
import {Link} from 'react-router-dom';



function Footer() {
  return (
    <div className="Footer">
      <div className="col-1">
        <Link className="brand" to="/">
          <p>Bang.</p>
        </Link>
        <p className="slogan">Ciencia interactiva más viva que nunca.</p>
      </div>
      <div className="col-1">
        <h5>Menú</h5>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/articulos">
          <p>Artículos</p>
        </Link>
        <Link to="/contacto">
          <p>Contacto</p>
        </Link>
      </div>
      <div className="col-2">
        <h5>Newsletter</h5>
        <div className="form">
          <input type="email" placeholder="Email" />
          <input type="submit" value="Suscribirse" />
        </div>
      </div>
    </div>
  );
}

export default Footer;