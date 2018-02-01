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
    const title = this.props.toy ? this.state.title : '';
    const about = this.props.toy ? this.state.about : '';
    const price = this.props.toy ? this.state.price : '';
    const toy_type = this.props.toy ? this.state.toy_type : '';
    const image_url = this.props.toy ? this.state.image_url : '';

    let formTitle = this.props.formType === 'new' ?
    "Post a new toy!"
    : "Edit your toy";

    return(
      <div className="toy-index-container">
        <h1 className='feature-header'>{formTitle}</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <input required className="toy-title-input" type="text"
            value={title}
            onChange={this.update('title')}
            placeholder="Give your post a title" />

          <div className="drop-container">Upload an image of your toy:
          <Dropzone multiple={ false }
                    accept='image/*'
                    onDrop={ this.onDrop }
                    className='toy-image-dropbox'>
            <p>Drag and drop an Image of your toy</p>
          </Dropzone>
          <div className="selected-image">Your current selected image is: </div><div>{image_url}</div>
          </div>


          <div className="price-container">Set your price:
            <input required className="toy-price-input" type="number"
            value={price}
            min="1"
            onChange={this.update('price')}
            placeholder="1" />.00
          </div>

          <div>Add Extra Details:
          <textarea className="toy-about-input" type="text"
  					value={about ? about : ''}
  					onChange={this.update('about')} />
        </div>

          <div>
            <label>What Type of Toy is This?</label>
            <select defaultValue={ toy_type !== '' ? toy_type : 'Please Select' }
                    onChange={ this.update('toy_type') }>
              <option disabled>Please Select</option>
              <option value='Stuffed Animal'>Stuffed Animal</option>
              <option value='Action Figure'>Action Figure</option>
              <option value='Doll'>Doll</option>
              <option value='Sports'>Sports</option>
              <option value='Other'>Other</option>
            </select>
          </div>




          <input className="toy-submit" type="submit" value="Post toy!" />

        </form>
      </div>
    );
  }
}

export default ToyForm;
