/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';

const DrumPad = ({ id, keyCode, keyTrigger, audioClip, updateDisplay, x }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleClick = () => {
    playSound();
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    updateDisplay(x);
  };

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={audioClip} ref={audioRef} />
    </div>
  );
};

export default DrumPad;
