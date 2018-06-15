import React, { Component } from 'react';
import { withStyle, compose, withDispatch } from '~/core/container';

import { randomChoose } from '../../action';

class RandomFrame extends Component {
  state = {
    inputNum: ''
  };

  randomChoose = () => {
    let amount = +this.state.inputNum;
    if (amount === 0) return false;
    this.props.dispatch(randomChoose(amount));
  };

  handleChange = e => {
    let checkAmount = +e.target.value.replace(/\D/g, '');
    if (checkAmount == 0) {
      checkAmount = '';
    } else if (checkAmount > 45) {
      checkAmount = (checkAmount / 10) >>> 0;
    }
    this.setState({
      inputNum: checkAmount
    });
  };

  render() {
    return (
      <div styleName="ball-item">
        <input
          type="text"
          styleName="form-control text-center"
          placeholder="請輸入數量"
          value={this.state.inputNum}
          onChange={this.handleChange}
        />
        <a
          styleName="btn-add btn-block"
          style={{ margin: 0 }}
          onClick={this.randomChoose}>
          自動選號
        </a>
      </div>
    );
  }
}

export default compose(withDispatch)(withStyle()(RandomFrame));
