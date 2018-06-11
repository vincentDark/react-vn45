import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const BetOrder = () => {
  return (
    <div styleName="container">
      <div styleName="col-xs-12">
        <ul styleName="nav-submenu">
          <li>
            <a styleName="btn btn-change btn-tw39 active">Mega 6/45</a>
          </li>
        </ul>
      </div>
      <div styleName="col-xs-12">
        <div styleName="content-holder">
          <table styleName="report-order">
            <thead>
              <tr>
                <td styleName="main-title" style={{ width: 50 }}>
                  順序
                </td>
                <td styleName="main-title">玩法</td>
                <td styleName="main-title">內容</td>
                <td styleName="main-title" style={{ width: 50 }}>
                  賠率
                </td>
                <td styleName="main-title" style={{ width: 50 }}>
                  本金
                </td>
                <td styleName="main-title" style={{ width: 70 }}>
                  每碰金額
                </td>
                <td styleName="main-title" style={{ width: 50 }}>
                  碰數
                </td>
                <td styleName="main-title" style={{ width: 70 }}>
                  下注金額
                </td>
                <td styleName="main-title" style={{ width: 70 }}>
                  條水漲跌
                </td>
                <td styleName="main-title" style={{ width: 70 }}>
                  退水金額
                </td>
                <td styleName="main-title" style={{ width: 50 }}>
                  小記
                </td>
                <td styleName="main-title" style={{ width: 50 }}>
                  功能
                </td>
              </tr>
            </thead>
            <tbody>
              <tr styleName="order-no">
                <td colSpan={12}>
                  單號：V197 - 000<a
                    style={{ marginRight: '3ex' }}
                    styleName="pull-right">
                    列印
                  </a>
                </td>
              </tr>
              <tr style={{ backgroundColor: '#fff' }}>
                <td>1</td>
                <td>
                  <b>3星</b>
                  <br />連碰
                </td>
                <td styleName="text-left">
                  32, 33, 34, 35<br />
                  <span style={{ color: 'red' }}>
                    退水大盤：32(1.00)<br />
                    退水大盤：34(1.00)
                  </span>
                </td>
                <td>500.00</td>
                <td>78.00</td>
                <td>11.00</td>
                <td>4</td>
                <td styleName="color">44.00</td>
                <td styleName="color">-0.44</td>
                <td style={{ display: 'none', position: 'absolute' }}>
                  2018-03-20 14:19:47
                </td>
                <td styleName="color">9.24</td>
                <td styleName="color">34.76</td>
                <td styleName="recepit" style={{ fontSize: 12 }}>
                  2018-03-20 14:19:47
                  <a
                    styleName="btn btn-default btn-block"
                    style={{ fontSize: 12 }}>
                    列印空白收據
                  </a>
                  <a
                    styleName="btn btn-default btn-block"
                    style={{ fontSize: 12 }}>
                    列印收據
                  </a>
                </td>
              </tr>
              <tr styleName="total">
                <td colSpan="7" styleName="text-right">
                  Mega 6/45 - V197
                </td>
                <td styleName="color">113</td>
                <td styleName="color" />
                <td styleName="color">20.28</td>
                <td styleName="color">92.72</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withStyle()(BetOrder);
