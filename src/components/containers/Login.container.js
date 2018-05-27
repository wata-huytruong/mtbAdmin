import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/mainActions';
import Login from '../presentations/Login';

export class LoginContainer extends React.Component {
    render() {
        return (
            <Login
                {...this.props}
            />
        );
    }
}

LoginContainer.propTypes = {
    login: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.pageLoad.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(actions.login, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
