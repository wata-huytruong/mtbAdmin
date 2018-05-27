import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/mainActions';
import HomePage from '../presentations/HomePage';

export class HomePageContainer extends React.Component {

    render() {
        return (
            <HomePage
                {...this.props}
            />
        );
    }
}

HomePageContainer.propTypes = {
    currentUser: PropTypes.object.isRequired,
    company: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.payLoad.loading,
        currentUser: state.main.currentUser,
        company: state.main.company
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(actions.logout, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);
