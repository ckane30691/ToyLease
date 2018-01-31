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
		return (
			<div className="toy-index-body">
				<Link
					className="project-title"
					to={`/toys`}>
					Back Button
				</Link>
				<div className="toy-show-container">
					<h1 className="feature-header">Lease Toy</h1>
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
		              <p>Created at: {toy.created_at}</p>
								</div>
								<Link className="toy-show-edit-btn"
									to={`/toys/${this.props.match.params.toyId}/edit`}>
									Edit
								</Link>
								<LeasingFormContainer toy={toy}/>
	    				</div>
					</div>
				</div>
			</div>
		);
	}

}

export default ToyShow;
