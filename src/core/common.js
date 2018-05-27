import toastr from 'toastr';
import _ from 'lodash';

export function handleCRUDAction(state, action) {
    let newState = {};
    if (action.error && action.error.code != 0 || (action.error && action.error.exception)) {
        newState = _.assign({}, state, { payload: { isLoading: false, error: action.error } });
        // newState = update(state, {
        //     payload: {
        //         isLoading: {
        //             $set: false
        //         },
        //         error: {
        //             $set: action.error
        //         },
        //     },
        // });
        return newState;
    }
    if (action.errors && action.errors.length > 0) {
        newState = _.assign({}, state, { payload: { isLoading: false, errors: actions.errors } });
        // newState = update(state, {
        //     payload: {
        //         isLoading: {
        //             $set: false
        //         },
        //         errors: {
        //             $set: action.errors
        //         },
        //     },
        // });
        return newState;
    }
    newState = _.assign({}, state);
    newState = _.assign({}, state, { payload: { success: true, isLoading: false } });
    // newState = update(newState, {
    //     payload: {
    //         success: {
    //             $set: true
    //         },
    //         redirect: {
    //             $set: action.redirect
    //         },
    //         isLoading: {
    //             $set: false
    //         }
    //     }


    // })
    return newState;
}