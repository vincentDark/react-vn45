import React from 'react';
import { withStyle, compose, withDispatch } from '~/core/container';
import { Link, withRouter } from 'react-router-dom';

import { clearAllBall } from '../action';

const GameType = ({ match, dispatch }) => {
  let { star, type } = match.params;
  const typeBtn = [['S', '單碰'], ['SE', '連碰'], ['C', '柱碰']];

  const clearAll = () => {
    dispatch(clearAllBall());
  };

  const typeElement = () => {
    if (star == 1) {
      return (
        <Link to="/vn45/1/S" styleName="btn btn-change btn-tw39 active">
          一星
        </Link>
      );
    } else {
      return typeBtn.map((item, index) => {
        let active = '';
        if (item[0] == type) {
          active = 'active';
        }
        return (
          <Link
            to={`/vn45/${star}/${item[0]}`}
            styleName={`btn btn-change btn-tw39 ${active}`}
            key={item[0]}
            onClick={clearAll}>
            {item[1]}
          </Link>
        );
      });
    }
  };

  return (
    <div styleName="col-xs-12">
      <div styleName="nav-change focus">{typeElement()}</div>
    </div>
  );
};

export default compose(withRouter, withDispatch, withStyle())(GameType);
