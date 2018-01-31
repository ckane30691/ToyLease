import * as APIUtil from '../util/leasing_api_util';

export const RECEIVE_LEASINGS = "RECEIVE_LEASINGS";
export const RECEIVE_LEASING = "RECEIVE_LEASING";
export const RECEIVE_LEASING_ERRORS = "RECEIVE_LEASING_ERRORS";
export const REMOVE_LEASING = "REMOVE_LEASING";

export const receiveLeasings = leasings => ({
	type: RECEIVE_LEASINGS,
	leasings
});

export const receiveLeasing = leasing => ({
	type: RECEIVE_LEASING,
	leasing
});

export const removeLeasing = leasing => ({
	type: REMOVE_LEASING,
	leasing
});

export const receiveLeasingErrors = errors => ({
	type: RECEIVE_LEASING_ERRORS,
	errors
});

export const fetchLeasings = () => dispatch => (
	APIUtil.fetchLeasings().then(leasings => (
		dispatch(receiveLeasings(leasings))
	), err => (
		dispatch(receiveLeasingErrors(err.responseJSON))
	))
);

export const createLeasing = leasing => dispatch => (
	APIUtil.createLeasing(leasing).then(leasing => (
		dispatch(receiveLeasing(leasing))
	), err => (
		dispatch(receiveLeasingErrors(err.responseJSON))
	))
);

export const updateLeasing = leasing => dispatch => (
	APIUtil.updateLeasing(leasing).then(leasing => (
		dispatch(receiveLeasing(leasing))
	), err => (
		dispatch(receiveLeasingErrors(err.responseJSON))
	))
);

export const deleteLeasing = id => dispatch => (
	APIUtil.deleteLeasing(id).then(leasing => (
		dispatch(removeLeasing(leasing))
	), err => (
		dispatch(receiveLeasingErrors(err.responseJSON))
	))
);
