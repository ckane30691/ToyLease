import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const ToyIndexItem = ({ toy }) => {

  return (
    <Link to={`/toys/${toy.id}`}>
      <div className='toy-index-item'>
        <Image publicId={toy.image_url} cloudName="dwuiaymbx" >
          <Transformation height="275" width="350" crop="scale" />
        </Image>
        <ul>
          <li>{toy.title}</li>
          <li>${toy.rate} per night</li>
          <li>{toy.city}</li>
          <li>{toy.country}</li>
          <li>{toy.room_type}</li>
        </ul>
        <ReactStars count={ 5 }
          value={ toy.average_rating }
          edit={ false }
          color2='#FC3468'
          size={ 20 }/>
      </div>
  </Link>
  );
};

export default ToyIndexItem;
