import {
  RECEIVE_TOY_ERRORS,
  RECEIVE_TOY
} from '../actions/toy_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';


const _nullErrors = [];

const ToyErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOY_ERRORS:
      return action.errors;
    case RECEIVE_TOY:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
        return state;
  }
};

export default ToyErrorsReducer;
