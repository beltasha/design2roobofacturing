import React from 'react';

import '../styles/statusTag.scss';

function getTagTitle(type) {
  switch(type) {
    case 'IN_REVIEW':
      return 'In Review';
    case 'REVIEW_FINISHED':
      return 'Finished';
    default:
      return '';
  }
}

function getTagColor(type) {
  switch(type) {
    case 'IN_REVIEW':
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
      <span className="status-tag-title">{title}</span>
    </div>
  )
}

export default StatusTag;