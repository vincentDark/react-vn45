import React, { Component } from 'react';
import { withStyle } from '~/core/container';

class InputNum extends Component {
  state = {};
  render() {
    let { setRef, stepNext } = this.props;
    return (
      <div styleName="col-xs-number">
        <h4>號碼</h4>
        <input
          type="text"
          styleName="form-control text-center"
          ref={setRef}
          onKeyUp={e => {
            e.target.value = e.target.value.replace(/\D/g, '');
            while (e.target.value.length > 2) {
              e.target.value = (e.target.value / 10) >>> 0;
            }
            if (
              e.target.value.length == 2 ||
              (e.target.value.trim() && e.key === 'Enter')
            ) {
              stepNext();
            }
          }}
        />
      </div>
    );
  }
}

export default withStyle()(InputNum);
