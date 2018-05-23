import React, { Component } from 'react';
import { Style } from '~/core/container';

import loginTheme from "@/css/style-new-login.scss";

import icon_arrow_01 from "@/img/icon_arrow_01.png";
import icon_00 from "@/img/icon_00.png";
import icon_01 from "@/img/icon_01.png";
import icon_02 from "@/img/icon_02.png";

import LangItem from "./LangItem";


class ChooseLang extends Component {
    countery = [
        {
          name: 'zh_tw',
          word: '繁體中文',
          img: icon_00
        },
        {
          name: 'zh_cn',
          word: '简体中文',
          img: icon_01
        },
        {
          name: 'vi_vn',
          word: 'Việt Ngữ',
          img: icon_02
        }
    ];
    state = {
        open: false,
        lang: {
            name: 'zh_cn',
            word: '简体中文',
            img: icon_01
        }
    };

    menuToggle = () => {
        this.setState(preState => ({ open: !preState.open }));
    };
    
    setLang = item => () => {
        this.menuToggle();
        this.setState({
            lang: item
        });
    }
    
    render() {
        return (
            <div styleName="select-menu">
                <div styleName="option-opt0" id="option-opt0" data-optid="opt1" onClick={this.menuToggle}>
                    <span styleName="option-text">{this.state.lang.word}</span>
                    <img styleName="flag" src={this.state.lang.img}/>
                    <img styleName="arrow" src={icon_arrow_01}/>
                </div>
                <ul styleName={`toggle-box ${this.state.open ? 'show' : ''}`} id="optLang">
                    {
                        this.countery.map((item,index)=>(<LangItem word={item.word} img={item.img} index={index+1} click={this.setLang(item)} key={`lang${index}`}/>))
                    }
                </ul>
            </div>
        );
    }
}

export default Style(loginTheme)(ChooseLang);