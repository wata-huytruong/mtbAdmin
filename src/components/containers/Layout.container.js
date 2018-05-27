import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/mainActions';
import Layout from '../presentations/Layout';

export class LayoutContainer extends React.Component {

    render() {
        return (
            <Layout
                {...this.props}
            />
        );
    }
}

LayoutContainer.propTypes = {
    logout: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(actions.logout, dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(LayoutContainer);
