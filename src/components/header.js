import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
        <img src="https://static.wixstatic.com/media/e479fd_09dcc124c92c4910bcb6fa1e536fc721~mv2.png/v1/fill/w_188,h_188,al_c,lg_1/e479fd_09dcc124c92c4910bcb6fa1e536fc721~mv2.png" />
        </div>
        <div className='textheader'>
        <h1 className='textheader__title'>LegalHub</h1>
        <p className='textheader__subtitle'>Your platform of judicial resources</p>
        </div>
      </div>
      
    );
  }
}
export default Header;