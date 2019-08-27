import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment } from './actions/counter';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
