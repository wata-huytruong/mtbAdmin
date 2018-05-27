import * as types from '../constants/actionTypes';

import { getFormattedDateTime } from '../utils/dates';
import * as userServices from '../services/userServices';
import { checkError, catchError } from '../core/error.handler';
import toastr from 'toastr'

export function loginFail() {
    localStorage.removeItem('access_token');
    return {
        type: types.LOGIN_FAILURE
    }
}

export function logout() {
    localStorage.removeItem('access_token');
    return {
        type: types.LOGOUT
    }
}

export function login(email, password, redirect = '/') {
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_REQUEST
        })
        userServices.login(email, password, function (error, result, status, xhr) {
            if (error) {
                return catchError(xhr, dispatch, types.LOGIN_FAILURE, redirect);
                dispatch({
                    type: types.LOGIN_FAILURE
                })
            }
            const { access_token, user, company } = result.data;
            if (!user.admin) {
                dispatch({
                    type: types.LOGIN_FAILURE
                })
                return toastr.error('user is not a admin');
            }
            localStorage.access_token = access_token;
            return dispatch({
                type: types.LOGIN_SUCCESS,
                currentUser: user,
                company: company
            });
        });
    }
}
