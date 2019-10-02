import React from 'react';

import '../styles/statusTag.scss';

function getTagTitle(type) {
  switch(type) {
    case 'review':
      return 'In Review';
    case 'finished':
      return 'Finished';
    default:
      return '';
  }
}

function getTagColor(type) {
  switch(type) {
    case 'review':
      return 'yellow';
    default:
      return 'white';
  }
}

function StatusTag(props) {
  const { type } = props;
  const title = getTagTitle(type);
  const color = getTagColor(type);

  return (
    <div  className={`status-tag ${color}`}>
      <span className="title">{title}</span>
    </div>
  )
}

export default StatusTag;