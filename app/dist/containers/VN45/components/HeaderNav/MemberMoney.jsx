import React from 'react';
import { withStore, withStyle } from '~/core/container';

import InfoWord from './InfoWord';

const MemberMoney = ({ storeData }) => {
  // 名稱
  const InfoTitle = [
    '總和總額度',
    '剩餘總和總額度',
    '單碰上限',
    '單碰下限',
    '單組限額'
  ];
  // 金額
  const InfoMoney = [
    storeData['member.data.totalCredit'],
    storeData['member.data.restCredit'],
    0,
    0,
    0
  ];
  // 所有盤口期數資料
  const gameTerms = storeData['member.data.gameTerms'] || [];
  // 本盤口期數
  let nowTerm = 'None';
  if (gameTerms.length !== 0) {
    nowTerm = gameTerms[0].TERM_ID;
  }
  let blue = true;
  return (
    <div>
      {InfoTitle.map((word, index) => {
        blue = !blue;
        return (
          <InfoWord
            key={index}
            title={word}
            blue={blue ? 'blue' : ''}
            money={InfoMoney[index] >>> 0}
          />
        );
      })}
      <div styleName="col-xs-12 colum-btn line-bot">
        <a styleName="btn-next btn-block">
          {nowTerm} - 001 <span /> <br /> 下一個
        </a>
      </div>
    </div>
  );
};

export default withStore(
  'member.data.totalCredit',
  'member.data.restCredit',
  'member.data.gameTerms'
)(withStyle()(MemberMoney));
