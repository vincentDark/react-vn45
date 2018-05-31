import React, { Component } from 'react';
import { withStyle } from '~/core/container';

import loginTheme from "@/css_other/style-new-login.scss";

const LangItem = ({word, img, index, click}) => {
    return (
        <li styleName={`option-opt${index}`} id={`option-opt${index}`} onClick={click}>
            <span styleName="option-text">{word}</span>
            <img src={img}/>
        </li>
    );
}

export default withStyle(loginTheme)(LangItem);
