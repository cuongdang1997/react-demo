import React, { useState } from 'react';
import './App.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="convert/BTC/ETH" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <div className="App">
      <header className="App-header">      
        <h2>Convert virtual currency</h2>        
      </header>
      <div className="container">
        <TransitionGroup>
          {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
          <CSSTransition
            key={location.key}
            classNames="fade"
          >
            <Switch location={location}>
              <Route path="/convert/:f/:t" children={<Convert />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function Convert() {
  let history = useHistory();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'f'){
      //setFromVC(value);
      history.push("/convert/"+ value +"/" + toVC);
    } else {
      //setToVC(value);
      history.push("/convert/"+ fromVC +"/" + value);
    }   
  }
  let { f, t } = useParams();
  const [fromVC,setFromVC] = useState(f || "BTC");
  const [toVC,setToVC] = useState(t || "ETH");

  return (
    <div>
      <input type="text" placeholder="Enter number"/>
      <select name="f" value={fromVC} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="XRP">XRP</option>
      </select>
      <span>To</span>
      <select name="t" value={toVC} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="XRP">XRP</option>
      </select>
      <div className="result">
        <button>convert</button>
        <input disabled type="text" placeholder="result"/>
      </div>
    </div>
  );
}