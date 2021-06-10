import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import video from "../../img/hero-articulo-3.mp4";



function Articulo3() {

   useEffect(() => {
    
    const bkVideo = document.getElementById("background-articulo-3");
    bkVideo.play();

  }, [])


  return (
    <div className="Articulo-3">

      <div className="hero-articulo-3">
        <div className="header">
          <Link to="/"><p className="brand">Bang.</p></Link>
          <Menu/>
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
        <p>En tiempo récord, el poder del ingenio humano ha sido capaz de salir al paso del azote del coronavirus SARS-CoV-2 con infinidad de vacunas, algunas de las cuales ya se están distribuyendo por el mundo o lo harán en breve: Pfizer-BioNTech, Moderna-NIAID, Sinopharm, Sinovac o la Sputnik V de Rusia.</p>
        <p>A lo largo del año seguirán las de Oxford-AstraZeneca, Novavax, Janssen y otras. En los próximos meses el trabajo de los científicos deberá centrarse en recoger, procesar y analizar el inmenso volumen de datos que va a generar esta campaña global de inmunización sin precedentes.</p>
      </div>

    </div>
  );
}

export default Articulo3;