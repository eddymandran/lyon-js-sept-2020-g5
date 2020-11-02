import React from 'react';
import { Howl } from 'howler';
import '../Style/Home.css';
import Punch from '../Audio/Punch.wav';
import Go from '../Audio/go.wav';

const audioClips = new Howl({
  src: [Punch],
});

const audioClips2 = new Howl({
  src: [Go],
});

const Home = (props) => {
  const handleNewGameClick = () => {
    props.history.push('/game');
    audioClips2.play();
  };

  const handleRulesClick = () => {
    props.history.push('/rules');
    audioClips.play();
  };

  const handleOptionsClick = () => {
    props.history.push('/options');
    audioClips.play();
  };

  const handleAboutClick = () => {
    props.history.push('/aboutUs');
    audioClips.play();
  };

  return (
    <div className="body-home-container">
      <div className="btn-container1">
        <button
          type="button"
          className="btn-new-game"
          onClick={handleNewGameClick}
        >
          New Game
        </button>
      </div>
      <div className="btn-container2">
        <button type="button" className="btn-rules" onClick={handleRulesClick}>
          Rules
        </button>
        <button
          type="button"
          className="btn-options"
          onClick={handleOptionsClick}
        >
          Options
        </button>
        <button type="button" className="btn-about" onClick={handleAboutClick}>
          About us
        </button>
      </div>
    </div>
  );
};

export default Home;
