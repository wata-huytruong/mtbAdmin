import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout.container'

class HomePage extends React.Component {

  componentDidMount() {
    let self = this

    // $('#navCollapseIcon').addEventListener('click', function () {
    //   $('.nav-icon').toggleClass('open');
    // })
  }

  render() {
    return (
      <div>
        <Layout history={this.props.history}>
          Home Page
        </Layout>
      </div>
    );
  }
}

export default HomePage;
