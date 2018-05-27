import React from 'react';
import { URL } from '../../core/app.routes';
import { getUrlPath } from '../../utils/RoutesUtils';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(url) {
        this.props.history.push(url)
    }
    handleLogout() {
        this.props.logout();
        this.props.history.push(getUrlPath(URL.LOGIN));
    }

    render() {
        return (
            <div className="">
                <header>
                    <nav className="navbar navbar-expand-xl">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={require('../../assets/images/logo.png')} alt="" />
                            </a>

                            <div ref="icon" id="navCollapseIcon" className="nav-icon" data-toggle="collapse" data-target="#navbarText">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav nav-main mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.INVOICES))}>Invoices</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.USERS))}>Users</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.PAYABLES))}>Payables</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.EXPORTS))}>Exports</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.CLIENTS))}>Clients</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.REPORTS))}>Reports</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav nav-sub">
                                    <li className="nav-item active">
                                        <a className="nav-link">Help</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Setting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.handleRedirect.bind(this, getUrlPath(URL.CLIENTS))}>Log out</a>
                                    </li>
                                </ul>
                                <span className="navbar-text">
                                    <a className="icon">
                                        <img src={require('../../assets/images/icon-01.png')} alt="" />
                                    </a>
                                    <a className="icon" href="#">
                                        <img src={require('../../assets/images/icon-02.png')} alt="" />
                                    </a>
                                    <a className="icon" onClick={this.handleLogout}>
                                        <img src={require('../../assets/images/icon-03.png')} alt="" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;