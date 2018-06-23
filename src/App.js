import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PianoChordDisplay from './PianoChordDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoChordDisplay chord="B7#5#9"/>
        <PianoChordDisplay chord="Em7"/>
        <PianoChordDisplay chord="Gm7"/>
        <PianoChordDisplay chord="Bbmaj7"/>
        <PianoChordDisplay chord="Bm7b5"/>
        <PianoChordDisplay chord="E7#9"/>
        <PianoChordDisplay chord="Am7"/>
        <PianoChordDisplay chord="F#m7b5"/>
        <PianoChordDisplay chord="Fm7"/>
        <PianoChordDisplay chord="Cm11"/>
        <PianoChordDisplay chord="B7#5#9"/>
      </div>

    );
  }
}

export default App;
