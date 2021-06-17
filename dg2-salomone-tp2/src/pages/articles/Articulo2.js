import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import video from "../../img/hero-articulo-2.mp4";
import videoArticulo2 from '../../img/menu-cambioclimatico.mp4';



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
          <Menu
            background_url={videoArticulo2} 
            dato_curioso="Las avispas necesitan mantener baja la temperatura del avispero. Para ello, riegan con pequeñas gotas de agua las celdas del avispero y baten las alas para mover el aire."
          />
        </div>
      </div>

      <div className="content-articulo-2">

        <div className="title-articulo-2">
          <h1>Cambio climático</h1>
        </div>

        <div className="text-articulo-2">
          <h2>5 razones por las que 2021 puede ser un año crucial en la lucha contra el cambio climático</h2>
          <p>Según Antonio Guterres, secretario general de la ONU, estamos en un <strong>“punto de quiebre”</strong> para el clima. Con el espíritu optimista de Año Nuevo, estas son cinco razones por la que cree que 2021 podría confundir a los fatalistas y ver un gran avance en la <strong>ambición global</strong> sobre el clima:</p>
          <div className="module-numeracion">
            <div className="title">
                <h4>1.</h4>
                <h5>La crucial<br></br>conferencia climática</h5>
            </div>
            <p>En noviembre de 2021, los líderes mundiales se reunirán en Glasgow, Escocia, para trabajar en el sucesor del histórico Acuerdo de París de 2015.</p>
          </div>

          <div className="module-numeracion">
            <div className="title">
              <h4>2.</h4>
              <h5>Grandes reducciones<br></br>de emisiones</h5>
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
              <h5>La pandemia<br></br>lo cambia todo</h5>
            </div>
            <p>La pandemia de coronavirus ha sacudido nuestra sensación de ser invulnerables y nos ha recordado que es posible que nuestro mundo se trastorne de formas que no podemos controlar.</p>
          </div>

          <div className="module-numeracion">
            <div className="title">
              <h4>5.</h4>
              <h5>Los negocios también<br></br>se están volviendo verdes</h5>
            </div>
            <p>La caída del costo de las energías renovables y la creciente presión pública para que se actúe sobre el clima también están transformando las actitudes en los negocios.</p>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Articulo2;