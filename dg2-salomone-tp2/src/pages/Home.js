import React, {useState} from 'react';
import {curiosities} from '../utils/Curiosities';


function Home() {


  const [funFact, setFunFact] = useState(0);
  
  const getRandomAnswer = (min, max) => {
    const indexAnswer = Math.floor(Math.random() * (max - min)) + min;
    setFunFact(indexAnswer);
  }


  return (
    <div className="Home">
      <div id="background-home">
        <iframe width="200%" height="100%" src="https://www.youtube.com/embed/ICmWwxaTmB8?start=45&controls=0&autoplay=1&loop=1&showinfo=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="border-box">

        <h1>Bang.</h1>
        
        <div className="sabias-que">
          <h3 >Sabías que...?</h3>
          <p>{curiosities[funFact]}</p>
          <div className="button-saber-mas" onClick={() => getRandomAnswer(0,12)}>
            <p>Más datos curiosos</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;