import React, { Component } from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

const colorTransition = css.keyframes({
  '0%': { borderColor: '#2ca9dc' },
  '100%': { borderColor: '#61dafb' },
});

const CenterBall = glamorous.div({
  height: '72px',
  width: '80px',
  background: '#61dafb',
  borderRadius: '50%',
  borderBottom: '8px solid #2ca9dc',
  transform: 'none',
});

const HorzOval = glamorous.div({
  animation: `${colorTransition} 5s infinite`,
  position: 'absolute',
  width: '435px',
  height: '125px',
  borderRadius: '50%',
  border: 'solid 18px #61dafb',
});

const VertOval = glamorous(HorzOval)(props => ({
  width: '460px',
  height: '150px',
  transform: props.left ? 'rotate(55deg)' : 'rotate(-55deg)',
}));

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
