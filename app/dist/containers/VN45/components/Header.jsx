import React from 'react';
import { Style } from '~/core/container';

const Header = () => {
    return (
        <nav styleName="navbar navbar-default">
            <div styleName="">
                <div id="navbartop">
                    <ul styleName="nav navbar-nav navbartop-left">
                        <li styleName="active">
                            <a>Mega 6/45</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Style()(Header);