/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Router } from "react-router-dom";

import AboutPage from "../AboutPage";
import HomePageContainer from "../containers/HomePage.container";
import NotFoundPage from "../NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PrivateRoute from "../PrivateRoute";
import Clients from "../presentations/Clients"
import Layout from '../containers/Layout.container';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Home extends React.Component {
    render() {
        // const activeStyle = { color: 'blue' };
        return (
            <div>
                <Layout history={this.props.history}/>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePageContainer} />
                    <PrivateRoute exect path="/clients" component={Clients} />
                    <PrivateRoute path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

Home.propTypes = {
    children: PropTypes.element
};
export default Home;
