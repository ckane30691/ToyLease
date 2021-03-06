import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const ToyIndexItem = ({ toy, currentUser, deleteToy }) => {

  const deleteBtn = currentUser && toy &&
  currentUser.id === toy.owner_id ?
  <button className="toy-delete-btn"
    onClick={() => deleteToy(toy.id)}>
    Delete Your Post
  </button>
  : "";

  return (
    <div>
      <Link to={`/toys/${toy.id}`}>
        <div className='toy-index-item'>
          <Image publicId={toy.image_url} cloudName="dwuiaymbx" >
            <Transformation height="200" width="200" crop="scale" />
          </Image>
          <ul className="toy-attributes">
            <li>{toy.title}</li>
            <li>${toy.price}.00 per night</li>
            <li>{toy.toy_type}</li>
          </ul>
        </div>
    </Link>
    {deleteBtn}
  </div>
  );
};

export default ToyIndexItem;
