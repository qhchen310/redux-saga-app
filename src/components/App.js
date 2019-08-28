import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import Sign from '../components/Sign';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path="/" component={Home} />
        <Route path="/Sign" component={Sign} />
      </div>
    );
  }
}

export default App
