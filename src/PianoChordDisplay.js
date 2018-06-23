import React, { Component } from 'react';
import { Note, Interval, Distance, Scale, Chord } from "tonal";

import './PianoChordDisplay.css';
const R = require('ramda');
const keyWidth = 40;
const blackKeyWidth = 24;
const dotRadius = blackKeyWidth / 2 * 0.8;
const blackDotYOffset = 60;
const whiteDotYOffset = 120;

class PianoChordDisplay extends Component {



  render() {
    return (
      <div className="PianoChordDisplay">
      <svg width="100%" viewBox="0 0 1680 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
<g>
<g id="octave-1">
{this.allKeys()}
</g>
</g>
</svg>
      </div>
    );
  }

allKeys() {
  var allKeys = R.range(0,29);
  var transformedKeys = R.map(this.keyTransform,allKeys);
  var blackCoords = R.filter(this.isBlackCoord,transformedKeys);
  var whiteCoords = R.reject(this.isBlackCoord,transformedKeys);

  var notes = Chord.notes("Dmaj7")
  console.log(JSON.stringify(notes));
  var chordNotes = R.map(Note.chroma,notes);
  chordNotes = R.concat([R.head(chordNotes)],R.map(R.add(12),R.tail(chordNotes)));
  var transformedDots = this.transformDots(chordNotes);
  var blackDots = R.map(R.compose(R.add(keyWidth/2), R.multiply(keyWidth)),transformedDots.black);
  var whiteDots = R.map(R.compose(R.add(keyWidth/2), R.multiply(keyWidth)),transformedDots.white);
  var blackDotsxy = R.map(R.pair(R.__,blackDotYOffset),blackDots);
  var whiteDotsxy = R.map(R.pair(R.__,whiteDotYOffset),whiteDots);
  var allDots = R.concat(blackDotsxy,whiteDotsxy);


  console.log(JSON.stringify(blackDotsxy));

  console.log("Black Keys: " + blackCoords);
  console.log("White Keys: " + whiteCoords);


  return <g>{this.whiteKeys(whiteCoords)}{this.blackKeys(blackCoords)}{this.dots(allDots)}</g>;
}
   whiteKeys(coords) {
    var keyCoords = R.map(R.multiply(keyWidth), coords);
    var id =0;
    return R.map(function(x) {
      return <rect key={'white-key'+id++} className="piano-key white" width={keyWidth} height="150" x={x}></rect>;
    },keyCoords);
  }

  blackKeys(coords) {
  var keyCoords = R.map(R.compose(R.add(keyWidth/2-blackKeyWidth/2), R.multiply(keyWidth)),coords);
   var id =0;
   return R.map(function(x) {
     return <rect key={'black-key'+id++} className="piano-key black" width={blackKeyWidth} height="90" x={x}></rect>;
   },keyCoords);
 }

 dots(coords) {

  var id =0;
  return R.map(function(coord) {
    return <circle cx={coord[0]} cy={coord[1]} r={dotRadius} stroke="black" stroke-width="1" fill="red"/>
  },coords);
}



 // <circle cx="{{xwd}}" cy="120" r="{{dotRadius}}" stroke="black" stroke-width="1" fill="red" ng-repeat="xwd in whiteDots"/>

  transformDots(dotArray) {
    var transformed =  R.map(this.keyTransform,dotArray);
    return {black:R.filter(this.isBlackCoord,transformed) , white:R.reject(this.isBlackCoord,transformed)};
  }

  keyTransform(keyNumber) {
      var keyMod = Number(keyNumber) % 12;
      var keyBase = Math.floor(Number(keyNumber) / 12) * 7 ;
      var keyNorm = keyMod > 4 ? keyMod + 1 : keyMod;
      return keyNorm / 2 + keyBase;
  }
  isBlackCoord(coord) {
    return (2*coord ) % 2 != 0;
  }

  isBlack(keyNumber) {
    return 2*this.keyTransform(keyNumber) % 2 != 0;
  }

}

export default PianoChordDisplay;
