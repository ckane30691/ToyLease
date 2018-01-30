import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

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
					Examine Toy
						<div className="toy-show">
  						<h3>{toy.title}</h3>
  						<p>{toy.about}</p>
              <Image publicId={toy.image_url} cloudName="dwuiaymbx" >
                <Transformation height="275" width="350" crop="scale" />
              </Image>
              <p>${toy.price}.00</p>
              <p>{toy.toy_type}</p>
              <p>{toy.created_at}</p>
    				</div>
					<Link className="toy-show-edit-btn"
						to={`/toys/${this.props.match.params.toyId}/edit`}>
						Edit
					</Link>
				</div>
			</div>
		)
	}

}

export default ToyShow;
