import React, { useState } from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';

function App() {
  const [idx,setIdx]=useState(3);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  }

  return (
    <div>
      <div>
        <label>
        <input type='radio' name='comp' defaultValue='1' onClick={selectComponent}/>OneApp
        </label>
        <label>
        <input type='radio' name='comp' defaultValue='2' onClick={selectComponent}/>TwoApp
        </label>
        <label>
        <input type='radio' name='comp' defaultValue='3' onClick={selectComponent} defaultChecked/>ThreeApp
        </label>
        <label>
        <input type='radio' name='comp' defaultValue='4' onClick={selectComponent}/>FourApp
        </label>
        <hr></hr>
        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:<FourApp/>}
    </div>
  </div>
  );
}

export default App;
