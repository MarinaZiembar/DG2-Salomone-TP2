import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import pic1 from '../../img/articulo1-a.png';
import pic2 from '../../img/articulo1-b.png';
import telescopePic1 from '../../img/vista-telescopio-1.jpg';
import telescopePic2 from '../../img/vista-telescopio-2.jpg';
import telescopePic3 from '../../img/vista-telescopio-3.jpg';
import telescopePic4 from '../../img/vista-telescopio-4.png';
import video from "../../img/bk-articulo-1.mp4";
import videoArticulo1 from "../../img/menu-ojos.mp4";



function Articulo1() {

  useEffect(() => {
    
    const bkVideo = document.getElementById("background-articulo-1");
    bkVideo.play();

  }, [])

  return (
    <>
      <div className="Articulo-1">

        <video src={video} autoPlay muted loop id="background-articulo-1" />

        <div className="header">
          <Link to="/"><p className="brand">Bang.</p></Link>
          <Menu
            background_url={videoArticulo1} 
            dato_curioso="En sus 3 o 4 meses de vida, cada glóbulo rojo da 150.000 vueltas alrededor de tu cuerpo a una velocidad de unos 2 kilómetros por hora."
          />
        </div>
        
        <div className="articulo-1-grid">
          <div className="col-1">
            <h1>Ojos y oídos en el espacio</h1>
            <p>"Después de un cuarto de siglo de espera, por fin el <strong>31 de octubre</strong> veremos despegar el sucesor del telescopio espacial Hubble, que tan grandes servicios ha prestado a la exploración del universo y que nos ha brindado infinidad de imágenes tan valiosas como inspiradoras."</p>
            <img src={pic1} className="pic-1" alt="pic-1"/>
          </div>
          <div className="col-2">
            <img src={pic2} className="pic-2" alt="pic-2"/>
            <p>El nuevo telescopio espacial <strong>James Webb</strong> de la NASA, con la colaboración de la ESA y la Agencia Canadiense del Espacio, es considerablemente más grande que su predecesor y más sensible, sobre todo en la banda infrarroja, lo que le permitirá escrutar a través de las nubes de polvo y gas para observar estrellas y galaxias más viejas, distantes y tenues que eran inaccesibles para el Hubble.</p>
            <p>El telescopio espacial James Webb es el sucesor del Hubble. Si el James Webb será nuestro nuevo gran ojo en el espacio, tampoco nos faltarán oídos. El pasado año tuvimos que lamentar la destrucción del icónico radiotelescopio de Arecibo en Puerto Rico, durante décadas el mayor del mundo.</p>
            <p>Pero al menos en 2021 la comunidad astronómica tendrá a su disposición el FAST de China, cuyos <strong>500 metros de diámetro</strong> superan con creces los 305 de Arecibo.</p>
            <p className="destacado">A partir de este año, China aceptará solicitudes de investigadores extranjeros para explotar las capacidades de esta gran instalación.</p>
            <p>Como todos los telescopios espaciales, el JWST tiene una ventaja sobre sus contrapartes establecidos en la Tierra. No hay una atmósfera que distorsione nuestra visión así que las estrellas no centellean en el espacio. Todos los instrumentos del James Webb observarán la luz infrarroja, lo cual es vital para entender el universo. Los objetos más lejanos que podemos detectar se ven con luz infrarroja porque ésta puede atravesar el polvo interestelar que bloquea la luz visible. Además la luz visible que viaja desde una estrella lejana se distorsiona en su trayecto hacia nosotros.</p>
            <p>La longitud de onda se vuelve más larga, lo que significa que la luz que estaba en el rango visible para los humanos es desplazada hacia el infrarrojo del espectro electromagnético. Este es un efecto llamado <strong>"desplazamiento hacia el rojo" </strong>y significa que si quieres ver hacia puntos más remotos del pasado debemos mirar objetos que resultan invisibles para nosotros. </p>
            <p>Pero estos objetos "invisibles" no serán invisibles para el James Webb. Tres de sus detectores están sintonizados hacia el infrarrojo cercano. Como el término sugiere, esos son los rojos que podemos ver en el espectro electromagnético. Pero el cuarto detector, el MIRI, puede mirar más profundamente, hacia el infrarrojo medio. Lo que significa que podrá observar mucho más lejos y a puntos mucho más remotos.</p>
          </div>
        </div>
        <div className="row">
          <h4>Qué podremos ver?</h4>
          <div className="pics">
            <div className="telescope-1-group">
              <img src={telescopePic1} className="telescope-pic t-pic-1" alt="pic-1"/>
              <div className="t-pic-1-overlay">
                <p>Planetas</p>
              </div>
            </div>
            <div className="telescope-2-group">
              <img src={telescopePic2} className="telescope-pic t-pic-2" alt="pic-2"/>
              <div className="t-pic-2-overlay">
                <p>Estrellas</p>
              </div>
            </div>
            <div className="telescope-3-group">
              <img src={telescopePic3} className="telescope-pic t-pic-3" alt="pic-3"/>
              <div className="t-pic-3-overlay">
                <p>Nebulosas</p>
              </div>
            </div>
            <div className="telescope-4-group">
              <img src={telescopePic4} className="telescope-pic t-pic-4" alt="pic-4"/>
              <div className="t-pic-4-overlay">
                <p>Supernovas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h2>Por qué tan larga espera?</h2>
          <p>No hay una única razón que justifique todos los retrasos, pero detrás de la mayor parte de los cambios de fecha hay motivos técnicos. Y es que este instrumento es el telescopio astronómico más avanzado y complejo que la humanidad ha construido hasta ahora. </p>
          <p className="destacado">Durante su puesta a punto las agencias espaciales que han intervenido en su diseño y construcción, y también varios organismos independientes, han llevado a cabo revisiones muy exhaustivas que persiguen garantizar su integridad durante el estrés que inevitablemente va a soportar en la fase de lanzamiento.</p>
          <p>Y sí, estos análisis han identificado errores de diseño y ejecución que han ido solventándose poco a poco. De hecho, una de las últimas revisiones apuntó que varios tornillos y arandelas no habían sido correctamente fijados, por lo que la integridad del telescopio espacial podría verse comprometida.</p>
          <p>Algo así parece invitarnos a concluir que este proyecto está siendo lastrado por una cadena interminable de errores difíciles de asumir, pero no debemos perder de vista que, como he mencionado unas líneas más arriba, el telescopio espacial James Webb es un instrumento científico extraordinariamente complejo que, además, va a ser sometido a un estrés extremo.</p>
        </div>
      </div>
      <Footer />
    </>  
  );
}

export default Articulo1;