import React, { PureComponent } from 'react';
import { Style, compose, Dispatch } from '~/core/container';

import { chooseBall } from "../../action";


class BallBox extends PureComponent {
    
    chooseBall = (num) => () =>{
        this.props.dispatch(chooseBall(num))
    }
    
    render() {
        let { num, check } = this.props
        console.log('num :');
        console.log(num);
        return (
            <div styleName="ballbox" onClick={this.chooseBall(num)}>
                <input styleName="getout" type="checkbox" id={`ball${num}`} checked={check}/>
                <label styleName="ballini">{num}</label>
            </div>
        );
    }
}


export default compose(Dispatch)(Style()(BallBox));