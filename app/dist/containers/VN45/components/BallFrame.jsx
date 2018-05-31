import React, { Component } from 'react';
import { withStyle, compose, withDispatch, withStore } from '~/core/container';
import { withRouter } from "react-router-dom";

import BetLeft from "./BetLeft";
import BallBox from "./BetElement/BallBox";

import { clearAllBall } from "../action";


class BallFrame extends Component {

    clearAll = () => {
        this.props.dispatch(clearAllBall())
    }
    
    render() {
        let { match, storeData } = this.props
        let { star, type } = match.params
        let gameType = (type == 'SE') ? '連碰' : '柱碰'

        return (
            <div styleName="col-xs-6 ball">
                <div styleName="nav-content">
                    <div styleName="game-holder text-center">
                        <div styleName="title2"> { star } 星 {gameType} (請點選要連碰的號碼)</div>
                        <div styleName="row full">
                            <BetLeft />
                            <div styleName="col-xs-6 ball-right">
                                {
                                    Array(45).fill().map((item,i)=>{
                                        return(
                                            <BallBox num={i+1}  key={`ball${i+1}`} check={storeData.includes(i+1)}/>
                                        )
                                    })
                                }
                                <button type="reset" styleName="btn-reset" style={{outline: 'none'}} onClick={this.clearAll}>清除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(withDispatch, withStore('BallsState.CheckedBall'))(withRouter(withStyle()(BallFrame)));