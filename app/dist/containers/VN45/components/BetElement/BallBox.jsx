import React from 'react';
import { Style } from '~/core/container';

const BallBox = ({num, choose}) => {
    return (
        <div styleName="ballbox" onClick={choose(num)}>
            <input styleName="getout" type="checkbox" id={`ball${num}`}/>
            <label styleName="ballini" htmlFor={`ball${num}`}>{num}</label>
        </div>
    );
}

export default Style()(BallBox);