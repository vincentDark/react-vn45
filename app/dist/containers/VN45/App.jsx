import React, { Component } from 'react';
import Leftbar from "./components/Leftbar";
import Header from "./components/Header";

import { Style } from '~/core/container';



class App extends Component {

    render() {
        return (
            <main>
                <Leftbar />
                <section>
                    <Header />
                </section>
            </main>
        );
    }
}

export default Style()(App);