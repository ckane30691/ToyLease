import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import LeasingFormContainer from '../leasings/leasing_form_container'

class ToyShow extends React.Component {

	componentDidMount() {
		this.props.fetchToy(this.props.match.params.toyId);
	}

	render() {
		const toy = this.props.toy ? this.props.toy : {
      title: "",
      about: "",
      image_url: "",
      price: "",
      toy_type: "",
      created_at: ""
    };

		const createdDate = new Date(toy.created_at);
			createdDate.setDate(createdDate.getDate() + 1);

		const edit = this.props.currentUser && this.props.toy &&
			this.props.currentUser.id === this.props.toy.owner_id ?
			<Link className="toy-edit-btn"
				to={`/toys/${this.props.match.params.toyId}/edit`}>
				Edit Your Post
			</Link>
			: "";

		return (
			<div className="toy-index-body">
				<div className="toy-show-container">
					<h1 className="feature-header lease-header">Lease Toy</h1>
						<div className="toy-show">
							<div className="toy-show-card">
								<Image publicId={toy.image_url} cloudName="dwuiaymbx" >
									<Transformation height="275" width="350" crop="scale" />
								</Image>
								<div className="toy-description">
		  						<h3>{toy.title}</h3>
		  						<p>Description: {toy.about}</p>
		              <p>Price per day: ${toy.price}.00</p>
		              <p>Toy type: {toy.toy_type}</p>
		              <p>Created on: {(createdDate.getMonth() + 1) + "/" + createdDate.getDate()  + "/" + createdDate.getFullYear()}</p>
								</div>
								{edit}
	    				</div>
							<LeasingFormContainer toy={toy}/>
					</div>
				</div>
			</div>
		);
	}

}

export default ToyShow;
