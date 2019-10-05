import React, { useState, useEffect } from 'react';
import AbbreviationIcon from '../ui-kit/components/AbbreviationIcon';
import NumberTag from '../ui-kit/components/NumberTag';
import Slider from '../ui-kit/components/Slider';
import SearchInput from '../ui-kit/components/SearchInput';
import AssemblyProcessCard from './AssemblyProcessCard';
import api from './api';
import useInfiniteScroll from '../ui-kit/helpers/useInfiniteScroll';
import _ from 'lodash';

import './assemblyProcess.scss';

const debouncedFetch = _.debounce((funcToBeCalledAfterDelay, params) => {
  funcToBeCalledAfterDelay(params);
}, 300);

function AssemblyProsess() {
  const [isAscSort, setIsAscSort] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [assemblyProcesses, setAssemblyProcesses] = useState([]);
  const { isFetching, setIsFetching, setIsAllDataLoaded, setPage } = useInfiniteScroll(fetchMoreData);
  
  useEffect(() => {
    fetchMoreData();
  }, []);

  function updateSearch(search) {
    setSearchString(search);
    setAssemblyProcesses([]);
    setPage(0);
    debouncedFetch(fetchMoreData, { search });
  }

  function fetchMoreData({page=0, size=20, search=searchString} = {}) {
    api.getAssemblyProsesses({page, size, search}).then(({ data }) => {
      setAssemblyProcesses(prevData => [...prevData, ...data]);
      if (!data.length) {
        setIsAllDataLoaded(true);
      }
      setIsFetching(false);
    });
  }

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
                update = {(newValue) => updateSearch(newValue)}
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
            {isFetching && 'Fetching more list items...'}
          </div>
        </section>
      </main>
    </div>
  )
}

export default AssemblyProsess;