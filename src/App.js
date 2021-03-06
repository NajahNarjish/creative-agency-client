import React, { useState, createContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import AllServiceList from './components/Dashboard/AllServiceList/AllServiceList';
import AdminAddService from './components/Dashboard/AdminAddService/AdminAddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <Router>
        <Switch>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <PrivateRoute path = "/order">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path = "/servicelist">
            <ServiceList></ServiceList>
          </Route>
          <Route  path = "/review">
            <Review></Review>
          </Route>
          <Route  path = "/allServiceList">
            <AllServiceList></AllServiceList>
          </Route>
          <Route  path = "/adminAddService">
            <AdminAddService></AdminAddService>
          </Route>
          <Route  path = "/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>   
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
