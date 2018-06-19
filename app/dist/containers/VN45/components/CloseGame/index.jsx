import React from 'react';
import { withStyle, withStore } from '~/core/container';

const CloseGame = ({ storeData }) => {
  let Close = false;
  if (storeData.length == 0) {
    Close = true;
  } else if (storeData[0].STAT !== 'B') {
    Close = true;
  }
  return Close ? (
    <div styleName="isclose">
      <div styleName="closer-holder">
        <h1>Đang đóng(關盤中)</h1>
        <div>
          <i styleName="fa fa-spinner fa-pulse" />
        </div>
      </div>
    </div>
  ) : null;
};

export default withStore('member.data.gameTerms')(withStyle()(CloseGame));
