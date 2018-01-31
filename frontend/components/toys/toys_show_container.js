import { connect } from 'react-redux';
import { fetchToy, deleteToy } from '../../actions/toy_actions';
import ToyShow from './toys_show';

const mapStateToProps = (state, ownProps) => {
	const toy = state.entities.toys[ownProps.match.params.toyId];
	return {
		toy,
		currentUser: state.session.currentUser
	};
};

const mapDispatchToProps = dispatch => ({
	fetchToy: id => dispatch(fetchToy(id)),
	deleteToy: id => dispatch(deleteToy(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToyShow);
