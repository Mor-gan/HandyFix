import Landingpage from './Pages/landingPage';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/homepage';
import Navbar from './assets/navbar';
import './index.css';
import React from 'react';
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
        <Route path="/Login">
            <Login />
          </Route>
          <Route path="/homepage">
            <Dashboard />
          </Route>
          <Route path="./assets/navbar.jsx">
            <Navbar />
          </Route>
          </Switch>
      </div>
    </Router>
       </>
         
    );
 }
  export default App;