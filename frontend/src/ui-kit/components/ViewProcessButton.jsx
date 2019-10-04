import React from 'react';
import Icon from './Icon';
import { ICONS } from '../helpers/iconPaths';

import '../styles/viewProcessButton.scss';

function ViewProcessButton() {
  return (
    <button className="view-prosess-button">
      <span className="view-prosess-button-title">View Process</span>
      <Icon icon={ICONS.ARROW_RIGHT} color="#fff"></Icon>
    </button>
  )
}

export default ViewProcessButton;