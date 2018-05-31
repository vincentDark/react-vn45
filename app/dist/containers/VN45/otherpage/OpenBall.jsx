import React from 'react';
import { withStyle } from '~/core/container';


const OpenBall = () => {
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
                    <table styleName="report-ball">
                        <thead>
                            <tr>
                                <td styleName="main-title">期數</td>
                                <td styleName="main-title">日期</td>
                                <td styleName="main-title" style={{width:100}}>星期</td>
                                <td styleName="main-title">#1</td>
                                <td styleName="main-title">#2</td>
                                <td styleName="main-title">#3</td>
                                <td styleName="main-title">#4</td>
                                <td styleName="main-title">#5</td>
                                <td styleName="main-title">#6</td>
                                <td styleName="main-title">保留</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td styleName="no">V197</td>
                                <td styleName="date">2018-05-10 20:00:00</td>
                                <td styleName="week">星期四</td>
                                <td styleName="ball">
                                    <div styleName="m_ball_gr2">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td styleName="ball">
                                    <div styleName="m_ball_gr2">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td styleName="ball">
                                    <div styleName="m_ball_y">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td styleName="ball">
                                    <div styleName="m_ball_gr2">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td styleName="ball">
                                    <div styleName="m_ball_gr2">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td styleName="ball">
                                    <div styleName="m_ball_gr2">
                                        <div styleName="td_star_C">?</div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default withStyle()(OpenBall);