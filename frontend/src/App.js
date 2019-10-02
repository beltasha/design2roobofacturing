import React, { useState }  from 'react';
import SearchInput from './ui-kit/components/SearchInput';
import StatusTag from './ui-kit/components/StatusTag';
import ViewProcessButton from './ui-kit/components/ViewProcessButton';
import NumberTag from './ui-kit/components/NumberTag';
import AbbreviationIcon from './ui-kit/components/AbbreviationIcon';
import Slider from './ui-kit/components/Slider';

import './App.scss';

function App() {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <div>
        <SearchInput value={value} update={(value) => setValue(value)}/>
        <StatusTag type='review' />
        <StatusTag type='finished' />
        <ViewProcessButton />
        <NumberTag value="220" />
        <AbbreviationIcon />
        <Slider isChecked={isChecked} update={() => setIsChecked(!isChecked)}/>
      </div>
    </div>
  );
}

export default App;
