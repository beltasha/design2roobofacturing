import React from 'react';
import { getTagTitle, getTagColor } from '../helpers/statusTag';

import '../styles/statusTag.scss';

function StatusTag(props) {
  const { type } = props;
  const title = getTagTitle(type);
  const color = getTagColor(type);

  return (
    <div  className={`status-tag ${color}`}>
      <span className="status-tag-title">{title}</span>
    </div>
  )
}

export default StatusTag;