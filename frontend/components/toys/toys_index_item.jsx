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
          <li>${toy.price} per night</li>
          <li>{toy.toy_type}</li>
        </ul>
      </div>
  </Link>
  );
};

export default ToyIndexItem;
