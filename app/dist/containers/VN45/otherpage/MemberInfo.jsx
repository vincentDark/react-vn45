import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const MemberInfo = () => {
    let inputwithStyle = {
        width: 180,
        marginBottom: 5,
        backgroundColor: '#fff',
    }
    let tableBC = {backgroundColor: '#fff'}
    return (
        <div styleName="container">
            <div styleName="col-xs-7">
                <div styleName="content-holder">
                    <table style={tableBC}>
                        <tbody>
                            <tr>
                                <td styleName="title">代理</td>
                                <td>500pt80</td>
                            </tr>
                            <tr>
                                <td styleName="title">帳號</td>
                                <td>kirin</td>
                            </tr>
                            <tr>
                                <td styleName="title">會員名稱</td>
                                <td>kirin</td>
                            </tr>
                            <tr>
                                <td styleName="title">總和總額度</td>
                                <td>300.00</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button styleName="btn-clearall btn-block" style={{width: 180}} data-toggle="collapse" data-target="#gateway">修改密碼</button>
                                    <form id="gateway" styleName="collapse in" style={{marginTop: 5}}>
                                        <input type="password" styleName="form-control" style={inputwithStyle} placeholder="請輸入舊密碼" name="oldpw" />
                                        <input type="password" styleName="form-control" style={inputwithStyle} placeholder="請輸入新密碼" name="pw1" />
                                        <input type="password" styleName="form-control" style={{...inputwithStyle ,float: 'left', marginRight: 5}} placeholder="確認新密碼" name="pw2" />
                                        <input type="hidden" name="action" value="changepw" />
                                        <button type="button" styleName="btn btn-default">確定</button>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {
                    Array(4).fill().map((item,index)=>(
                        <div styleName="content-holder" key={`memberInfo${index}`}>
                            <table style={tableBC}>
                                <tbody>
                                    <tr>
                                        <td styleName="main-title" colSpan="2">Mega 6/45 - {4 - index} 星</td>
                                    </tr>
                                    <tr>
                                        <td styleName="title">單碰上限</td>
                                        <td>2000000</td>
                                    </tr>
                                    <tr>
                                        <td styleName="title">單碰下限</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td styleName="title">單組限額</td>
                                        <td>2000000</td>
                                    </tr>
                                    <tr>
                                        <td styleName="title">賠率</td>
                                        <td>5000</td>
                                    </tr>
                                    <tr>
                                        <td styleName="title">退水</td>
                                        <td>42</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default withStyle()(MemberInfo);