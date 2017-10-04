import React, { Component } from 'react';
import Logo from './Logo';
import Wrapper from '../styles/Wrapper';
import Circle from '../styles/Circle';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Circle>
          <Logo />
        </Circle>
      </Wrapper>
    );
  }
}

export default App;
