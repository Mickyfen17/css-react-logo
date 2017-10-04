import React, { Component } from 'react';
import glamorous from 'glamorous';
import Logo from './Logo';
import { css } from 'glamor';

const Scale = css.keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.1)' },
  '100%': { transform: 'scale(1)' },
});

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
  height: '570px',
  width: '600px',
  background: '#282c34',
  borderRadius: '50%',
  border: '10px solid #757575',
  animation: `${Scale} 5s infinite ease-out`,
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
