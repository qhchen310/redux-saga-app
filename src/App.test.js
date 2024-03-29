import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
