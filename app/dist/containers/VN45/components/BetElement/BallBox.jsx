import React from 'react';
import { Style } from '~/core/container';

const BallBox = ({num}) => {
    return (
        <div styleName="ballbox">
            <input styleName="getout" type="checkbox" id={`ball${num}`}/>
            <label styleName="ballini" htmlFor={`ball${num}`}>{num}</label>
        </div>
    );
}

export default Style()(BallBox);