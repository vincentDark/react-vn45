import React, { Component } from 'react';
import { Style } from '~/core/container';

import InfoWord from "./InfoWord";
import SmallSubscript from "./SmallSubscript";

const Leftbar = () => {
    const InfoTitle = ['總和總額度', '剩餘總和總額度', '單碰上限', '單碰下限', '單組限額']
    const InfoBet = ['組數', '價格', '每碰金額', '下注金額']
    let blue = true;
    
    return (
        <div id="leftbar">
            <div styleName="row full text-center">
                <div styleName="logo-text">
                    Logo
                </div>
            </div>
            <div styleName="col-xs-12 colum line-top line-bot blue">
                <b>會員名稱</b>
            </div>
            {
                InfoTitle.map((word, index) => {
                    blue = !blue
                    return(
                        <InfoWord key={index} title={word} blue={blue ? 'blue' : ''}/>
                    )
                })
            }
            <div styleName="col-xs-12 colum-btn line-bot">
                <a styleName="btn-next btn-block">
                    ` - ` <span></span> <br/> 下一個
                </a>
            </div>
            <div styleName="nav-pay">
                {
                    InfoBet.map((word, index) => {
                        blue = !blue
                        return(
                            <InfoWord key={index} title={word} blue={blue ? 'blue' : ''}/>
                        )
                    })
                }
                <div styleName="col-xs-12 colum-btn line-bot">
                    <a styleName="num1 btn-left">清除</a>
                    <a styleName="num2 btn-left">送出</a>
                    <a styleName="num3 btn-left">常用牌組</a>
                    
                </div>
            </div>
            <div styleName="row full">
                <a styleName="pull-right detail-price">詳細價格表</a>
                <SmallSubscript />
            </div>
        </div>
    );
}


export default Style()(Leftbar);
