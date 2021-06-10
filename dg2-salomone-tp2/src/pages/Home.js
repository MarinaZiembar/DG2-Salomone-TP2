import React, {useState} from 'react';
import Menu from '../components/Menu';
import {curiosities} from '../utils/Curiosities';
import refresh from '../img/refresh.svg';


function Home() {


  const [funFact, setFunFact] = useState(0);
  
  const getRandomAnswer = (min, max) => {
    const indexAnswer = Math.floor(Math.random() * (max - min)) + min;
    setFunFact(indexAnswer);
  }


  return (
    <div className="Home">
      <div id="background-home">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ICmWwxaTmB8?start=84&controls=0&autoplay=1&showinfo=0&mute=1&hd=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="border-box">

        <Menu />

        <div className="home-title">
          <h1>Bang.</h1>
          <h4>Ciencia interactiva y más viva que nunca.</h4>
        </div>

        <div className="sabias-que">
          <div className="button-saber-mas" onClick={() => getRandomAnswer(0,12)}>
            <img src={refresh} className="refresh-icon" alt="refresh"/>
            <h3>Sabías que...?</h3>
          </div>
          <p>{curiosities[funFact]}</p>
        </div>

      </div>
    </div>
  );
}

export default Home;