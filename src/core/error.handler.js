import { browserHistory } from 'react-router';
import { loginFail } from '../actions/mainActions';
import toastr from 'toastr';
import _ from 'lodash';

export function catchError(xhr, dispatch, type, ) {
    let responseText = undefined
    try {
        responseText = JSON.parse(xhr.responseText)
        if (xhr.status == 401) {
            dispatch(loginFail())
            // browserHistory.push(`/login?next=${redirect}`)
        }

        return dispatch({
            type: type,
            error: checkError(responseText, xhr.status)
        })
    }
    catch (err) {
        let error = {}
        if (xhr && xhr.status == 401) {
            // error.exception = true;
            // error.message = 'Unauthorized'
            error = undefined;
            toastr.error("You have no permission for this action")
            dispatch(loginFail())
            // browserHistory.push(`/login?next=${redirect}`)
        }
        else {
            error.exception = true;
            error.message = 'Server error'
        }
        if (xhr && xhr.readyState == 0) {
            error.exception = true;
            error.message = 'No connection to server'
        }
        return dispatch({
            type: type,
            error: error
        })
    }
}


export function checkError(data, status) {
    let error = {
        code: 0,
        message: '',
        exception: false
    }
    if (data) {
        if (data == null && data.items == null) {
            error.code = 1000
            error.message = 'PAGE_NOT_FOUND'
        }
        if (data.errors && data.errors.length > 0) {
            error.code = data.errors[0].code;
            error.message = data.errors[0].message;

        }
        if (data.error) {
            error.code = data.error.code;
            error.message = data.error.message;
        }
    }

    error.status = status;
    return error;

}