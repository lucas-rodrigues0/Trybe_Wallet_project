import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h2 className="header-style">Trybewallet - project</h2>
        <Switch>
          <Redirect exact from="/Trybe_Wallet_project" to="/Trybe_Wallet_project/login" />
          <Route path="/Trybe_Wallet_project/login" component={ Login } />
          <Route path="/Trybe_Wallet_project/carteira" component={ Wallet } />
        </Switch>
      </main>
    );
  }
}
