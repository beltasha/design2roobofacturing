import React from 'react';

import '../styles/filter.scss';

function Filter(props) {
  const { update, fields, filter } = props;

  function updateFilter(key, value) {
    const newFilter = {
      ...filter,
      [key]: value,
    };
    update(newFilter);
  }

  return (
    <div className="filter">
      <h3 className="filter-title">Filter</h3>
      <div className="filter-type-container">
        {Object.keys(fields).map((fieldKey) =>
          <div key={fieldKey}>
            <h4 className="filter-subtitle">{fields[fieldKey].fieldTitle}</h4>
            <div 
              className={`filter-value ${(!filter[fieldKey] ? 'selected': '')}`}
              onClick={() => updateFilter(fieldKey, null)}
            >
              Any
            </div>
            {fields[fieldKey].values.map(valueKey => 
              <div
                key={valueKey}
                className={`filter-value ${(filter[fieldKey] === valueKey ? 'selected': '')}`}
                onClick={() =>  updateFilter(fieldKey, valueKey)}
              >
                {fields[fieldKey].getValueTitle(valueKey)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
      
  )
}

export default Filter;