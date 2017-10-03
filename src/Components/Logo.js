import React, { Component } from 'react';
import glamorous from 'glamorous';

const CenterBall = glamorous.div({
  height: '72px',
  width: '80px',
  background: '#61dafb',
  borderRadius: '50%',
  borderBottom: '8px solid #2ca9dc',
});

class Logo extends Component {
  render() {
    return <CenterBall />;
  }
}

export default Logo;
