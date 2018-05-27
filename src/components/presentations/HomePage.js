import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../core/app.routes';
import { getUrlPath } from '../../utils/RoutesUtils';

class HomePage extends React.Component {

  componentDidMount() {
    let self = this

    // $('#navCollapseIcon').addEventListener('click', function () {
    //   $('.nav-icon').toggleClass('open');
    // })
  }

  handleLogout = () => {
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
                    <a className="nav-link" href="#">Invoices</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Users</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Payables</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Exports</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Clients</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Reports</a>
                  </li>
                </ul>
                <ul className="navbar-nav nav-sub">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Help</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Setting</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Log out</a>
                  </li>
                </ul>
                <span className="navbar-text">
                  <a className="icon" href="#">
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
    );
  }
}

export default HomePage;
