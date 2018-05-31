import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const TotalBet = () => {
    return (
        <div styleName="container">
            <div styleName="col-xs-12">
                <div styleName="sub-navbar">MEGA45 - 期數V197</div>
            </div>
            <div styleName="col-xs-12">
                <div styleName="content-holder">
                    <table styleName="report-bill-history">
                        <thead>
                            <tr>
                                <td styleName="main-title" style={{width:200}}>名稱</td>
                                <td styleName="main-title" style={{width:100}}>總量</td>
                                <td styleName="main-title" style={{width:100}}>退水</td>
                                <td styleName="main-title" style={{width:100}}>中獎</td>
                                <td styleName="main-title" style={{width:100}}>輸贏</td>
                                <td styleName="main-title" style={{width:100}}>小計</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2星</td>
                                <td>69</td>
                                <td>11.04</td>
                                <td>0.00</td>
                                <td>-57.96</td>
                                <td>-57.96</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default withStyle()(TotalBet);