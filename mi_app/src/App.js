import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({id,children}) {
  return (
    <div className="App">
      <header className="App-header" >
        {children}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>some shit</code> {id} and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React or no learn
        </a>
      </header>
    </div>
  );
}

export default App;
