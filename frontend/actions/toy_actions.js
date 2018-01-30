import * as APIUtil from '../util/toy_api_util';

export const RECEIVE_TOYS = "RECEIVE_TOYS";
export const RECEIVE_TOY = "RECEIVE_TOY";
export const RECEIVE_TOY_ERRORS = "RECEIVE_TOY_ERRORS";
export const REMOVE_TOY = "REMOVE_TOY";

export const receiveToy = toy => ({
	type: RECEIVE_TOY,
	toy
});

export const receiveToys = toys => ({
	type: RECEIVE_TOYS,
	toys
});

export const removeToy = toy => ({
	type: REMOVE_TOY,
	toy
});

export const receiveToyErrors = errors => ({
	type: RECEIVE_TOY_ERRORS,
	errors
});

export const fetchToys = projectId => dispatch => (
	APIUtil.fetchToys(projectId).then(toys => (
		dispatch(receiveToys(toys))
	), err => (
		dispatch(receiveToyErrors(err.responseJSON))
	))
);

export const fetchToy = id => dispatch => (
	APIUtil.fetchToy(id).then(toy => (
		dispatch(receiveToy(toy))
	), err => (
		dispatch(receiveToyErrors(err.responseJSON))
	))
);

export const createToy = toy => dispatch => (
	APIUtil.createToy(toy).then(toy => (
		dispatch(receiveToy(toy))
	), err => (
		dispatch(receiveToyErrors(err.responseJSON))
	))
);

export const updateToy = toy => dispatch => (
	APIUtil.updateToy(toy).then(toy => (
		dispatch(receiveToy(toy))
	), err => (
		dispatch(receiveToyErrors(err.responseJSON))
	))
);

export const deleteToy = id => dispatch => (
	APIUtil.deleteToy(id).then(toy => (
		dispatch(removeToy(toy))
	), err => (
		dispatch(receiveToyErrors(err.responseJSON))
	))
);
