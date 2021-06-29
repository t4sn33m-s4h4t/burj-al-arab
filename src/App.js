import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/login/login.js';
import { createContext, useState } from 'react';
import Books from './component/books/books'
import Header from './component/header/header';
import PrivetRoute from './component/privetroute/privetroute';


export const UserContext = createContext([])
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>name: {loggedInUser.name}</p>
    <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route path='/login'>
        <Login></Login>
      </Route>
      <PrivetRoute path='/books'>
        <Books></Books>
      </PrivetRoute>
    </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
