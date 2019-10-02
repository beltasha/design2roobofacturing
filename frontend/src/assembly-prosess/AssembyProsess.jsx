import React, { useState, useEffect } from 'react';
// import Icon from '../ui-kit/components/Icon';
// import { ICONS } from '../ui-kit/helpers/iconPaths';
import AbbreviationIcon from '../ui-kit/components/AbbreviationIcon';
import NumberTag from '../ui-kit/components/NumberTag';
import Slider from '../ui-kit/components/Slider';
import SearchInput from '../ui-kit/components/SearchInput';
import api from './api';

import './assemblyProsess.scss';

function AssemblyProsess() {
  const [isAscSort, setIsAscSort] = useState(false);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    api.getAssemblyProsesses().then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="assembly-prosess">
      <header className="header">
        <AbbreviationIcon />
        <span className="title">Design2Robofacturing</span>
      </header>
      <main>
        <section className="filter">Фильтр</section>
        <section className="content">
          <header className="content-header">
            <div className="content-header-left">
              <span className="content-header-title">Assembly Prosesses</span>
              <NumberTag value={220} />
            </div>
            <div className="content-header-right">
              <span className="content-header-slider-title">Show</span>
              <Slider
                className="content-header-slider"
                leftText="Latest first" 
                rightText="Old first" 
                isChecked={isAscSort}
                update = {() => { setIsAscSort(!isAscSort) }}
              />
              <SearchInput
                value={searchString} 
                update = {(newValue) => setSearchString(newValue)}
              />
            </div>
          </header>
        </section>
      </main>
    </div>
  )
}

export default AssemblyProsess;