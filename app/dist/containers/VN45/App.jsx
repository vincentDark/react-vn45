import React, { Component } from 'react';
import Leftbar from "./components/HeaderNav/Leftbar";
import Header from "./components/HeaderNav/Header";
import Main from "./components/Main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Style } from '~/core/container';



class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
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
            </MuiThemeProvider>

        );
    }
}

export default Style()(App);