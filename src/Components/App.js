import React, { Component } from 'react';
import glamorous from 'glamorous';
import Logo from './Logo';

const Wrapper = glamorous.section({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#20232a',
});

const Circle = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '600px',
  width: '600px',
  background: '#282c34',
  borderRadius: '50%',
  border: '10px solid #757575',
});

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
