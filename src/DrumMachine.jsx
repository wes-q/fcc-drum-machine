/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DrumPad from './DrumPad';
import QSound from "./assets/Heater-1.mp3";
import WSound from "./assets/Heater-2.mp3";
import ESound from "./assets/Heater-3.mp3";
import ASound from "./assets/Heater-4_1.mp3";
import SSound from "./assets/Heater-6.mp3";
import DSound from "./assets/Open-HH.mp3";
import ZSound from "./assets/Kick_n_Hat.mp3";
import XSound from "./assets/Kick.mp3";
import CSound from "./assets/Closed-HH.mp3";

const DrumMachine = () => {
  const drumPads = [
    {
        id: 'drum-pad-Q',
        keyCode: 81,
        keyTrigger: 'Q',
        audioClip: QSound,
        soundName: 'Heater A',
    },
    {
        id: 'drum-pad-W',
        keyCode: 87,
        keyTrigger: 'W',
        audioClip: WSound,
        soundName: 'Heater B',
    },
    {
        id: 'drum-pad-E',
        keyCode: 69,
        keyTrigger: 'E',
        audioClip: ESound,
        soundName: 'Heater C',
    },
    {
        id: 'drum-pad-A',
        keyCode: 65,
        keyTrigger: 'A',
        audioClip: ASound,
        soundName: 'Heater D',
    },
    {
        id: 'drum-pad-S',
        keyCode: 83,
        keyTrigger: 'S',
        audioClip: SSound,
        soundName: 'Heater E',
    },
    {
        id: 'drum-pad-D',
        keyCode: 68,
        keyTrigger: 'D',
        audioClip: DSound,
        soundName: 'Open-HH',
    },
    {
        id: 'drum-pad-Z',
        keyCode: 90,
        keyTrigger: 'Z',
        audioClip: ZSound,
        soundName: "Kick n' Hat",
    },
    {
        id: 'drum-pad-X',
        keyCode: 88,
        keyTrigger: 'X',
        audioClip: XSound,
        soundName: 'Kick',
    },
    {
        id: 'drum-pad-C',
        keyCode: 67,
        keyTrigger: 'C',
        audioClip: CSound,
        soundName: 'Closed-HH',
    },
  ];

  const [displayText, setDisplayText] = useState('');

  const updateDisplay = (text) => {
    setDisplayText(text);
  };

  return (
    <div id="drum-machine">
        <div id="display">{displayText}</div>
        <div className='pad-section'>
            {drumPads.map((pad) => (
                <DrumPad
                key={pad.id}
                id={pad.id}
                keyCode={pad.keyCode}
                keyTrigger={pad.keyTrigger}
                audioClip={pad.audioClip}
                updateDisplay={updateDisplay}
                x={pad.soundName}
                />
            ))}
        </div>
    </div>
  );
};

export default DrumMachine;
