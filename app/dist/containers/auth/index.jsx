/**
 * 記錄 token 與 帳戶資訊
 * @flow
 */
import React, { Component } from 'react';
import { STORE_KEY } from './constant';
import { Dispatch, Store } from '~/core/container';
import { fetchToken, fetchAccountInfo, keepToken } from './action';
import type { Props } from './type';

export class Auth extends Component<void, Props, void> {
  timer: number;
  props: Props;

  componentDidMount() {
    /* 拿token跟請求登入者資料 */
    if (process.env.NODE_ENV === 'development') {
      this.props.dispatch([fetchToken(), fetchAccountInfo()]);
    } else {
      const metas: any = document.getElementsByTagName('meta');
      const token: any = metas['csrf-token'].getAttribute('content');
      this.props.dispatch([keepToken(token), fetchAccountInfo()]);
    }
  }

  componentWillReceiveProps({ storeData }: Props) {
    if (storeData) {
      /* 登入後，五秒請求一次帳戶資料 */
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(_ => {
        this.props.dispatch(fetchAccountInfo());
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

export default Dispatch(Store(`${STORE_KEY}.auth`)(Auth));
