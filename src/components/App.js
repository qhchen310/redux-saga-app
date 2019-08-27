import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App
