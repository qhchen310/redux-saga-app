import React, { Component } from 'react';
import './Home.css';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { increment } from '../actions/counter';

class Home extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
            </p>
        <p className='App-intro'>
          {this.props.counter}
        </p>
        <p className='App-increment' onClick={this.props.incrementFunc} >click</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            </a>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementFunc: () => dispatch(increment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)