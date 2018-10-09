import React, { Component } from 'react';
import './App.css';

import HeaderMenuComponent from './components/HeaderMenuComponent';
import MenuComponent from './components/MenuComponent';
import FooterComponent from './components/FooterComponent';

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
