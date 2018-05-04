import React, { Component } from 'react';
import Leftbar from "./components/Leftbar";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Style } from '~/core/container';



class App extends Component {
    render() {
        return (
            <main>
                <Leftbar />
                <Router>
                    <Header>
                        <Switch>
                            <Route exact path="/vn45/:star/:type" component={Main}/>
                        </Switch>
                    </Header>
                </Router>
            </main>
        );
    }
}

export default Style()(App);