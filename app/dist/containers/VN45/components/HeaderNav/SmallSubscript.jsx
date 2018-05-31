import React from 'react';
import enter from "@/img/enter.jpg";
import { withStyle } from '~/core/container';

const SmallSubscript = () => {
    const fontSize = {
        fontSize: '18px',
    }
    const picWidth = {
        width: '17px',
    }
    return (
        <div styleName="row full help">
            <div styleName="col-xs-6 text-center blue help-colum line-right line-bot">
                操作說明
            </div>
            <div styleName="col-xs-6 help-colum line-bot">
                <div styleName="help-icon line-right line-bot"><i styleName="fa fa-keyboard-o"></i></div>
                <span>按數字鍵選擇號碼</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot line-right">
                <div styleName="help-icon line-right line-bot">/</div>
                <span>切換區域</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot blue">
                <div styleName="help-icon line-right line-bot">-</div>
                <span>向左切換碰法</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot line-right blue">
                <div styleName="help-icon line-right line-bot" style={{ fontSize: 18 }}>*</div>
                <span>顯示/隱藏 調盤</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot">
                <div styleName="help-icon line-right line-bot">
                    <img style={{ width: 17 }} src={enter} />
                </div>
                <span>發送/確認</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot line-right">
                <div styleName="help-icon line-right line-bot">+</div>
                <span>向右切換碰法</span>
            </div>
            <div styleName="col-xs-6 help-colum line-bot blue">
                <div styleName="help-icon line-right line-bot">.</div>
                <span>清除號碼和金額</span>
            </div>
        </div>
    );
}

export default withStyle()(SmallSubscript);