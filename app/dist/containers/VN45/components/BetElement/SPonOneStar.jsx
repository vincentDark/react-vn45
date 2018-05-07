import React from 'react';
import { Style } from '~/core/container';
require('@/css/ed-style.css')

const SPonOneStar = () => {
    
    return (
        <div styleName="col-xs-12 ball">
            <div styleName="nav-content">
                <div styleName="game-holder text-center">
                    <div styleName="title2 s1-title">
                        <div>
                            快速下注
                        </div>
                        {
                            new Array(5).fill().map((item,i)=>{
                                return(
                                    <div key={`OneStarTitle${i}`}>
                                        <div styleName="s1-title-number">
                                            號碼
                                        </div>
                                        <div styleName="s1-title-price">
                                            本金
                                        </div>
                                        <div styleName="s1-title-order">
                                            下注金額
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div styleName="clearfix" style={{display: 'flex',width: '100%', height: 530}}>
                        <div styleName="col5">
                            <div id="fastchoose">
                                <div styleName="fastframe">
                                    <p styleName="T1">選號下注</p>
                                    <div styleName="input-group">
                                        <span styleName="inputname">號碼</span>
                                        <input type="tel" styleName="form-control"/>
                                    </div>
                                    <div styleName="input-group">
                                        <span styleName="inputname">金額</span>
                                        <input type="tel" styleName="form-control"/>
                                    </div>
                                </div>
                                <div styleName="fastframe">
                                    <p styleName="T1">累加金額</p>
                                    <div styleName="input-group">
                                        <input type="tel" styleName="form-control" placeholder="輸入金額"/>
                                        <span styleName="whiteblock"></span>
                                        <span styleName="inputname input-group-addon submittt">送出</span>
                                    </div>
                                </div>
                                <div styleName="fastframe">
                                    <div styleName="chooseItem">
                                        <span styleName="btn btn-link">單</span>
                                        <span styleName="btn btn-link">雙</span>
                                        <span styleName="btn btn-link">大</span>
                                        <span styleName="btn btn-link">小</span>
                                    </div>
                                </div>
                                <div styleName="fastframe nodata"></div>
                            </div>
                        </div>
                        <div styleName="ball-frame">
                            {
                                new Array(45).fill().map((item,index)=>{
                                    return(
                                        <div styleName="each-ball" key={`ball${index}`}>
                                            <input type="checkbox" name="Numbers" id={`N${index+1}`} />
                                            <label styleName="m_ball_y" htmlFor={`N${index+1}`}>
                                                <div styleName="td_star_C">{index+1}</div>
                                            </label>
                                            <div styleName="price">
                                                $$
                                            </div>
                                            <div styleName="input">
                                                <span styleName="pull-right"></span>
                                                <div styleName="input-group">
                                                    <input type="tel" styleName="form-control" />
                                                </div>
                                            </div>
                                            <div styleName="mask">
                                                封牌
                                            </div>
                                            <p styleName="singleLimitMoney"><span>上限: </span>XXX</p>
                                        </div>
                                    )
                                })
                            }
                            <div styleName="each-ball ballclear clearfix nopadd">
                                <div styleName="col-xs-ball">
                                    <div styleName="btn-reset">封牌</div>
                                </div>
                                <div styleName="col-xs-ball">
                                    <div styleName="btn-reset">清除</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Style()(SPonOneStar);
