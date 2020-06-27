import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import Student from './StudentBodyComponent.js'
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                <Route path="/home" component={Home} />
                <Route path="/studentbody" component={Student} />
                <Redirect to="/home" />
                </Switch>
                <Footer />
                {/* <Switch>
                
                </Switch> */}
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;