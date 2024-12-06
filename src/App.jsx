import './App.css';
import Navbar from './Navbar';
import React, { useState } from "react";

import Jumbotron from './Jumbotron';


function App() {
  
  return (
    <div className="App ">
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <h1 className='p-3'> Hello World! </h1>
        <button className='bg-slate-200 p-1' onClick={ () => toggleColor(color === 1?0:1)}>
        Click
        </button>
    </div>
  );
}

export default App;
