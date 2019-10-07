import React, { useState, useEffect } from 'react';
import AbbreviationIcon from '../ui-kit/components/AbbreviationIcon';
import NumberTag from '../ui-kit/components/NumberTag';
import Slider from '../ui-kit/components/Slider';
import SearchInput from '../ui-kit/components/SearchInput';
import AssemblyProcessCard from './AssemblyProcessCard';
import api from './api';
import useInfiniteScroll from '../ui-kit/helpers/useInfiniteScroll';
import { REVIEW_STATUS, reviewStatusToTitle } from './helpers';
import { STATUSES, getTagTitle } from '../ui-kit/helpers/statusTag';
import Filter from '../ui-kit/components/Filter';

import _ from 'lodash';

import './assemblyProcess.scss';

const debouncedFetch = _.debounce((funcToBeCalledAfterDelay, params) => {
  funcToBeCalledAfterDelay(params);
}, 300);

const assemblyProcessFilterFields = {
  'assembly': {
    fieldTitle: 'Assembly',
    values: Object.keys(STATUSES),
    getValueTitle: getTagTitle,
  },
  'review': {
    fieldTitle: 'Review',
    values: Object.keys(REVIEW_STATUS),
    getValueTitle: reviewStatusToTitle,
  },
}

function AssemblyProsess() {
  const [isAscSort, setIsAscSort] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [assemblyProcesses, setAssemblyProcesses] = useState([]);
  const [filter, setFilter] = useState({assembly: null, review: null});
  const { isFetching, setIsFetching, setIsAllDataLoaded, page, setPage } = useInfiniteScroll(fetchMoreData);
   

  useEffect(() => {
    fetchMoreData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetData() {
    setAssemblyProcesses([]);
    setPage(0);
  }

  function updateSearch(search) {
    setSearchString(search);
    resetData();
    debouncedFetch(fetchMoreData, { search });
  }

  function updateFilter(filter) {
    setFilter(filter);
    resetData();
    fetchMoreData(filter);
  }

  function updateSort(isAscSort) {
    setIsAscSort(isAscSort);
    resetData();
    fetchMoreData({sort: isAscSort ? 'ASC' : 'DESC'});
  }

  function fetchMoreData(params = {}) {
    const fetchParams = {
      page,
      sort: isAscSort ? 'ASC' : 'DESC',
      size: 20,
      search: searchString,
      ...filter,
      ...params,
    }
    api.getAssemblyProsesses(fetchParams).then(({ data }) => {
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
      <header className="assembly-prosess-header">
        <AbbreviationIcon />
        <span className="title">Design2Robofacturing</span>
      </header>
      <main>
        <section className="assembly-prosess-filter">
          <Filter
            filter={filter} 
            fields={assemblyProcessFilterFields}
            update={(newFilter) => updateFilter(newFilter)}
          />
        </section>
        <section className="assembly-process-content">
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
                update = {() => { updateSort(!isAscSort) }}
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
            {!isFetching && !assemblyProcesses.length && 'No data found'}
          </div>
        </section>
      </main>
    </div>
  )
}

export default AssemblyProsess;