import React from 'react';
import Icon from './Icon';
import { ICONS } from '../helpers/iconPaths';

function AbbreviationIcon() {
  return (
    <>
      <Icon icon={ICONS.ABBREVIATION_FIRST} color="#3F3F48"/>
      <Icon icon={ICONS.ABBREVIATION_SECOND} color="#3F3F48"/>
      <Icon icon={ICONS.ABBREVIATION_THIRD} color="#3F3F48"/>
    </>
  )
}

export default AbbreviationIcon;