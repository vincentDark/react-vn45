import React from 'react';
import { withStyle, withStore } from '~/core/container';
import { withRouter } from 'react-router-dom';

const GameTime = ({ storeData, game }) => {
  const gameTerms = storeData['member.data.gameTerms'] || {};
  const serverTime = storeData['member.data.serverTime'];
  let timeText = '正在仔入盤口時間';
  Object.keys(gameTerms).map(key => {
    const element = gameTerms[key];
    if (element.GAME_NAME.toUpperCase() === game.toUpperCase()) {
      let now = Date.parse(serverTime);
      let start = Date.parse(element.START_TIME);
      let end = Date.parse(element.END_TIME);
      if (now > start && end > now) {
        timeText = `關盤時間  ${element.END_TIME}`;
      } else if (start > now) {
        timeText = `開盤時間  ${element.START_TIME}`;
      } else {
        timeText = `已關盤`;
      }
    }
  });
  return <a id="status-time">{timeText}</a>;
};

export default withStore('member.data.gameTerms', 'member.data.serverTime')(
  withStyle()(GameTime)
);
