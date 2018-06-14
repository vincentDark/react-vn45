import React from 'react';
import { withStyle, withStore } from '~/core/container';

const GameTime = () => {
  return <a id="status-time">正在仔入盤口時間</a>;
};

export default withStore('member.data.marquee')(withStyle()(GameTime));
