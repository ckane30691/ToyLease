import { combineReducers } from 'redux';
import ToysReducer from './toys_reducer';

export default combineReducers({
  toys: ToysReducer
});
