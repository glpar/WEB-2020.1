import React, { Component } from 'react'
import './App.css'
import Numero1 from './components/Numero1'
import Numero2 from './components/Numero2'
import Maior from './components/Maior'
import Multip from './components/Multip'
import Soma from './components/Soma'

export default class App extends Component {


  render() {
    return (
      <div className='container'>
        <div className='line'>
          <Numero1/>
          <Numero2/>
        </div>
        <div className='line'>
          <Multip/>
          <Soma/>
          <Maior/>
        </div>
      </div>
    )
  }
}