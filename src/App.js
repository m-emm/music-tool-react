import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PianoChordDisplay from './PianoChordDisplay';
import Staff from './Staff';
import MusicNote from './MusicNote';

/*  <PianoChordDisplay chord="Gmaj7"/>
  <PianoChordDisplay chord="Bbm7"/>
  <PianoChordDisplay chord="Eb7"/>
  <PianoChordDisplay chord="Gmaj7"/>
  <PianoChordDisplay chord="Am7"/>
  <PianoChordDisplay chord="D7"/> */
class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoChordDisplay chord="F7#11"/>
        <PianoChordDisplay chord="Bbo7"/>
        <PianoChordDisplay chord="G6"/>
        <Staff clef="treble" length="2300">
           <MusicNote value="C3" pos="0"/>
           <MusicNote value="D3" pos="1"/>
           <MusicNote value="E3" pos="2"/>
           <MusicNote value="F3" pos="3"/>
           <MusicNote value="G3" pos="4"/>
           <MusicNote value="A3" pos="5"/>
           <MusicNote value="B3" pos="6"/>
           <MusicNote value="C4" pos="7"/>

        </Staff>
        <Staff clef="bass" length="2300">
           <MusicNote value="C2" pos="0"/>
           <MusicNote value="D2" pos="1"/>
           <MusicNote value="E2" pos="2"/>
           <MusicNote value="F2" pos="3"/>
           <MusicNote value="G2" pos="4"/>
           <MusicNote value="A2" pos="5"/>
           <MusicNote value="B2" pos="6"/>
           <MusicNote value="C3" pos="7"/>
           <MusicNote value="E1" pos="2"/>
           <MusicNote value="F1" pos="3"/>
           <MusicNote value="G1" pos="4"/>
           <MusicNote value="A1" pos="5"/>
           <MusicNote value="B1" pos="6"/>

        </Staff>
      </div>

    );
  }
}

export default App;
