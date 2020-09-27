import React from 'react';

import './App.css';
import Q1 from './components/Q1'
import Q2 from './components/Q2'
import Q3 from './components/Q3'

function App() {
  return (
    <div className="App">
     <Q1/>
     <Q2/>
     <Q3 nome = 'Gabriel' curso= 'Engenharia de Software' cidade='Aracaju-SE'/>
    </div>
  );
}

export default App;
