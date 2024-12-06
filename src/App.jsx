import './App.css';
import Navbar from './Navbar';
import React, { useState } from "react";
import coonstagram from './coonstagram.png';

import Jumbotron from './Jumbotron';
import HomeFeed from './HomeFeed';

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
