import { connect } from 'react-redux';
import {
	createToy,
	updateToy,
	fetchToy,
} from '../../actions/toy_actions';
import ToyForm from './toys_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let toy = {
    title: "",
    image_url: "",
    price: "",
    about: "",
    toy_type: "",
  };
	if (ownProps.match.params.toyId) {
		toy = state.entities.toys[ownProps.match.params.toyId];
	}
	return {
		toy,
		errors: state.errors.toy
	};
};


const mapDispatchToProps = (dispatch, ownProps) => {
	const formType = ownProps.match.path == "/toys/:toyId/edit" ?
		 'edit' :
		 'new';
	let processForm = (formType === 'new') ? createToy : updateToy;
	return {
		processForm: toy => dispatch(processForm(toy)),
		fetchToy: id => dispatch(fetchToy(id)),
    formType
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ToyForm));
