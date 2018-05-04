import React, { Component } from 'react';
import { Style } from '~/core/container';

const InputNum = () => {
    return (
        <div styleName="col-xs-number">
            <h4>號碼</h4>
            <input type="text" styleName="form-control text-center"/>
        </div>
    );
}

export default Style()(InputNum);