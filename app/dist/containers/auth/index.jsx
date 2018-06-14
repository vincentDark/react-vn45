/**
 * 記錄 token 與 帳戶資訊
 * @flow
 */
import React, { Component } from 'react';
import { withDispatch, withStore } from '~/core/container';
import { getToken, getInfo } from './action';

export class Auth extends Component<void, Props, void> {
  timer: number;
  props: Props;

  componentDidMount() {
    /* 拿token跟請求登入者資料 */
    this.props.dispatch(getToken());
    this.props.dispatch(getInfo());
  }

  componentWillReceiveProps(storeData) {
    if (storeData) {
      /* 登入後，五秒請求一次帳戶資料 */
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(_ => {
        // this.props.dispatch(getInfo());
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

export default withDispatch(Auth);
