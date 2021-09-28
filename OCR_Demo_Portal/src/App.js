import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import tcslogo from '../src/TCS logo.png'


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" style={{'text-align': 'center'}} to={"/sign-in"}> Trigger Application</Link>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/ocr_home" component={Login} />
          </Switch>
        </div>
        <img src={tcslogo} className="App-logo2" />
      </div>
      
    </div></Router>
  );
}

export default App;
