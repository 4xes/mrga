import React, { Component } from 'react';
import ProcessForm from './ProcessForm.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Oilstone</h1>
        </header>
        <ProcessForm/>
      </div>
    );
  }
}

export default App;
