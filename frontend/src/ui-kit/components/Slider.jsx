import React from 'react';

import '../styles/slider.scss';

function Slider(props) {
  const { isChecked, leftText, rightText, update, className='' } = props;

  return (
    <label className={`switch ${className}`}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={() => { update() }}
      />
      <span className="slider">
        <span className={`text ${(!isChecked ? 'checked' : '')}`}>{leftText}</span>
        <span className={`text ${(isChecked ? 'checked' : '')}`}>{rightText}</span>
      </span>
      
    </label>
  )
}

export default Slider;