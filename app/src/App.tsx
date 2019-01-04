import * as React from 'react';
import { Component } from 'react';

import './stylesheets/components/_all.css'

import Header from './components/Header';
import Cocktails from './components/Cocktails';
import Ingredients from './components/Ingredients';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div id="#cocktails">
          <Cocktails />
        </div>
        <footer className="footer text-center fixed-bottom">
          <p>Application created by <a href="https://github.com/BaronBeans" target="_blank">Sean Barnard</a> as a training exercise for <a href="https://neworbit.co.uk/" target="_blank">New Orbit Ltd.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
