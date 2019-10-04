import React, { useState, useEffect } from 'react';
import AbbreviationIcon from '../ui-kit/components/AbbreviationIcon';
import NumberTag from '../ui-kit/components/NumberTag';
import Slider from '../ui-kit/components/Slider';
import SearchInput from '../ui-kit/components/SearchInput';
import AssemblyProcessCard from './AssemblyProcessCard';
import api from './api';

import './assemblyProcess.scss';

function AssemblyProsess() {
  const [isAscSort, setIsAscSort] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [assemblyProcesses, setAssemblyProcesses] = useState([]);

  function handleScroll() {
    const innerHeight = window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;
    
    if (documentHeight - innerHeight > 50) return;
    console.log('Fetch more list items!');
  }

  useEffect(() => {
    api.getAssemblyProsesses().then(({ data }) => {
      setAssemblyProcesses(data.slice(0, 30));
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function removeCardFromList(id) {
    const newAssemblyProcesses = assemblyProcesses.filter(card => card._id !== id);
    setAssemblyProcesses(newAssemblyProcesses);
  }

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
          <div className="content-body">
            {assemblyProcesses.map(assemblyProcess => 
              <AssemblyProcessCard 
                {...assemblyProcess}
                key={assemblyProcess._id}
                remove={(id) => removeCardFromList(id)}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default AssemblyProsess;