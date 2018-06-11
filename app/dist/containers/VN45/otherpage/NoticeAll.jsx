import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const NoticeAll = () => {
  return (
    <div styleName="container">
      <div styleName="col-xs-12">
        <div styleName="content-holder">
          <table id="history" style={{ backgroundColor: '#fff' }}>
            <thead>
              <tr>
                <td styleName="main-title">日期</td>
                <td styleName="main-title">星期</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td styleName="title2">2017-12-29 10:10:36</td>
                <td>今晚打老虎</td>
              </tr>
              <tr>
                <td styleName="title2">2017-12-29 02:44:30</td>
                <td>[2] test-03 | </td>
              </tr>
              <tr>
                <td styleName="title2">2017-12-01 10:13:56</td>
                <td>test-01</td>
              </tr>
              <tr>
                <td styleName="title2">2017-12-01 10:13:43</td>
                <td>test-02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withStyle()(NoticeAll);
