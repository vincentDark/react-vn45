import React, { Component } from 'react';
import { withStyle } from '~/core/container';
import { Redirect, withRouter } from "react-router-dom";

import TypeMenu from "./TypeMenu";
import BallFrame from "./BallFrame";
import SinglePon from "./SinglePon";
import CPonFrame from "./CPonFrame";

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
                <div styleName="container" style={ star==1 ? {width:1090} :{}}>
                    <TypeMenu />
                    {
                        (type == 'S') ? <SinglePon/> : <BallFrame />
                    }
                    {
                        (type == 'C') && <CPonFrame />
                    }
                </div>
            </div>
        );
    }
}

export default withStyle()(Main);
