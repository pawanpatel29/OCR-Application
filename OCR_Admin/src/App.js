import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux'
import { createStore, applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import thunkMiddleware from 'redux-thunk'
import Home from './components/Home.component'
import Results from './components/Results.component';
import SideBar from "./components/sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tcslogo from '../src/TCS logo.png'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,  
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunkMiddleware)
  composeEnhancer(applyMiddleware(thunkMiddleware))
  
)

function App() {
  const [state, setState] = useState({ isOpen: false })
  return (
  <Provider store = {store}>
  <Router>    
    <div className="App">
    <div><SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  </div>    
      <div><nav className="navbar navbar-expand-lg navbar-light top-bar" style={{'background-color':'#367bbc'}}>      
        <div className="container">        
          <Link className="navbar-brand" to={"/"} style={{'color':'#ffffff'}}>Admin</Link>
          {/* <Link to={"/Results"}> Results </Link> */}
        </div>
           {/* <div className="container float" onClick={() =>
                  setState({ isOpen: !state.isOpen })
                }>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg>
            <sup>1</sup>
           </div> */}
            {/* <Link className="navbar-brand" to={"/"}>Result</Link> */}
           <Login/>
           
           
      </nav></div>
        
      
      
                                {/* {state.isOpen ? 
                            <div className="parent-div">
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            Attend the <strong>Transaction Id: 1234567</strong> 
                          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div> 
                            </div> : '' } */}
     {/* <div className="auth-wrapper">
      <div className="auth-inner"></div> */}
        
          <Switch>
            
            <Route exact path='/' component={Home} />
            <Route path="/ocr_admin" component={Signup} />
            <Route component={Results}/>
            
          </Switch>
                     
        </div> 
                   
    </Router>
    </Provider>
  );
}

export default App;
