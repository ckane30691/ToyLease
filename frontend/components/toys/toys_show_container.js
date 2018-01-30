import { connect } from 'react-redux';
import { fetchToy } from '../../actions/toy_actions';
import ToyShow from './toys_show';

const mapStateToProps = (state, ownProps) => {
	const toy = state.entities.toys[ownProps.match.params.toyId];
	return {
		toy
	};
};

const mapDispatchToProps = dispatch => ({
	fetchToy: id => dispatch(fetchToy(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToyShow);
