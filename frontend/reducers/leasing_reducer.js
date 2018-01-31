import merge from 'lodash/merge';

import {
	RECEIVE_LEASING,
	RECEIVE_LEASINGS,
	REMOVE_LEASING,
} from '../actions/leasing_actions';

const LeasingReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_LEASINGS:
			return action.leasings;
		case RECEIVE_LEASING:
			newState[action.leasing.id] = action.leasing;
			return newState;
		case REMOVE_LEASING:
			delete newState[action.leasing.id];
			return newState;
		default:
				return state;
	}
};

export default LeasingReducer;
