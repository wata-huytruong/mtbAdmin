import * as types from '../constants/actionTypes';
// import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { handleCRUDAction } from '../core/common';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function mainReducer(state = initialState.mainReducer, action) {
  let newState;
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      newState = handleCRUDAction(state, action);
      newState.payload.success = false;
      newState.currentUser = action.currentUser;
      newState.company = action.company;
      return newState;
      // newState = handleCRUDAction()
      // newState = objectAssign({}, state, { currentUser: action.currentUser, company: action.company });
      // return newState;
    }
    case types.LOGOUT: {
      newState = objectAssign({}, state, { currentUser: {}, company: {} });
      return newState;
    }
    default:
      return state;
  }
}
