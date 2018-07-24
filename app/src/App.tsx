import * as React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Cocktails from './components/Cocktails';
import Ingredients from './components/Ingredients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Cocktails />
        <Ingredients />
      </div>
    );
  }
}

export default App;
