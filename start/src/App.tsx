import React from 'react';
import logo from './logo.svg';
import './App.css';
import { projectName } from './modules/store.module';

function App() {
const { state, setState } = projectName()

  return (
    <div className="App">
      <div className="inner">
        <span>{state}</span>
        <button onClick={()=>{setState(5)}}>눌러요</button>
      </div>
    </div>
  );
}

export default App;
