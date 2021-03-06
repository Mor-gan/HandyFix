import Landingpage from './Pages/landingPage';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import './index.css';
import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
     return (
       <>
        <Router>
      <div >
        <Switch>
          <Route exact path="/">
            <Landingpage/>
          </Route>
          <Route path="/SignUp">
            <Signup />
          </Route>
        </Switch>
        <Route path="/Login">
            <Login />
          </Route>
      </div>
    </Router>
       </>
         
    );
 }
  export default App;