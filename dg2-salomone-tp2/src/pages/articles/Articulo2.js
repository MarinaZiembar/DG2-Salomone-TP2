import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import video from "../../img/hero-articulo-2.mp4";
import video2 from "../../img/video-2-articulo-2.mp4";
import videoArticulo2 from '../../img/menu-cambioclimatico.mp4';



function Articulo2() {

  useEffect(() => {
    
    const bkVideo = document.getElementById("background-articulo-2");
    bkVideo.play();

    const bkVideo2 = document.getElementById("video-articulo-2");
    bkVideo2.play();

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
          <p>Los últimos cuatro años fueron <strong>los cuatro más cálidos de la historia</strong>. Según un informe de la Organización Meteorológica Mundial (OMM) de septiembre de 2019, estamos al menos <strong>un grado centígrado por encima de los niveles preindustriales</strong> y cerca de lo que los científicos advierten que sería “un riesgo inaceptable”. El Acuerdo de París de 2015 sobre el cambio climático exige que el calentamiento final se mantenga “muy por debajo” de los dos grados centígrados, y que se prosigan los esfuerzos para limitar aún más el aumento a 1,5 grados. Pero si no reducimos las emisiones globales, <strong>las temperaturas podrían aumentar hasta tres grados centígrados para el año 2100</strong>, causando más daños irreversibles a nuestros ecosistemas.</p>
          <p>Según Antonio Guterres, secretario general de la ONU, estamos en un <strong>“punto de quiebre”</strong> para el clima. Con el espíritu optimista de Año Nuevo, estas son cinco razones por la que cree que 2021 podría confundir a los fatalistas y ver un gran avance en la <strong>ambición global</strong> sobre el clima:</p>

          <div class="minirow">
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

          </div>

          <div class="minirow">
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
          </div>

          <div class="minirow">
            <div className="module-numeracion">
              <div className="title">
                <h4>5.</h4>
                <h5>Los negocios también<br></br>se están volviendo verdes</h5>
              </div>
              <p>La caída del costo de las energías renovables y la creciente presión pública para que se actúe sobre el clima también están transformando las actitudes en los negocios.</p>
            </div>
          </div>

        </div>

        <video src={video2} autoPlay muted loop id="video-articulo-2" />

        <div className="afterpic">

          <div className="col-2">
            <p>"El cambio climático es un tema recurrente en nuestros tiempos - y estamos en un momento crucial. Nos enfrentamos cara a cara con una amenaza existencial."</p>
            <span>- Antonio Guterres</span>
          </div>

          <div className="col-3">
            <p>Los incendios forestales son noticia en distintos puntos del planeta. A pesar de que <strong>los orígenes son multicausales</strong>, como ampliación de la frontera agropecuaria o negocios inmobiliarios, diversos estudios dan cuenta de la <strong>relación que existe entre estos fuegos y la crisis climática</strong>. Es que a medida que las temperaturas aumentan como resultado de las emisiones de carbono causadas por el hombre las condiciones climáticas se están volviendo maduras para los incendios forestales en muchas partes del mundo. A escala mundial, la duración de la <strong>temporada de incendios aumentó 18,7% entre 1979 y 2013</strong>, concluyó un estudio realizado en 2015, publicado por la revista Nature.</p>
            <p>Pero las malas noticias no terminan ahí: los investigadores proyectan que, en los próximos años, <strong>la frecuencia de los incendios forestales podría aumentar drásticamente</strong>, en particular si las emisiones siguen escalando. Una proyección estimó que para 2050 habrá un 27% más de incendios forestales a nivel mundial que en 2000.</p>
            <p>Los científicos predicen que en las regiones donde los incendios son frecuentes, como el sur de Europa, la situación <strong>empeorará en los próximos años</strong>. Por ejemplo, un estudio reciente que examinó la cuenca del Mediterráneo estimó que, en un escenario de altas emisiones, <strong>los incendios podrían aumentar en 91% en Francia, 29% en Grecia, 21% en Portugal y 30% en Túnez para finales de siglo</strong>.</p>
            <p>“Hay varias formas en las que el cambio climático afecta a los incendios. Por un lado, a medida que aumentan las temperaturas, <strong>la atmósfera se vuelve más desencante</strong> (aumenta el déficit de presión de vapor), eso hace que la hojarasca (combustible fino muerto en el argot) se vuelva más seca y, por tanto, más disponible al incendio”, explica Víctor Resco De Dios, investigador de la Universidad de Lleida, de España y de la Southwest University of Science and Technology, de China.</p>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Articulo2;