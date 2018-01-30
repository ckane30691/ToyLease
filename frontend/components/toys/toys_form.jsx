import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'mavepuea';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dwuiaymbx/image/upload';

class ToyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.toy;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentWillMount() {
		if (this.props.match.params.toyId) {
			this.props.fetchToy(this.props.match.params.toyId);
		}
	}

  componentWillReceiveProps(newProps) {
		this.setState(newProps.toy);
	}

  update(field) {
		return e => this.setState({[field]: e.target.value});
	}

  update(field) {
    return e => {
      let value = e.target.value;
      if (field === 'price') value = parseInt(value);
      this.setState({ [field]: value });
    };
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.processForm(this.state)
		.then(res => this.props.history.push(`/toys/${res.toy.id}`));
	}

  onDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  //NOTE:https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_api

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((error, response) => {
      if (error) {
        console.error(error);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url,
          uploadedFile: null
        });
      }
    });
  }

  render() {
    const { id, title, about, price, toy_type } = this.state;
    return(
      <div>
        <h2>Upload an image of your toy</h2>
        <Dropzone multiple={ false }
                  accept='image/*'
                  onDrop={ this.onDrop }
                  className='lodging-image-dropbox'>
          <p>Drag and drop an Image of your toy</p>
        </Dropzone>
      </div>
    );
  }
}

export default ToyForm;
