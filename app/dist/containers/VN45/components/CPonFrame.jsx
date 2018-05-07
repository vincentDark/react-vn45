import React, { Component } from 'react';
import { Style } from '~/core/container';
import { withRouter } from "react-router-dom";


const CPonFrame = ({match}) => {
    let { star } = match.params

    return (
        <div styleName="col-xs-6 ball">
            <div styleName="nav-content">
                <div styleName="game-holder text-center">
                    <div styleName="title2">請點選柱數</div>
                    <div styleName="row full colum-holder">
                        <div styleName="inside">
                            {
                                new Array(+star).fill('').map((item, index)=>{
                                    let active ;
                                    (index == 0) ? active = 'select' : active = ''
                                    return(
                                        <div id="gameColum1" styleName={`gamecolum border-right ${active}`} key={`inside${index}`}>
                                            <div styleName="subtitle2">柱數 {index+1}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Style()(CPonFrame));