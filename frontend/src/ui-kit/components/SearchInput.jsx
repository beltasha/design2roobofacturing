import React from 'react';
import Icon from './Icon';
import { ICONS } from '../helpers/iconPaths';

import '../styles/searchInput.scss';

function SearchInput(props) {
  const { value, update } = props;
  return (
    <div className="search">
      <Icon className="search-icon" icon={ICONS.SEARCH} height="17"/>
      <input
        className={`search-input ${(value.length ? 'search-input-active' : '')}`}
        type="text" 
        value={value} 
        onChange={(e) => { update(e.target.value) }}
      />
      <Icon className="search-clear-icon" icon={ICONS.SEARCH_CLEAR} width="12"/>
    </div>
  )
}

export default SearchInput;