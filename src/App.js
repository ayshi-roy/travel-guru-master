import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './component/Booking/Booking';
import Hotel from './component/Hotel/Hotel';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';




export const UserContext = createContext();
 
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>      
      <Router>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking/:placeName">
              <Booking/>
            </Route>
            <PrivateRoute path="/Hotel/:placeName">
              <Hotel/>
            </PrivateRoute>
            <Route path="/Login">
              <Login/>
            </Route>
            <Route extend path="/">
              <Home />
            </Route>
          </Switch>      
      </Router>
    </UserContext.Provider>
  );
}

export default App;
