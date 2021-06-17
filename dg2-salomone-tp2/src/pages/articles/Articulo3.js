import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import video from "../../img/hero-articulo-3.mp4";
import videoArticulo3 from "../../img/menu-vacunas.mp4";
import chart from "../../img/chart.png";



function Articulo3() {

   useEffect(() => {
    
    const bkVideo = document.getElementById("background-articulo-3");
    bkVideo.play();

  }, [])


  return (
    <>
      <div className="Articulo-3">

        <div className="hero-articulo-3">
          <div className="header">
            <Link to="/"><p className="brand">Bang.</p></Link>
            <Menu
              background_url={videoArticulo3} 
              dato_curioso='La palabra petróleo fue usada por primera vez en 1546; fue acuñado por el minerólogo alemán Georg Bauer y significa “aceite de roca”.'
            />
          </div>
        </div>

        <div className="col-1">
          <video src={video} autoPlay muted loop id="background-articulo-3" /> 
          <div className="title">
            <h1>El año de<br></br>las vacunas</h1>
          </div>
        </div>

        <div className="col-2">  
          <h2>Si 2020 fue el año del ataque, 2021 será el del contraataque.</h2> 
          <p>En tiempo récord, el poder del ingenio humano ha sido capaz de salir al paso del azote del <strong>coronavirus SARS-CoV-2</strong> con infinidad de vacunas, algunas de las cuales ya se están distribuyendo por el mundo o lo harán en breve: Pfizer-BioNTech, Moderna-NIAID, Sinopharm, Sinovac o la Sputnik V de Rusia.</p>
          <p>A lo largo del año seguirán las de <strong>Oxford-AstraZeneca, Novavax, Janssen</strong> y otras. En los próximos meses el trabajo de los científicos deberá centrarse en recoger, procesar y analizar el inmenso volumen de datos que va a generar esta campaña <strong>global</strong> de inmunización sin precedentes.</p>
          <p>Entre las vacunas de la COVID-19 ya aprobadas o todavía en desarrollo, existen varios tipos según la tecnología que usan: las vacunas "clásicas" inoculan el virus entero inactivado o bien proteínas virales, mientras que las vacunas más innovadoras introducen una secuencia génica para que sea <strong>nuestro propio organismo</strong> el que sintetice la proteína viral en cuestión.</p>
          <p className="destacado">Esta secuencia se puede introducir directamente a la célula (vacunas a base de ARN mensajero) o bien mediante un vector viral que infecta a la célula pero no se replica.</p> 
          <p>Entre las vacunas de ARNm están las vacunas aprobadas de <strong>Pfizer-BioNTech y Moderna</strong>. Entre las vacunas que usan algún tipo de vector viral, están las vacunas de Oxford/ AstraZeneca, la Sputnik del Instituto Gamaleya, o la de Janssen (Johnson & Johnson). Todas ellas han sido testadas en miles de personas para probar su seguridad y eficacia a lo largo de las <strong>tres fases de los ensayos clínicos</strong>.</p>
          {/* <p>Pfizer / BioNTech y Moderna: ARN mensajero. Tanto la vacuna de Pfizer / BioNTech como la de Moderna son vacunas de ARN mensajero. Se trata de vacunas de última generación que introducen en nuestras células una secuencia génica que codifica para una proteína del virus SARS-CoV-2, la proteína S. Es decir, estas vacunas contienen material genético sintetizado en laboratorio que proporciona a nuestras células la información necesaria para fabricar la proteína S. A continuación, nuestro sistema inmunitario reconoce la proteína S como extraña y responde generando anticuerpos y linfocitos T específicos. Por consiguiente, cuando el coronavirus entre en nuestro organismo, ya tendremos inmunidad y no enfermaremos.</p>
          <p>Oxford / AstraZeneca y Johnson & Johnson (Janssen): vector viral Estas vacunas usan un virus inocuo para introducir las instrucciones genéticas necesarias para que nuestras células fabriquen la proteína S. Este otro virus (suele ser un adenovirus) se conoce como vector viral y ha sido modificado en laboratorio de manera que pueda infectar nuestras células, pero no se pueda replicar.</p>
          <p>La vacuna de Oxford / AstraZeneca consiste en un adenovirus de chimpancé modificado  que porta el ADN de la proteína Spike del SARS-CoV-2. De esta manera, el adenovirus es capaz de infectar a las células humanas y hacer que fabriquen la proteína. En cuanto nuestro sistema inmunitario detecta esta proteína, procede a generar anticuerpos y linfocitos T específicos contra el virus. La vacuna de Janssen consiste en un adenovirus humano llamado Ad26, modificado para no poderse replicar y que porta el ADN que codifica para la proteína Spike del SARS-CoV-2.</p> */}
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Articulo3;