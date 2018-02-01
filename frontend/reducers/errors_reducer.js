import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import toy from './toy_errors_reducer';
import leasing from './leasing_errors_reducer';

export default combineReducers({
  session,
  toy,
  leasing
});
