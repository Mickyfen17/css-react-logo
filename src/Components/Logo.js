import React, { Component } from 'react';
import CenterBall from '../styles/CenterBall';
import { HorzOval, VertOval } from '../styles/Ovals';

class Logo extends Component {
  render() {
    return [
      <CenterBall key={0} />,
      <HorzOval key={1} />,
      <VertOval key={2} left />,
      <VertOval key={3} right />,
    ];
  }
}

export default Logo;
