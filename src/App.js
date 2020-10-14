import React, { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

// import './App.css';
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import OrderForm from './components/Dashboard/OrderForm/OrderForm';

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
          <PrivateRoute path = "/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path = "/orderform">
            <OrderForm></OrderForm>
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
