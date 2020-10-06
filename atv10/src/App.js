import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>REDUX CALC</h1>
        <div className='line'>
          <Card title='Número 1' tyellow turquoise>
            <h1>sdfsfdsf</h1>
            <strong> nmsads</strong>
          </Card>
          <Card title='Número 2' tturquoise yellow >
            <h1>sdfsfdsf</h1>
            <strong> nmsads</strong>
          </Card>
        </div>
        <div className='line'>
          <Card title='zzzz' tred green>
            <h1>sdfsfdsf</h1>
            <strong> nmsads</strong>
          </Card>
          <Card title='aaaaa' tdark light>
            <h1>sdfsfdsf</h1>
            <strong> nmsads</strong>
          </Card>
          <Card title='bbbbb' tgreen red>
            <h1>sdfsfdsf</h1>
            <strong> nmsads</strong>
          </Card>
        </div>
      </div>
    )
  }
}