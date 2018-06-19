import React from 'react';
import { withStyle } from '~/core/container';

const InfoWord = ({ blue = '', title = '', money = 0 }) => {
  return (
    <div>
      <div styleName={`col-xs-6 colum line-right line-bot ${blue}`}>
        {title}
      </div>
      <div styleName={`col-xs-6 colum line-bot hover-event ${blue}`}>
        {money > 10000 ? (
          <span> {money / 10000} 萬</span>
        ) : (
          <span>{money}</span>
        )}
        <span>{money}</span>
      </div>
    </div>
  );
};

export default withStyle()(InfoWord);
