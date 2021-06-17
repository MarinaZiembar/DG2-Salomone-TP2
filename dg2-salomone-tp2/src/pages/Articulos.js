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
          <Link to="/articulo-1">
            <div className="card-articulo-1">
              <p>Astronomía</p>
              <div className="content">
                <h2>Ojos y oídos en el espacio</h2>
                <h3>Después de un cuarto de siglo de espera, por fin el 31 de octubre veremos despegar el sucesor del telescopio espacial Hubble.</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="general-row">
        <div className="col-6">
          <Link to="/articulo-2">
            <div className="card-articulo-2">
              <p>Medioambiente</p>
                <h2>Cambio climático</h2>
                <h4>5 razones por las que 2021 puede ser un año crucial en la lucha contra el cambio climático.</h4>
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
              <h3>El año de las <span className="enlarge-2">vacunas</span></h3>
            </div>
          </Link>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Anne Mclaren la mamá de la <span className="enlarge-1">fertilización</span> in vitro</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Lucy y Ardi, los <span className="enlarge-1">fósiles</span> que cambiaron la historia de la <span className="enlarge-2">humanidad</span></h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3><span className="enlarge-2">DART:</span> Desviaremos un asteroide <span className="enlarge-1">golpeandolo</span> con una nave.</h3>
          </div>
        </div>
      </div>
      <div className="general-row-2">
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Ingenuity en <span className="enlarge-2">Marte:</span> el exitoso primer vuelo sobre el planeta <span className="enlarge-1">rojo</span></h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Run 3: El LHC del CERN vuelve a <span className="enlarge-2">acelerar</span> partículas</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Una iniciativa para producir harina de porotos y <span className="enlarge-1">formular</span> nuevos alimentos</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="card-articulo-4">
            <h3>Así es <span className="enlarge-1">Grace</span>, el robot <span className="enlarge-2">sanitario</span> creado por el Covid-19</h3>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Articulos;