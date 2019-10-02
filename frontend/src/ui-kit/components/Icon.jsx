import React from 'react';

function Icon(props) {
  return (
    <svg
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d={props.icon}
      ></path>
    </svg>
  )
}

Icon.defaultProps = {
  width: 16,
  height: 16,
  color: "#7F8487",
};

export default Icon;