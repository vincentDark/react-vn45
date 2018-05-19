import React, { Component } from 'react';
import { Style, compose, Dispatch, Store } from '~/core/container';
import { withRouter } from "react-router-dom";

import { chooseColumn } from "../action";

class CPonFrame extends Component {
    chooseCloum = (index) => () => {
        this.props.dispatch(chooseColumn(index))
    }
    render() {
        let { star } = this.props.match.params
        let { nowColum, ColumBalls } = this.props.storeData
        let columnNum = ColumBalls.length < star ? star : ColumBalls.length

        return (
            <div styleName="col-xs-6 ball">
                <div styleName="nav-content">
                    <div styleName="game-holder text-center">
                        <div styleName="title2">請點選柱數</div>
                        <div styleName="row full colum-holder" ref="scroll">
                            <div styleName="inside">
                                {
                                    new Array(+columnNum).fill('').map((item, index)=>{
                                        let active ;
                                        (index == nowColum) ? active = 'select' : active = ''
                                        return(
                                            <div styleName={`gamecolum border-right ${active}`} key={`inside${index}`} onClick={this.chooseCloum(index)}>
                                                <div styleName="subtitle2">柱數 {index+1}</div>
                                                {
                                                    (ColumBalls[index] !== undefined) &&
                                                    ColumBalls[index].map((ball,temp)=>{
                                                        return(
                                                            <p key={`C${index}ball${ball}`}>{ball}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                                <div styleName="gamecolum">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(Dispatch,Store('BallsState'))(withRouter(Style()(CPonFrame)));