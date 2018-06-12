import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Auth from './auth';

export default class Intro extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <article>
        {children}
        <Auth />
      </article>
    );
  }
}
