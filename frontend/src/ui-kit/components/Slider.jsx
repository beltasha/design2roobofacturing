import React from 'react';

import '../styles/slider.scss';

function Slider(props) {
  const { isChecked, update } = props;

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={(e) => { update() }}
      />
      <span className="slider">
        <span className={`text ${(!isChecked ? 'checked' : '')}`}>Latest first</span>
        <span className={`text ${(isChecked ? 'checked' : '')}`}>Old first</span>
      </span>
      
    </label>
  )
}

export default Slider;