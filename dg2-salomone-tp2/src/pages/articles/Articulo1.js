import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../components/Menu';
import pic1 from '../../img/articulo1-a.png';
import pic2 from '../../img/articulo1-b.png';
import pic3 from '../../img/articulo1-c.png';

function Articulo1() {

  return (
    <div className="Articulo-1">
      <div className="header">
        <Link to="/"><p className="brand">Bang.</p></Link>
        <Menu/>
      </div>
      <div className="articulo-1-grid">
        <div className="col-1">
          <h1>Ojos y oídos en el espacio</h1>
          <p>"Después de un cuarto de siglo de espera, por fin el 31 de octubre veremos despegar el sucesor del telescopio espacial Hubble, que tan grandes servicios ha prestado a la exploración del universo y que nos ha brindado infinidad de imágenes tan valiosas como inspiradoras."</p>
          <img src={pic1} className="pic-1" alt="pic-1"/>
        </div>
        <div className="col-2">
          <img src={pic2} className="pic-2" alt="pic-2"/>
          <p>El nuevo telescopio espacial James Webb de la NASA, con la colaboración de la ESA y la Agencia Canadiense del Espacio, es considerablemente más grande que su predecesor y más sensible, sobre todo en la banda infrarroja, lo que le permitirá escrutar a través de las nubes de polvo y gas para observar estrellas y galaxias más viejas, distantes y tenues que eran inaccesibles para el Hubble.</p>
          <p>El telescopio espacial James Webb es el sucesor del Hubble. Credit: NASA/Chris Gunn Si el James Webb será nuestro nuevo gran ojo en el espacio, tampoco nos faltarán oídos. El pasado año tuvimos que lamentar la destrucción del icónico radiotelescopio de Arecibo en Puerto Rico, durante décadas el mayor del mundo.</p>
          <p>Pero al menos en 2021 la comunidad astronómica tendrá a su disposición el FAST de China, cuyos 500 metros de diámetro superan con creces los 305 de Arecibo.</p>
          <p>A partir de este año, China aceptará solicitudes de investigadores extranjeros para explotar las capacidades de esta gran instalación.</p>
        </div>
        <div className="col-3">
          <img src={pic3} className="pic-3" alt="pic-3"/>
          <p>Como todos los telescopios espaciales, el JWST tiene una ventaja sobre sus contrapartes establecidos en la Tierra. No hay una atmósfera que distorsione nuestra visión así que las estrellas no centellean en el espacio. Todos los instrumentos del James Webb observarán la luz infrarroja, lo cual es vital para entender el universo. Los objetos más lejanos que podemos detectar se ven con luz infrarroja porque ésta puede atravesar el polvo interestelar que bloquea la luz visible. Además la luz visible que viaja desde una estrella lejana se distorsiona en su trayecto hacia nosotros.</p>
          <p>La longitud de onda se vuelve más larga, lo que significa que la luz que estaba en el rango visible para los humanos es desplazada hacia el infrarrojo del espectro electromagnético. Este es un efecto llamado "desplazamiento hacia el rojo" y significa que si quieres ver hacia puntos más remotos del pasado debemos mirar objetos que resultan invisibles para nosotros. </p>
          <p>Pero estos objetos "invisibles" no serán invisibles para el James Webb. Tres de sus detectores están sintonizados hacia el infrarrojo cercano. Como el término sugiere, esos son los rojos que podemos ver en el espectro electromagnético. Pero el cuarto detector, el MIRI, puede mirar más profundamente, hacia el infrarrojo medio. Lo que significa que podrá observar mucho más lejos y a puntos mucho más remotos.</p>
        </div>
      </div>
    </div>
  );
}

export default Articulo1;