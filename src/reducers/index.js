import { combineReducers } from 'redux';
import main from './mainReducer';
import pageLoad from './pageLoadReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  main,
  pageLoad,
  routing: routerReducer
});

export default rootReducer;
