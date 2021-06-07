import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import pic1 from '../img/articulo4.jpg';
import pic2 from '../img/articulo5.png';
import pic3 from '../img/articulo6.jpg';
import pic4 from '../img/articulo7.jpg';


function Articulos() {
  return (
    <div className="Articulos">
      <Hero />
      <div className="row">
        <div className="col">
          <Link to="/articulo-1">
            <div className="card-articulo-1">
              <span className="categoria-pill">Espacio exterior</span>
              <h2>Ojos y oídos en el espacio</h2>
              {/* <p><i>Después de un cuarto de siglo de espera, por fin el 31 de octubre veremos despegar el sucesor del telescopio espacial Hubble.</i></p> */}
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/articulo-2">
            <div className="card-articulo-2">
              <span className="categoria-pill">Medioambiente</span>
              <h2>Cambio climático 2021</h2>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/articulo-3">
            <div className="card-articulo-3">
              <span className="categoria-pill">Salud</span>
              <h2>El año de las vacunas</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="card-articulo-4">
            <img src={pic1} alt="pic"/>
            <div className="card-content">
            <span className="categoria-pill">Genética</span>
            <h2>El jardín del ADN</h2>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <img src={pic2} alt="pic"/>
            <div className="card-content">
              <span className="categoria-pill">Historia</span>
              <h2>Anne Mclaren: la madre del FIV</h2>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <img src={pic3} alt="pic"/>
            <div className="card-content">
              <span className="categoria-pill">Espacio exterior</span>
              <h2>Ingenuity en Marte</h2>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <img src={pic4} alt="pic"/>
            <div className="card-content">
              <span className="categoria-pill">Descubrimientos</span>
              <h2>Lucy y Ardi: fósiles que cambiaron todo</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articulos;