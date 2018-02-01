import { connect } from 'react-redux';
import {
	createLeasing,
} from '../../actions/leasing_actions';
import LeasingForm from './leasing_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
	let leasing = {
    start_date: "",
    end_date: "",
    toy_id: ownProps.match.params.toyId
  };

	return {
		leasing,
		errors: state.errors.leasing
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createLeasing: leasing => dispatch(createLeasing(leasing)),
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(LeasingForm));
