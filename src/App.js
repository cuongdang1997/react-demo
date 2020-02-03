import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <h2>Convert virtual currency</h2>        
      </header>
      <div className="container">
        <input type="text" placeholder="Enter number"/>
        <select>
          <option value="volvo">BTC</option>
          <option value="saab">ETH</option>
          <option value="mercedes">XRP</option>
        </select>
        <span>To</span>
        <select>
          <option value="volvo">BTC</option>
          <option value="saab">ETH</option>
          <option value="mercedes">XRP</option>
        </select>
      </div>
    </div>
  );
}

export default App;
