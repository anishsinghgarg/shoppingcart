import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderMenuComponent from './HeaderMenuComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenuComponent />
        <hr />
        <MenuComponent />
        <hr />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
