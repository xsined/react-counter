import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {onClickMin} from './components/onclick-minus';
import {onClickPlus} from './components/onclick-plus';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
    <div>
      <h2>Лічильник</h2>
      <h1>{count}</h1>
      <div class="button-container">
      <Button variant="outlined" color="inherit" onClick={() => onClickMin(count, setCount)}>- мінус</Button>
      <Button variant="outlined" color="inherit" onClick={() => onClickPlus(count, setCount)}>плюс +</Button>
      </div>
    </div>
    </div>
  );
}

export default App;
