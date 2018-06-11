import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const TotalBet = () => {
  return (
    <div styleName="container">
      <div styleName="col-xs-7">
        <form styleName="form-horizontal" id="gateway">
          <div styleName="form-group">
            <label styleName="col-sm-4 control-label">客戶名稱</label>
            <div styleName="col-sm-8">
              <p styleName="form-control-static">kirin(kirin)</p>
            </div>
          </div>
          <div styleName="form-group">
            <label styleName="col-sm-4 control-label">聯絡電話</label>
            <div styleName="col-sm-8">
              <input type="text" styleName="form-control" name="tel" />
            </div>
          </div>
          <div styleName="form-group">
            <label styleName="col-sm-4 control-label">傳真號碼</label>
            <div styleName="col-sm-8">
              <input type="text" styleName="form-control" name="fax" />
            </div>
          </div>
          <div styleName="form-group">
            <label styleName="col-sm-4 control-label">Email</label>
            <div styleName="col-sm-8">
              <input type="email" styleName="form-control" name="email" />
            </div>
          </div>
          <div styleName="form-group">
            <label styleName="col-sm-4 control-label">聯絡事項</label>
            <div styleName="col-sm-8">
              <textarea styleName="form-control" name="message" rows="6" />
            </div>
          </div>
          <input type="hidden" name="action" value="mw" />
          <div styleName="form-group">
            <div styleName="col-sm-12">
              <button type="button" styleName="btn btn-default pull-right">
                確定
              </button>
              <button type="reset" styleName="btn btn-default pull-right">
                重填
              </button>
            </div>
          </div>
        </form>
      </div>
      <div styleName="content-holder" style={{ clear: 'both', margin: 15 }}>
        <table style={{ backgroundColor: '#fff' }}>
          <thead>
            <tr>
              <td styleName="main-title">聯絡電話</td>
              <td styleName="main-title">傳真號碼</td>
              <td styleName="main-title">電郵信箱</td>
              <td styleName="main-title">聯絡事項</td>
              <td styleName="main-title">回復事項</td>
            </tr>
          </thead>
          <tbody styleName="text-center">
            <tr>
              <td colSpan="5">沒有資料</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withStyle()(TotalBet);
