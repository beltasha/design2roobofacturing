import React from 'react';
import Icon from '../ui-kit/components/Icon';
import ViewProcessButton from '../ui-kit/components/ViewProcessButton';
import StatusTag from '../ui-kit/components/StatusTag';
import { ICONS } from '../ui-kit/helpers/iconPaths';
import { reviewStatusToTitle, reviewStatusToClass, getTimeInHumanFormat } from './helpers';

import './assemblyProcess.scss';

function AssemblyProcessCard(props) {
  const { 
    title, 
    reviewStatus, 
    updated, 
    assemblyStatus, 
    img,
    _id: id,
    remove,
   } = props;
  return (
    <div className="assembly-process-card">
      <StatusTag className='card-status-tag' type={assemblyStatus} />
      <img src={img} alt={title}/>
      <div className="card-content">
        <div className="card-description">
          <span className="title">{title}</span>
          <div className="row">
            <div className="label">
              Review Status
            </div>
            <div className="border-content"></div>
            <div className={`value ${reviewStatusToClass(reviewStatus)}`} >
              {reviewStatusToTitle(reviewStatus)}
            </div>
          </div>
          <div className="row">
            <div className="label">Last Updates</div>
            <div className="border-content"></div>
            <div className="value">{getTimeInHumanFormat(updated)}</div>
          </div>
        </div>

        <div className="card-control-buttons">
          <div className="icons">
            <Icon className="icon" icon={ICONS.EDIT} color="#7F8487" fillRule="evenodd" width="24" height="24"/>
            <Icon 
              className="icon" 
              icon={ICONS.REMOVE} 
              fillRule="evenodd" 
              width="24"
              height="24" 
              viewBox="-4 -4 24 24"
              clickOnIcon={() => remove(id)}
            />
          </div>
          <ViewProcessButton />
        </div>
      </div>
    </div>
      
  )
}

export default AssemblyProcessCard;