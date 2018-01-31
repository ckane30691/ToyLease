import { combineReducers } from 'redux';
import ToysReducer from './toys_reducer';
import LeasingReducer from './leasing_reducer';

export default combineReducers({
  toys: ToysReducer,
  leasings: LeasingReducer
});
