import React from 'react';
import './App.css';
import FirstDiv from './Components/FirstDiv';
import NavBar from './Components/NavBar';
import SecondDiv from './Components/SecondDiv';
import ThirdDiv from './Components/ThirdDiv';

function App() {
  return (
    <div>
      <NavBar />
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
    </div>
  );
}

export default App;
