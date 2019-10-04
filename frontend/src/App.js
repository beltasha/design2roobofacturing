import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import AssemblyProsess from './assembly-process/AssembyProcess';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/assembly-prosess" component={AssemblyProsess}/>
        <Redirect to="/assembly-prosess" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
