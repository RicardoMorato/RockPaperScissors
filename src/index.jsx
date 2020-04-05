import React from 'react';
import ReactDOM from 'react-dom';
import './global/refs.scss';
import { Header, ChooseElement } from './Components/index';

function App() {
  return (
    <>
      <Header />
      <ChooseElement />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
