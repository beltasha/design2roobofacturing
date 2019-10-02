import React from 'react';

import '../styles/numberTag.scss';

function NumberTag(props) {
  const { value } = props;

  return (
    <div  className="number-tag">
      <span>{value}</span>
    </div>
  )
}

export default NumberTag;