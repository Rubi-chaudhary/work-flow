import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">         */}
      <header className="Common-header"> FLOWAPP
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
        <Login></Login>
      
    </div>
  );
}

export default App;
