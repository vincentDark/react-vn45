import React from 'react';
import { Style } from '~/core/container';
import { withRouter } from "react-router-dom";

import InputNum from "./InputNum";
import HashNum from "./HashNum";

const SinglePon = ({match}) => {
    console.log('match :');
    console.log(match);
    let { star, type } = match.params

    const fakeData = {
        "S2": [
            {
                'num':['02','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,

            },
            {
                'num':['02','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            },
            {
                'num':['02','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            },
            {
                'num':['02','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            }
        ],
        "S3": [
            {
                'num':['02','33','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,

            },
            {
                'num':['02','33','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            },
            {
                'num':['02','33','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            },
            {
                'num':['02','33','22'],
                'bet': 5000,
                'baseMoney': 76,
                'money': 200,
            }
        ],
        "S4":[

        ]
    }
    
    console.log('fakeData :');
    console.log(fakeData);
    
    let inputNum = (star) => {
        let inputBox = []
        for (let index = 1; index <= star; index++) {
            inputBox.push(<InputNum key={`inputNum${index}`} />)
        }
        return inputBox
    }

    let hash = () => {
        let hashBox = []
        for (let index = 1; index <= star; index++) {
            hashBox.push(<HashNum key={`HashNum${index}`} />)
        }
        return hashBox
    }
    
    return (
        <div styleName="col-xs-7 ball">
            <div styleName="nav-content">
                <div styleName="game-holder text-center">
                    <div styleName="title2"> { star } 星 單碰</div>
                    <div styleName="row full">
                        <div styleName="flex">
                            { inputNum(star) }
                            <div styleName="col-xs-cash">
                                <h4>金額</h4>
                                <input type="text" styleName="form-control text-center"/>
                            </div>
                        </div>
                        <div styleName="col-xs-6">
                            <a styleName="btn-add btn-block">加入這一筆單碰</a>
                        </div>
                        <div styleName="col-xs-6">
                            <a styleName="btn-clear btn-block">清除號碼與金額</a>
                        </div>
                        <div styleName="col-xs-12">
                            <a styleName="btn-clearall btn-block">清除所有的單碰</a>
                        </div>
                        <div styleName="subtitle row full">
                            <div styleName="flex">
                                { hash() }
                                <div styleName="col-xs-number-cash-title">賠率</div>
                                <div styleName="col-xs-number-cash-title">本金</div>
                                <div styleName="col-xs-number-cash-title">金額</div>
                                <div styleName="col-xs-number-del-title-end">清除</div>
                            </div>
                        </div>
                        <div styleName="list row full">
                            <div styleName="flex">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Style()(SinglePon));