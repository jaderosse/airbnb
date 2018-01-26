import React, { Component } from 'react';
import Search from './Search';
import Experiences from './Experiences';
import Explore from './Explore';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="content">
          <Search />
          <Explore />
          <h1>Experiences</h1>
          <Experiences />
          <Experiences />
          <Experiences />
          <Experiences />
        </div>
      </div>
    );
  }
}

export default App;
