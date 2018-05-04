import React from 'react';
import { Style } from '~/core/container';
import { Link } from "react-router-dom";



const GameType = ({star, type}) => {
    const typeBtn = [['S','單碰'],['SE','連碰'],['C','柱碰']]

    const typeElement = () =>{
        if (star == 1) {
            return (
                <Link to="/vn45/1/S" styleName="btn btn-change btn-tw39 active">一星</Link>
            )
        }else {
            return(
                typeBtn.map((item,index) => {
                    let active = ''
                    if (item[0] == type) {
                        active = 'active'
                    }
                    return(
                        <Link to={`/vn45/${star}/${item[0]}`} styleName ={`btn btn-change btn-tw39 ${active}`} key={item[0]}>{item[1]}</Link>
                    )
                })
            )
            
        }
    }
    
    return (
        <div styleName="col-xs-12">
            <div styleName="nav-change focus">
                { typeElement() }
            </div>
        </div>
    );
}

export default Style()(GameType);