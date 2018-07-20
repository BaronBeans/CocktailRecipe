import * as React from 'react';
import { Component } from 'react';
import './AppStyles.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
