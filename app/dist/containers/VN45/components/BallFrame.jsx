import React, { Component } from 'react';
import { Style, compose, Dispatch, Store } from '~/core/container';
import { withRouter } from "react-router-dom";

import BetLeft from "./BetLeft";
import BallBox from "./BetElement/BallBox";

import { chooseBall } from "../action";


class BallFrame extends Component {
    state = {  }

    clickBall = (num) => {
        this.props.dispatch(chooseBall(num))
    }

    render() {
        let { match, storeData } = this.props
        let { star, type } = match.params
        let gameType = (type == 'SE') ? '連碰' : '柱碰'
        let ball = () => {
            let indents = []
            for (let index = 1; index <= 45; index++) {
                indents.push(<BallBox num={index}  key={`ball${index}`} choose={this.clickBall}/>)
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
}

// const BallFrame = ({match, storeData}) => {
    
    
//     let { star, type } = match.params
//     let gameType = (type == 'SE') ? '連碰' : '柱碰'
//     let ball = () => {
//         let indents = []
//         for (let index = 1; index <= 45; index++) {
//             indents.push(<BallBox num={index}  key={`ball${index}`}/>)
//         }
//         return indents;
//     }
    
//     return (
//         <div styleName="col-xs-6 ball">
//             <div styleName="nav-content">
//                 <div styleName="game-holder text-center">
//                     <div styleName="title2"> { star } 星 {gameType} (請點選要連碰的號碼)</div>
//                     <div styleName="row full">
//                         <BetLeft />
//                         <div styleName="col-xs-6 ball-right">
//                             { ball() }
//                             <button type="reset" styleName="btn-reset" style={{outline: 'none'}}>清除</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default compose(Dispatch, Store('ballChecked'))(withRouter(Style()(BallFrame)));