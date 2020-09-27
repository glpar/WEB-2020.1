import React from 'react';
import './App.css';
import Arena from './components/Q1/Arena'
import World from './components/Q3/World'
import Arena4 from './components/Q4/Arena4'
import Hero from './components/Q4/Hero'
import Enemy from './components/Q4/Enemy'

function App() {
  return (
    <div className="App">
      <h1>Questão 1</h1>
        <Arena />
      <h1>Questão 2</h1>
        <Arena />
      <h1>Questão 3</h1>
        <World>
          <Arena />
          <Arena />
          <Arena />
        </World>
      <h1>Questão 4</h1>
        <Arena4 arena4 ='Arena Marineford ' >
          <Hero nome = 'Monkey D. Luffy' img src='/image/hero.jpg'/>
          <Enemy nome = 'Almirante Akainu' img src='/image/enemy.png'/>
        </Arena4>

      <h1>Exemplo</h1>
        <World>
        <Arena4 arena4 ='Arena Marineford '>
          <Hero nome = 'Monkey D. Luffy' img src='/image/hero.jpg'/>
          <Enemy nome = 'Almirante Akainu' img src='/image/enemy.png'/>
        </Arena4>
        <Arena4 arena4 ='Arena Marineford '>
          <Hero nome = 'Monkey D. Luffy' img src='/image/hero.jpg'/>
          <Enemy nome = 'Almirante Akainu' img src='/image/enemy.png'/>
        </Arena4>
        <Arena4 arena4 ='Arena Marineford '>
          <Hero nome = 'Monkey D. Luffy' img src='/image/hero.jpg'/>
          <Enemy nome = 'Almirante Akainu' img src='/image/enemy.png'/>
        </Arena4>
        </World>
        
    </div>
  );
}

export default App;
