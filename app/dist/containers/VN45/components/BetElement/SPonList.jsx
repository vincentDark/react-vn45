import React, { Component } from 'react';
import { withStyle } from '~/core/container';

const SPonList = ({ data }) => {
  return (
    <div styleName="list row full">
      {data.map((item, index) => {
        return (
          <div styleName="list row full" key={`List${index}`}>
            <div styleName="flex">
              {item.num.map((num, key) => {
                return (
                  <div
                    styleName="col-xs-number-list"
                    key={`ListSmall${num}${index}${key}`}>
                    {num}
                  </div>
                );
              })}
              <div styleName="col-xs-number-cash-list">{item.bet}</div>
              <div styleName="col-xs-number-cash-list">{item.baseMoney}</div>
              <div styleName="col-xs-number-cash-list" id="money">
                {item.money}
              </div>
              <div styleName="col-xs-number-del-list">
                <a>清除</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withStyle()(SPonList);
