import {
  RECEIVE_LEASING_ERRORS,
  RECEIVE_LEASING
} from '../actions/leasing_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const _nullErrors = [];

const LeasingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEASING_ERRORS:
      return action.errors;
    case RECEIVE_LEASING:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default LeasingErrorsReducer;
