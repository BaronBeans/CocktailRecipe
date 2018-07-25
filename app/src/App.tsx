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
        <div id="#ingredients">
          <Ingredients />
        </div>
      </div>
    );
  }
}

export default App;
