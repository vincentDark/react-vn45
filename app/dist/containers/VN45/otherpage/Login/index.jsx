import React, { Component } from 'react';
import { withStyle, compose, withDispatch, withStore } from '~/core/container';
import { getToken, loginAction } from '../../action';
import loginTheme from '@/css_other/style-new-login.scss';

import Logo from '@/img/NV45-LOGO-300.png';
import icon_03 from '@/img/icon_03.png';
import icon_04 from '@/img/icon_04.png';
import Mega from '@/img/Mega-645_Full-Color_Cut.png';

import ChooseLang from './ChooseLang';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
  state = {
    show: false,
    open: false
  };

  seePWD = () => {
    this.setState(preState => ({ show: !preState.show }));
  };

  enter = () => {
    let MEM_ID = this.refs.name.value;
    let password = this.refs.password.value;
    let _token = window.csrf;
    let payload = { MEM_ID, password, _token };

    this.props.dispatch(loginAction(JSON.stringify(payload)));
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    window.csrf = this.props.storeData.token;
    console.log('this.props :');
    console.log(this.props);
    console.log('window.csrf :');
    console.log(window.csrf);
    const actions = [
      <FlatButton label="確認" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div id="login-page">
        <form id="uLogin" name="kk" method="POST" action="">
          <input type="hidden" name="a" value="login" />
          <div styleName="wrap">
            <div styleName="new-logo">
              <img src={Logo} />
            </div>
            <div styleName="logingroup member logingroup_zh-TW">
              <div styleName="textgroup">
                <ChooseLang />
                <div styleName="user_account">
                  <img src={icon_03} alt="" />
                  <input
                    type="text"
                    placeholder="請輸入帳號"
                    ref="name"
                    onKeyUp={e => {
                      e.target.value = e.target.value.replace(/[\W]/g, '');
                    }}
                  />
                </div>
                <div styleName="user_password">
                  <img src={icon_04} alt="" />
                  <input
                    type={this.state.show ? 'text' : 'password'}
                    placeholder="請輸入密碼"
                    ref="password"
                    onKeyUp={e => {
                      e.target.value = e.target.value.replace(/[\W]/g, '');
                      if (e.target.value.trim() && e.key === 'Enter') {
                        this.enter();
                      }
                    }}
                  />
                </div>
                <div styleName="user_checkbox">
                  <input type="checkbox" id="showPwd" onChange={this.seePWD} />
                  <label htmlFor="showPwd">顯示密碼</label>
                </div>
              </div>
              <div styleName="btn1" onClick={this.enter}>
                會員登入
              </div>
            </div>
            <div styleName="textgroup2">
              <span styleName="btnLink" style={{ borderLeftWidth: 0 }}>
                <span>下載</span>&nbsp;
                <a
                  href="https://www.google.com/chrome/browser/desktop/index.html"
                  target="_blank">
                  Google Chrome
                </a>
              </span>
              <span styleName="btnLink">
                <span>下載</span>&nbsp;
                <a
                  href="http://download.teamviewer.com/download/TeamViewerQS_zhtw.exe"
                  id="teamviewer">
                  遠端程式
                </a>
              </span>
              <span styleName="btnLink" style={{ borderReftWidth: 0 }}>
                <span>下載</span>&nbsp;
                <a href="/DeleteCookie.php" target="_blank">
                  清除緩存
                </a>
              </span>
            </div>
          </div>
        </form>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          actionsContainerwithStyle={{ textAlign: 'center' }}
          contentwithStyle={{ maxWidth: 500 }}>
          請輸入帳號密碼!
        </Dialog>
        <div styleName="mega645">
          <img src={Mega} alt="" />
        </div>
      </div>
    );
  }
}

export default compose(withDispatch, withStore('member'))(
  withStyle(loginTheme)(Login)
);
