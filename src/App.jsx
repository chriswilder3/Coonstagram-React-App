import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from "react";


import Jumbotron from './components/Jumbotron';
import HomeFeed from './components/HomeFeed';

function App() {
  
  return (
    <div className="App ">
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <HomeFeed></HomeFeed>
        
    </div>
  );
}

export default App;
