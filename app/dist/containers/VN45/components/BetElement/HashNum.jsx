import React from 'react';
import { withStyle } from '~/core/container';


const HashNum = () => {
    return (
        <div styleName="col-xs-number-title">#</div>
    );
}

export default withStyle()(HashNum);