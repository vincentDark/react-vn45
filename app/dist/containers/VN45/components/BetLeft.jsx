import React, { Component } from 'react';
import { Style, compose, Dispatch } from '~/core/container';
import { withRouter } from "react-router-dom";
import { chooseBall } from "../action";

import RandomFrame from './BetElement/RandomFrame';

class BetLeft extends Component {

    fastChooseBall = (star,end,jump, type) => () =>{
        this.props.dispatch(chooseBall(star,end,jump, type))
    }

    InputBall = (num, type) =>{
        this.props.dispatch(chooseBall(num, num, 1, type))
    }

    render() {
        let { match } = this.props
        let { type } = match.params
        let ballNumber
        console.log('type :');
        console.log(type);
        return (
            <div styleName="col-xs-6 ball-left">
                {
                    type == 'C' ? <div styleName="ball-item disabled"></div> : <RandomFrame />
                }
                <div styleName="ball-item">
                    <h4>號碼</h4>
                    <input type="text" 
                        name="Ball" 
                        styleName="form-control text-center"
                        ref={el => { ballNumber = el}}
                        onKeyUp={ e => {
                                ballNumber.value = ballNumber.value.replace(/\D/g,'')
                                if(ballNumber.value.length == 2 || (ballNumber.value.trim() && e.key === 'Enter')){
                                    this.InputBall(+ballNumber.value, type)
                                    ballNumber.value = ''
                                }
                            }
                        }
                        autoComplete='off'
                    />

                </div>
                <div styleName="ball-item">
                    <a styleName="btn-inside" onClick={this.fastChooseBall(1,45,2,type)}>單</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(2,45,2,type)}>雙</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(23,45,1,type)}>大</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(1,22,1,type)}>小</a>
                </div>
                <div styleName="ball-item">
                    <h4>十位數(頭數)</h4>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(1,9,1,type)}>0</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(10,19,1,type)}>1</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(20,29,1,type)}>2</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(30,39,1,type)}>3</a>
                    <a styleName="btn-inside" onClick={this.fastChooseBall(40,45,1,type)}>4</a>
                </div>
                <div>
                    <h4>個位數(尾數)</h4>
                    <div>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(10,45,10,type)}>0</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(1,45,10,type)}>1</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(2,45,10,type)}>2</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(3,45,10,type)}>3</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(4,45,10,type)}>4</a>
                    </div>
                    <div>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(5,45,10,type)}>5</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(6,45,10,type)}>6</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(7,45,10,type)}>7</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(8,45,10,type)}>8</a>
                        <a styleName="btn-inside" onClick={this.fastChooseBall(9,45,10,type)}>9</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(Dispatch)(withRouter(Style()(BetLeft)));