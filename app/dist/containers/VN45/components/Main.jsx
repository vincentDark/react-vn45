import React, { Component } from 'react';
import { Style } from '~/core/container';
import { Redirect } from "react-router-dom";

import TypeMenu from "./TypeMenu";
import BallFrame from "./BallFrame";

class Main extends Component {
    
    render() {
        let { star, type } = this.props.match.params
        const typeName = ['C', 'S', 'SE']
        const starName = ['1', '2', '3', '4']
        let isLegal = true
        let redirectPath 
        // 先確定星別 在確定玩法
        if (starName.includes(star)) {
            if (star == 1) {
                if (type !== 'S'){
                    isLegal = false
                    redirectPath = '/vn45/1/S'
                }
            }else if ( ! typeName.includes(type)) {
                isLegal = false
                redirectPath = `/vn45/${star}/S`
            }
        }else{
            isLegal = false
            redirectPath = '/vn45/4/S'
        }
        
        return (
            <div id="content">
                {/* 判斷星別跟玩法是否合法 不合法導向到正確的地方 */}
                {
                    (isLegal === false) && (<Redirect to={redirectPath}/>)
                }
                <div styleName="container">
                    <TypeMenu star={star} type={type} />
                    <BallFrame star={star} type={type}/>
                </div>
            </div>
        );
    }
}

export default Style()(Main);
