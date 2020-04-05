import React from 'react';
import ReactDOM from 'react-dom';
import './global/refs.scss';
import { Header } from './Components/index';

function App() {
  return (
    <Header />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
