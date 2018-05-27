import React, { Component } from 'react'
// import '@/assets/scss/pages/clients/index.scss'
import Layout from '../containers/Layout.container';
import { NavLink, Route, Switch, Router } from "react-router-dom";

class Clients extends Component {
    render() {
        return (
            <Layout history={this.props.history}>
                <div className="container">
                    <div className="sidebar">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="block-01">32 total clients</div>
                            </div>
                            <div className="col-xl-6">
                                <div className="block-01">Retail 28</div>
                            </div>
                            <div className="col-xl-6">
                                <div className="block-01">Wholesale 4</div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row mb-5">
                            <div className="col-xl-5">
                                <div className="block-search">
                                    <img className="icon" src={require('../../assets/images/icon-search.png')} alt="" />
                                    <input type="text" className="form-control" placeholder="Type to search..." />
                                </div>
                            </div>
                            <div className="col-xl-7 text-right">
                                <button className="btn btn-blue">Add Client</button>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-xl-12">
                                <div className="block-client">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Clients;
