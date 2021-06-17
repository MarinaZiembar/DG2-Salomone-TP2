import React from 'react';
import Menu from '../components/Menu';
import videoHome from '../img/menu-home.mp4';


function Home() {


  return (
    <div className="Home">
      <div id="background-home">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ICmWwxaTmB8?start=84&controls=0&autoplay=1&showinfo=0&mute=1&hd=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="border-box">

        <Menu 
          background_url={videoHome} 
          dato_curioso="Las orugas tienen alrededor de 4 mil músculos y 12 ojos, 6 patas verdaderas y 5 pares de patas falsas."
        />

        <div className="home-title">
          <h1>Bang.</h1>
        </div>

        <div className="sabias-que">
          <h4>Ciencia interactiva y más viva que nunca.</h4>
        </div>

      </div>
    </div>
  );
}

export default Home;