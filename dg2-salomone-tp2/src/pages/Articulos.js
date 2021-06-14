import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function Articulos() {
  return (
    <div className="Articulos">
      <Hero />
      <div className="general-row">
        <div className="col-12">
          <Link to="/articulo-2">
            <div className="card-articulo-1">
              <p>Medioambiente</p>
              <div className="content">
                <h2>Cambio<br></br> climático</h2>
                <h3>5 razones por las que 2021 puede ser un año crucial en la lucha contra el cambio climático.</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="general-row">
        <div className="col-6">
          <Link to="/articulo-1">
            <div className="card-articulo-2">
              <p>Astronomía</p>
                <h2>Ojos y oídos en el espacio</h2>
                <h4>Después de un cuarto de siglo de espera, por fin el 31 de octubre veremos despegar el sucesor del telescopio espacial Hubble.</h4>
            </div>
          </Link>
        </div>
        <div className="col-6">
          <div className="card-articulo-3">
            <p>Historia</p>
            <h2>El jardín del ADN</h2>
            <h4>Gregor Mendel: cómo un monje con un jardín de arvejas descubrió las leyes de la herencia genética</h4>
          </div>
        </div>
      </div>
      <div className="general-row-2">
        <div className="col-3">
          <Link to="/articulo-3">
            <div className="card-articulo-4">
              <h3>El año de las vacunas</h3>
            </div>
          </Link>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Anne Mclaren la mamá de la fertilización in vitro</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Lucy y Ardi, los fósiles que cambiaron la historia de la humanidad</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>DART: Desviaremos un asteroide golpeandolo con una nave.</h3>
          </div>
        </div>
      </div>
      <div className="general-row-2">
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Ingenuity en Marte: el exitoso primer vuelo sobre el planeta rojo</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Run 3: El LHC del CERN vuelve a acelerar partículas</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Una iniciativa para producir harina de porotos y formular nuevos alimentos</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Así es Grace, el robot sanitario creado por el Covid-19</h3>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Articulos;