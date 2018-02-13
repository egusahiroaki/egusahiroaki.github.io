import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import CardList from './components/CardList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome</h1>
        </header>
        {/* <Header /> */}
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default App;
