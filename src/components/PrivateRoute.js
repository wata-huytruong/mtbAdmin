import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { URL } from '../core/app.routes';
import { getUrlPath } from '../utils/RoutesUtils';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.access_token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: getUrlPath(URL.LOGIN),
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
};

export default PrivateRoute;