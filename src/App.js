import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderMenuComponent from './HeaderMenuComponent';
import MenuComponent from './MenuComponent';
import SerchButtonComponent from './SerchButtonComponent';
import AddNewButtonComponent from './AddNewButtonComponent';
import ClientDataComponent from './ClientDataComponent';
import FooterComponent from './FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenuComponent />
        <hr />
        <MenuComponent />
        <hr />
        <div class="right floated left aligned six wide column">
          <AddNewButtonComponent />
          <SerchButtonComponent />
        </div>
        <ClientDataComponent />
        <hr />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
