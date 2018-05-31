import React from 'react';
import { withStyle } from '~/core/container';
import { Link, withRouter } from "react-router-dom";

const Header = ({children, location}) => {
    const starName = ['1', '2', '3', '4']
    let href = location.pathname
    let hrefContent = href.split('/')
    let type = 'SE'
    if (starName.includes(hrefContent[2])) {
        type = hrefContent[3]
    }

    return (
        <section>
            <nav styleName="navbar navbar-default">
                <div styleName="">
                    <div id="navbartop">
                        <ul styleName="nav navbar-nav navbartop-left">
                            <li styleName="active">
                                <a>Mega 6/45</a>
                            </li>
                        </ul>
                        <div styleName="marquee" >
                            <i styleName="fa fa-volume-up fa-lg"></i>
                            <marquee styleName="marquee-text" id="marquee"></marquee>
                        </div>
                        <ul styleName="nav navbar-nav navbar-right navbartop-right">
                            <li styleName="logout"><a href="#">登出</a></li>
                            <li>
                                <a id="status-time">
                                    正在仔入盤口時間
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div styleName="row" id="navbar">
                        <ul styleName="nav navbar-nav navbar-gametype">
                            <li><Link to={`/vn45/1/${type}`}><div id="S1" styleName={(hrefContent[2] == 1) ? 'active' : null} ><i styleName="fa fa-star"></i>1星</div></Link></li>
                            <li><Link to={`/vn45/2/${type}`}><div id="S2" styleName={(hrefContent[2] == 2) ? 'active' : null} ><i styleName="fa fa-star"></i>2星</div></Link></li>
                            <li><Link to={`/vn45/3/${type}`}><div id="S3" styleName={(hrefContent[2] == 3) ? 'active' : null} ><i styleName="fa fa-star"></i>3星</div></Link></li>
                            <li><Link to={`/vn45/4/${type}`}><div id="S4" styleName={(hrefContent[2] == 4) ? 'active' : null} ><i styleName="fa fa-star"></i>4星</div></Link></li>
                        </ul>
                        <ul styleName="nav navbar-nav navbar-right navbar-mainmenu">
                            <li id="menu1" styleName={(hrefContent[1] == 'open-ball') ? 'active' : null} ><Link to='/open-ball'><i styleName="fa fa-certificate"></i>開球結果</Link></li>
                            <li id="menu2" styleName={(hrefContent[1] == 'bet-order') ? 'active' : null} ><Link to='/bet-order'><i styleName="fa fa-file-text-o"></i>下注明細</Link></li>
                            <li id="menu3" styleName={(hrefContent[1] == 'total-bet') ? 'active' : null} ><Link to='/total-bet'><i styleName="fa fa-area-chart"></i>總帳</Link></li>
                            <li id="menu4" styleName={(hrefContent[1] == 'order-history') ? 'active' : null} ><Link to='/order-history'><i styleName="fa fa-bar-chart"></i>歷史總帳</Link></li>
                            <li id="menu5" styleName={(hrefContent[1] == 'page') ? 'dropdown active' : 'dropdown'} >
                                <a href="#" styleName="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i styleName="fa fa-cogs"></i>系統相關</a>
                                <ul styleName="dropdown-menu">
                                    <li><Link to='/page/member-info'>個人資料</Link></li>
                                    <li><Link to='/page/notice'>歷史公告</Link></li>
                                    <li><Link to='/page/rule'>規則說明</Link></li>
                                    <li><Link to='/page/contact'>聯絡我們</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
        </section>
    );
}

export default withRouter(withStyle()(Header));