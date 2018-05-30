import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Store } from '~/core/container';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Leftbar from "./components/HeaderNav/Leftbar";
import Header from "./components/HeaderNav/Header";
import Main from "./components/Main";
import Frame from "./components/DontWhy";
import OpenBall from "./otherpage/OpenBall";
import TotalBet from "./otherpage/TotalBet";
import BetOrder from "./otherpage/BetOrder";
import OrderHistory from "./otherpage/OrderHistory";
import MemberInfo from "./otherpage/MemberInfo";
import NoticeAll from "./otherpage/NoticeAll";
import Rule from "./otherpage/Rule";
import Contact from "./otherpage/Contact";
import Login from "./otherpage/Login/";

const routes = [
    {
        path: '/vn45/:star/:type',
        component: Main,
        auth: 'login'
    },
    {
        path: '/open-ball',
        component: OpenBall,
        auth: 'login'
    },
    {
        path: '/total-bet',
        component: TotalBet,
        auth: 'login'
    },
    {
        path: '/bet-order',
        component: BetOrder,
        auth: 'login'
    },
    {
        path: '/order-history',
        component: OrderHistory,
        auth: 'login'
    },
    {
        path: '/page/member-info',
        component: MemberInfo,
        auth: 'login'
    },
    {
        path: '/page/notice',
        component: NoticeAll,
        auth: 'login'
    },
    {
        path: '/page/rule',
        component: Rule,
        auth: 'login'
    },
    {
        path: '/page/contact',
        component: Contact,
        auth: 'login'
    },
]

class App extends Component {
    render() {
        console.log('this.props :');
        console.log(this.props);
        let auth = this.props.storeData
        console.log('auth = ' + auth);
        return (
            <MuiThemeProvider>
                <Router>
                    <Switch>
                        <Route exact path="/login" render={ (props)=> auth == false ? <Login {...props} /> : <Redirect to="/vn45/4/S" />  }/>
                        <Frame>
                            <Leftbar />
                            <Header>
                                {
                                    routes.map(({ path, component:C }) => (
                                        <Route 
                                            exact 
                                            path = {path}
                                            render = {(props) => auth ? <C {...props} /> : <Redirect to="/login" />}
                                            key={`route-${path}`}
                                        />
                                    ))
                                }
                            </Header>
                        </Frame>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default Store('member.auth')(App);