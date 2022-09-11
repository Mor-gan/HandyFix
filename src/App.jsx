import Landingpage from './Pages/landingPage';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/homepage';
import Service from './Pages/services';
import Description from "./Pages/description"
import Location from "./Pages/location"
import Payment from "./Pages/payment"
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
          <Route path="/services">
            <Service />
          </Route>
          <Route path="/description">
            <Description/>
          </Route>
          <Route path="/location">
            <Location/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          </Switch>
      </div>
    </Router>
       </>
         
    );
 }
  export default App;