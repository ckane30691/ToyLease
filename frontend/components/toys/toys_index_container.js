import { connect } from 'react-redux';
import ToyIndex from './toys_index';

import {
	fetchToys,
	fetchToy,
	createToy,
	deleteToy,
	updateToy
} from '../../actions/toy_actions';

const mapStateToProps = (state, ownProps) => {
	return {
		toys: Object.keys(state.entities.toys)
		.map(id => state.entities.toys[id]),
	};
};

const mapDispatchToProps = dispatch => ({
	fetchToys: () => dispatch(fetchToys()),
	fetchToy: id => dispatch(fetchToy(id)),
	createToy: toy => dispatch(createToy(toy)),
	deleteToy: id => dispatch(deleteToy(id)),
	updateToy: toy => dispatch(updateToy(toy))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToyIndex);
