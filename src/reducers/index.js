import { combineReducers } from 'redux';
import main from './mainReducer';
import payLoad from './payLoadReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  main,
  payLoad,
  routing: routerReducer
});

export default rootReducer;
