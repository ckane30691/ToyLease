import merge from 'lodash/merge';

import {
	RECEIVE_TOY,
	RECEIVE_TOYS,
	REMOVE_TOY,
} from '../actions/toy_actions';

const ToysReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_TOYS:
			return action.toys;
		case RECEIVE_TOY:
			newState[action.toy.id] = action.toy;
			return newState;
		case REMOVE_TOY:
			delete newState[action.toy.id];
			return newState;
		default:
				return state;
	}
};

export default ToysReducer;
