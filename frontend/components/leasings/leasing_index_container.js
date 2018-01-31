import { connect } from 'react-redux';
import LeasingIndex from './leasing_index';

import {
	fetchLeasings,
	createLeasing,
	deleteLeasing
} from '../../actions/leasing_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		leasings: Object.keys(state.entities.leasings)
		.map(id => state.entities.leasings[id]),
	};
};

const mapDispatchToProps = dispatch => ({
	fetchLeasings: () => dispatch(fetchLeasings()),
	deleteLeasing: id => dispatch(deleteLeasing(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LeasingIndex);
