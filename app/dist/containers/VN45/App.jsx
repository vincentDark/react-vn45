import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Style } from '~/core/container';

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



class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Frame>
                            <Leftbar />
                            <Header>
                                <Route exact path="/vn45/:star/:type" component={Main}/>
                                <Route exact path="/open-ball" component={OpenBall}/>
                                <Route exact path="/total-bet" component={TotalBet}/>
                                <Route exact path="/bet-order" component={BetOrder}/>
                                <Route exact path="/order-history" component={OrderHistory}/>
                                <Route exact path="/page/member-info" component={MemberInfo}/>
                                <Route exact path="/page/notice" component={NoticeAll}/>
                                <Route exact path="/page/rule" component={Rule}/>
                                <Route exact path="/page/contact" component={Contact}/>
                            </Header>
                        </Frame>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default Style()(App);