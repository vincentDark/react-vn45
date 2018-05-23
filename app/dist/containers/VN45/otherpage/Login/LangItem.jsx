import React, { Component } from 'react';
import { Style } from '~/core/container';

import loginTheme from "@/css/style-new-login.scss";

const LangItem = ({word, img, index, click}) => {
    return (
        <li styleName={`option-opt${index}`} id={`option-opt${index}`} onClick={click}>
            <span styleName="option-text">{word}</span>
            <img src={img}/>
        </li>
    );
}

export default Style(loginTheme)(LangItem);
