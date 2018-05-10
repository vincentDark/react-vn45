import React, { Component } from 'react';
import { Style } from '~/core/container';

class InputNum extends Component {
    state = {  }
    render() {
        let {refsName, next} = this.props
        console.log('refsName = ' + refsName);
        return (
            <div styleName="col-xs-number">
                <h4>號碼</h4>
                <input type="text" 
                    styleName="form-control text-center"
                    ref={el => { this.refsName = el }}
                    onKeyUp={e => {
                        console.log(this.refsName)
                        this[next].focus()
                    }}
                />
            </div>
        );
    }
}


export default Style()(InputNum);