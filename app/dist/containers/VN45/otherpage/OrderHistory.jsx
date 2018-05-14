import React, { Component } from 'react';
import { Style } from '~/core/container';

const OrderHistory = () => {
    return (
        <div styleName="container">
            <div styleName="col-xs-12">
                <ul styleName="nav-submenu" style={{width: '100%'}}>
                    <li>
                        <a styleName="btn btn-change">本週</a>
                    </li>
                    <li>
                        <a styleName="btn btn-change">上週</a>
                    </li>
                    <li style={{float: 'right'}}>
                        <a styleName="btn" style={{
                            color: 'black',
                            fontWeight: '800',
                            cursor: 'default',
                            boxShadow: 'none'
                        }}>2018-05-13  ~  2018-05-19</a>
                    </li>
                </ul>
            </div>
            <div styleName="col-xs-12">
                <div styleName="content-holder">
                    <table styleName="report-bill-history">
                        <thead>
                            <tr>
                                <td styleName="main-title" style={{width: 200}}>名稱</td>
                                <td styleName="main-title" style={{width: 100}}>總量</td>
                                <td styleName="main-title" style={{width: 100}}>退水</td>
                                <td styleName="main-title" style={{width: 100}}>中獎</td>
                                <td styleName="main-title" style={{width: 100}}>輸贏</td>
                                <td styleName="main-title" style={{width: 100}}>小計</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MEGA45-第V197期【2018-03-20】</td>
                                <td>113.00</td>
                                <td>20.39</td>
                                <td>0.00</td>
                                <td>-92.61</td>
                                <td>-92.61</td>
                            </tr>
                            <tr styleName="total">
                                <td>小計</td>
                                <td>113</td>
                                <td>20.39</td>
                                <td>0</td>
                                <td>-92.61</td>
                                <td>-92.61</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Style()(OrderHistory);