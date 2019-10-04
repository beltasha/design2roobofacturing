import React from 'react';

function Icon(props) {
  return (
    <svg
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      onClick={props.clickOnIcon}
    >
      <path
        fill={props.color}
        fillRule={props.fillRule}
        d={props.icon}
      ></path>
    </svg>
  )
}

Icon.defaultProps = {
  width: 16,
  height: 16,
  color: "#7F8487",
  fillRule: '',
  viewBox: '0 0 24 24',
  clickOnItem: () => {},
};

export default Icon;