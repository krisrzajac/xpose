import home from './reducers/homeReducer';
import common from './reducers/commonReducer';
import battle from './reducers/battleReducer';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';



export default combineReducers({
  common,
  home,
  battle,
  router: routerReducer
})