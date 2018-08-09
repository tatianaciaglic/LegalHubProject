import React, { Component } from 'react';
import Header from './Header';



import Navbar from './navbar';
import ButtonsContent from './buttonscontent';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ButtonsContent />
        
        <Navbar />
      </div>
    );
  }
}
