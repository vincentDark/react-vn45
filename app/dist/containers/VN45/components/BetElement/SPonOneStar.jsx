import React, { Component } from 'react';
import { withStyle, compose, withDispatch, withStore } from '~/core/container';
require('@/css/ed-style.css')

import { chooseBall, clearAllBall } from "../../action";

class SPonOneStar extends Component {
    
    state = {
        // inputMoney: Array(45).fill('').map((item,i)=>({id:i}))
        inputMoney: Array(45).fill(''),
        addMoney: '',
    }

    chooseBall = (num) => () =>{
        this.refs[`inputRefs${num}`].focus()
        this.props.dispatch(chooseBall(num, num, 1))
    }

    clearAll = () => {
        this.props.dispatch(clearAllBall())
    }

    fastChooseBall = (star,end,jump) => () =>{
        this.props.dispatch(chooseBall(star,end,jump))
    }

    handleInput = (index) => (e) => {
        let newInputMoney = this.state.inputMoney
        newInputMoney[index] = e.target.value.replace(/\D/g,'')
        this.setState({
            inputMoney: newInputMoney
        })
    }

    handleAddMoney = (e) => {
        this.setState({
            addMoney: e.target.value.replace(/\D/g,'')
        })
    }

    addChoosedMoney = (checkArr) => () => {
        let money = +this.state.addMoney
        if (money == 0) return

        let newInputMoney = this.state.inputMoney
        checkArr.forEach(i => {
            newInputMoney[i-1] = +newInputMoney[i-1] + money
        });
    
        this.setState({
            inputMoney: newInputMoney
        })
    }
    
    
    render() {
        let { storeData } = this.props
        let money, inputRefsNum, inputRefsMoney
        return (
            <div styleName="col-xs-12 ball">
                <div styleName="nav-content">
                    <div styleName="game-holder text-center">
                        <div styleName="title2 s1-title">
                            <div>
                                快速下注
                            </div>
                            {
                                Array(5).fill().map((item,i)=>{
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
                                            <input type="tel" 
                                                styleName="form-control"
                                                ref={el => { this.inputRefsNum = el }}
                                                onKeyUp={e => {
                                                    this.inputRefsNum.value = this.inputRefsNum.value.replace(/\D/g,'')
                                                    while (this.inputRefsNum.value.length > 2) {
                                                        this.inputRefsNum.value = this.inputRefsNum.value/10 >>> 0
                                                    }
                                                    if(this.inputRefsNum.value.length == 2 || (this.inputRefsNum.value.trim() && e.key === 'Enter')){
                                                        this.inputRefsMoney.focus()
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div styleName="input-group">
                                            <span styleName="inputname">金額</span>
                                            <input type="tel" 
                                                styleName="form-control"
                                                ref={el => { this.inputRefsMoney = el }}
                                                onKeyUp={e => {
                                                    this.inputRefsMoney.value = this.inputRefsMoney.value.replace(/\D/g,'')
                                                    if(this.inputRefsMoney.value.trim() && e.key === 'Enter'){
                                                        let newInputMoney = this.state.inputMoney
                                                        newInputMoney[this.inputRefsNum.value-1] = this.inputRefsMoney.value
                                                        this.setState({
                                                            inputMoney: newInputMoney
                                                        })
                                                        this.inputRefsNum.value = ''
                                                        this.inputRefsMoney.value = ''
                                                        this.inputRefsNum.focus()
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div styleName="fastframe">
                                        <p styleName="T1">累加金額</p>
                                        <div styleName="input-group">
                                            <input type="tel" 
                                                styleName="form-control" 
                                                placeholder="輸入金額"
                                                value={this.state.addMoney}
                                                onChange={this.handleAddMoney}
                                            />
                                            <span styleName="whiteblock"></span>
                                            <span styleName="inputname input-group-addon submittt" onClick={this.addChoosedMoney(storeData)}>送出</span>
                                        </div>
                                    </div>
                                    <div styleName="fastframe">
                                        <div styleName="chooseItem">
                                            <span styleName="btn btn-link" onClick={this.fastChooseBall(1,45,2)}>單</span>
                                            <span styleName="btn btn-link" onClick={this.fastChooseBall(2,45,2)}>雙</span>
                                            <span styleName="btn btn-link" onClick={this.fastChooseBall(23,45,1)}>大</span>
                                            <span styleName="btn btn-link" onClick={this.fastChooseBall(1,22,1)}>小</span>
                                        </div>
                                    </div>
                                    <div styleName="fastframe nodata"></div>
                                </div>
                            </div>
                            <div styleName="ball-frame">
                                {
                                    Array(45).fill().map((item,index)=>{
                                        return(
                                            <div styleName="each-ball" key={`ball${index}`}>
                                                <input type="checkbox" checked={storeData.includes(index+1)} readOnly/>
                                                <label styleName="m_ball_y" onClick={this.chooseBall(index+1)}>
                                                    <div styleName="td_star_C">{index+1}</div>
                                                </label>
                                                <div styleName="price">$$</div>
                                                <div styleName="input">
                                                    <span styleName="pull-right"></span>
                                                    <div styleName="input-group">
                                                        <input type="tel" 
                                                            styleName="form-control"
                                                            value={this.state.inputMoney[index]}
                                                            onChange={this.handleInput(index)}
                                                            ref={`inputRefs${index + 1}`}
                                                        />
                                                    </div>
                                                </div>
                                                <div styleName="mask">封牌</div>
                                                <p styleName="singleLimitMoney"><span>上限: </span>XXX</p>
                                            </div>
                                        )
                                    })
                                }
                                <div styleName="each-ball ballclear clearfix nopadd">
                                    <div styleName="col-xs-ball">
                                        <div styleName="btn-reset">封牌</div>
                                    </div>
                                    <div styleName="col-xs-ball" onClick={this.clearAll}>
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
}


export default compose(withDispatch, withStore('BallsState.CheckedBall'))(withStyle()(SPonOneStar));
