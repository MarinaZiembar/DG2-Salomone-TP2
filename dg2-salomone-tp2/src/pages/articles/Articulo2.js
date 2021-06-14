import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import video from "../../img/hero-articulo-2.mp4";



function Articulo2() {

  useEffect(() => {
    
    const bkVideo = document.getElementById("background-articulo-2");
    bkVideo.play();

  }, [])


  return (
    <div className="Articulo-2">

      <div className="hero-articulo-2">
        <video src={video} autoPlay muted loop id="background-articulo-2" />
        <div className="header">
          <Link to="/"><p className="brand">Bang.</p></Link>
          <Menu/>
        </div>
      </div>

      <div className="content-articulo-2">
        <div className="title-articulo-2">
          <h1>Cambio climático</h1>
          <h2>5 razones por las que 2021 puede ser un año crucial en la lucha contra el cambio climático</h2>
        </div>
        <div className="row">

          <div className="col-1">
            <div className="module-numeracion">
              <div className="title">
                <h4>1.</h4>
                <h5>La crucial conferencia climática</h5>
              </div>
              <p>En noviembre de 2021, los líderes mundiales se reunirán en Glasgow, Escocia, para trabajar en el sucesor del histórico Acuerdo de París de 2015.</p>
            </div>

            <div className="module-numeracion">
              <div className="title">
                <h4>2.</h4>
                <h5>Grandes reducciones de emisiones</h5>
              </div>
              <p>En la Asamblea General de la ONU en septiembre, el presidente de China, Xi Jinping, anunció que su país tenía como objetivo convertirse en neutral en emisiones de carbono para 2060.</p>
            </div>

            <div className="module-numeracion">
              <div className="title">
                <h4>3.</h4>
                <h5>La caída del costo de las energías renovables</h5>
              </div>
              <p>Hay una buena razón por la que tantos países ahora dicen que planean tener cero emisiones netas: la caída del costo de las energías renovables está cambiando por completo el cálculo de la descarbonización.</p>
            </div>

            <div className="module-numeracion">
              <div className="title">
                <h4>4.</h4>
                <h5>La pandemia lo cambia todo</h5>
              </div>
              <p>La pandemia de coronavirus ha sacudido nuestra sensación de ser invulnerables y nos ha recordado que es posible que nuestro mundo se trastorne de formas que no podemos controlar.</p>
            </div>

            <div className="module-numeracion">
              <div className="title">
                <h4>5.</h4>
                <h5>Los negocios también se está volviendo verdes</h5>
              </div>
              <p>La caída del costo de las energías renovables y la creciente presión pública para que se actúe sobre el clima también están transformando las actitudes en los negocios.</p>
            </div>

          </div>

          <div className="col-2">
            <p>Dado que la mayoría de las actividades económicas se han ralentizado este año, especialmente en primavera, se esperaba una caída significativa de los gases de efecto invernadero. Después de varios meses de confinamiento, el tráfico aéreo severamente reducido y las emisiones de carbono de los sitios de construcción cerrados este año solo han disminuido un 5,5% desde 2019 (según los datos más recientes).</p>
            <p>Esto no solo ilustra cómo se exageró el impacto de la pandemia en el cambio climático, sino que también presenta una imagen completamente nueva de la escala y el esfuerzo necesarios para enderezar la balanza en términos de emisiones de carbono. A medida que se desarrolló la pandemia, la alteración del clima continuó a buen ritmo. 2020 está en camino de ser uno de los tres años más cálidos registrados, completando una racha de seis años consecutivos, cada uno más caluroso que el otro. </p>
            <p>El año también estuvo marcado por eventos climáticos extremos, desde los devastadores incendios forestales en Australia, las inundaciones en Asia y los Estados Unidos, hasta las severas sequías en América del Sur, todas consecuencias del cambio climático.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Articulo2;