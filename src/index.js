import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../src/components/HomePage';
// import '../src/styles/base.scss';

const App = () => (
  <div>
    <HomePage />
  </div>
);

const main = document.getElementById('main');

ReactDOM.render(<App />, main);

console.log('app is running');