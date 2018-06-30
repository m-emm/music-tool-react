import React, { Component } from 'react';
import { Note, Interval, Distance, Scale, Chord } from "tonal";

const R = require('ramda');

class MusicNote extends Component {

  render() {
    const cY = 536;

    var delta = this.props.delta;
    var y = cY-delta*30;
    var x = 230*this.props.pos+600;
    return (
      <g transform={'translate('+ x +','+ y +')'}>
      <line x1="74" y1="5" x2="74" y2="-350" className="note-stem"/>

      <g transform="rotate(-18)">
      <ellipse cx="0" cy="0" rx="80" ry="60" className="note-ellipse"/>
      </g>
      </g>
    );
  }


}

export default MusicNote;
