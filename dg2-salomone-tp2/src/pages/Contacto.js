import React from 'react';
import Menu from '../components/Menu';
import videoContacto from '../img/menu-contacto.mp4';



function Contacto() {

  return (
    <div className="Contacto">
      <div id="background-contacto">
        <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/8gPzIKe92-M?start=110&controls=0&autoplay=1&showinfo=0&mute=1&hd=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="border-box">

        <Menu 
          background_url={videoContacto} 
          dato_curioso="El óleo Azul Ultramar se obtenía a partir de la piedra Lapislázuli que se utilizaba principalmente para pintar el manto de la Virgen."
        />

        <div className="contact-text">
          <h1>Contacto</h1>
          <h2>Tu curiosidad es siempre bienvenida!</h2>
        </div>
        
        <div className="contact-form">
          <div className="row">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="row">
            <input type="text" placeholder="Teléfono" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea rows="4" placeholder="Escribe tu comentario aquí..."></textarea>
          </div>
          <div className="row">
            <input type="submit" value="Enviar" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;