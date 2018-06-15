import React, { PureComponent } from 'react';
import { withStyle, compose, withDispatch } from '~/core/container';
import { withRouter } from 'react-router-dom';

import { chooseBall } from '../../action';

class BallBox extends PureComponent {
  chooseBall = (num, type) => () => {
    this.props.dispatch(chooseBall(num, num, 1, type));
  };

  render() {
    let { num, check } = this.props;
    let { type } = this.props.match.params;
    return (
      <div styleName="ballbox" onClick={this.chooseBall(num, type)}>
        <input
          styleName="getout"
          type="checkbox"
          id={`ball${num}`}
          checked={check}
          readOnly
        />
        <label styleName="ballini">{num}</label>
      </div>
    );
  }
}

export default compose(withRouter, withDispatch, withStyle())(BallBox);
