import React from 'react';
import { Style } from '~/core/container';
import { withRouter } from "react-router-dom";

import BetLeft from "./BetLeft";
import BallBox from "./BallBox";

const BallFrame = ({match}) => {
    let { star, type } = match.params
    let gameType = (type == 'SE') ? '連碰' : '柱碰'
    
    let ball = () => {
        let indents = []
        for (let index = 1; index <= 45; index++) {
            indents.push(<BallBox num={index}  key={`ball${index}`}/>)
        }
        return indents;
    }
    return (
        <div styleName="col-xs-6 ball">
            <div styleName="nav-content">
                <div styleName="game-holder text-center">
                    <div styleName="title2"> { star } 星 {gameType} (請點選要連碰的號碼)</div>
                    <div styleName="row full">
                        <BetLeft />
                        <div styleName="col-xs-6 ball-right">
                            { ball() }
                            <button type="reset" styleName="btn-reset" style={{outline: 'none'}}>清除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Style()(BallFrame));