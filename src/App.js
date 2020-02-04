import React from 'react';
import './App.css';
import {
  TransitionGroup
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
          <Switch location={location}>
            <Route path="/convert/:f/:t" children={<Convert />} />
            <Route path="*" children={<div>
              <h3>
                No match for <code>{location.pathname}</code>
              </h3>
            </div>} />
          </Switch>          
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
      history.push("/convert/"+ value +"/" + t);
    } else {
      //setToVC(value);
      history.push("/convert/"+ f +"/" + value);
    }   
  }
  let { f, t } = useParams();

  return (
    <div>
      <input type="text" placeholder="Enter number"/>
      <select name="f" value={f} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="XRP">XRP</option>
      </select>
      <span>To</span>
      <select name="t" value={t} onChange={handleChange}>
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