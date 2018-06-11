import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Intro extends PureComponent {
  render() {
    const { children } = this.props;
    return <article>{children}</article>;
  }
}
