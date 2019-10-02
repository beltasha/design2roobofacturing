import React from 'react';
import Icon from './Icon';
import { ICONS } from '../helpers/iconPaths';

function AbbreviationIcon(props) {
  const { width, height } = props;
  return (
    <>
      <Icon icon={ICONS.ABBREVIATION_FIRST} width={width} height={height} color="#3F3F48"/>
      <Icon icon={ICONS.ABBREVIATION_SECOND} width={width} height={height} color="#3F3F48"/>
      <Icon icon={ICONS.ABBREVIATION_THIRD} width={width} height={height} color="#3F3F48"/>
    </>
  )
}

AbbreviationIcon.defaultProps = {
  width: 24,
  height: 24,
};

export default AbbreviationIcon;