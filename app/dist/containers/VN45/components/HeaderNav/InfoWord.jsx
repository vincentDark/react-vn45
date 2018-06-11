import React from 'react';
import { withStyle } from '~/core/container';

const InfoWord = ({ blue = '', title = '' }) => {
  return (
    <div>
      <div styleName={`col-xs-6 colum line-right line-bot ${blue}`}>
        {title}
      </div>
      <div styleName={`col-xs-6 colum line-bot hover-event ${blue}`}>
        <span>123</span>
        <span>999999</span>
      </div>
    </div>
  );
};

export default withStyle()(InfoWord);
