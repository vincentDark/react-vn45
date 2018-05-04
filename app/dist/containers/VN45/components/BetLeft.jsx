import React from 'react';
import { Style } from '~/core/container';
import { withRouter } from "react-router-dom";
const BetLeft = ({match, location, history}) => {
    let { type } = match.params
    let disabled = (type == 'C') 
    let randomChoose = () => {
        if (disabled) {
            return (
                <div styleName="ball-item disabled"></div>
            )
        }else{
            return (
                <div styleName="ball-item">
                    <input type="text" id="randomNum" styleName="form-control text-center" placeholder="請輸入數量" />
                    <a styleName="btn-add btn-block" href="#" style={{ margin: 0 }}>自動選號</a>
                </div>
            )
        }
        
    }
    return (
        <div styleName="col-xs-6 ball-left">
            { randomChoose() }
            <div styleName="ball-item">
                <h4>號碼</h4>
                <input type="text" name="Ball" styleName="form-control text-center" id="tw-selectBall"/>
            </div>
            <div styleName="ball-item">
                <a styleName="btn-inside">單</a>
                <a styleName="btn-inside">雙</a>
                <a styleName="btn-inside">大</a>
                <a styleName="btn-inside">小</a>
            </div>
            <div styleName="ball-item">
                <h4>十位數(頭數)</h4>
                <a styleName="btn-inside">0</a>
                <a styleName="btn-inside">1</a>
                <a styleName="btn-inside">2</a>
                <a styleName="btn-inside">3</a>
                <a styleName="btn-inside">4</a>
            </div>
            <div>
                <h4>個位數(尾數)</h4>
                <div>
                    <a styleName="btn-inside">0</a>
                    <a styleName="btn-inside">1</a>
                    <a styleName="btn-inside">2</a>
                    <a styleName="btn-inside">3</a>
                    <a styleName="btn-inside">4</a>
                </div>
                <div>
                    <a styleName="btn-inside">5</a>
                    <a styleName="btn-inside">6</a>
                    <a styleName="btn-inside">7</a>
                    <a styleName="btn-inside">8</a>
                    <a styleName="btn-inside">9</a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Style()(BetLeft));