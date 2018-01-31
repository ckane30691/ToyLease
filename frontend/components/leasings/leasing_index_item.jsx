import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const LeasingIndexItem = ({ leasing, deleteLeasing }) => {
  const { lease_duration, start_date, end_date, toy,
          total_cost_of_lease} = leasing;

  const {toy_id, title, about, image_url, price } = leasing.toy;

	return (
		<li>
			<Link className='leasing-title' to={`/toys/${toy_id}`}>
        <Image publicId={ image_url } cloudName='dwuiaymbx'>
        <Transformation height='200' width='200' crop='scale' />
      </Image>
			</Link>
      <ul>
        <li>{ title }</li>
        <li>{ about }</li>
        <li>From { start_date } to { end_date }</li>
        <li>{ lease_duration } days of playtime!</li>
        <li>${ price } x { lease_duration } = ${ total_cost_of_lease } due</li>
      </ul>
			<button className="delete-project-btn"
        onClick={() => deleteLeasing(leasing.id)} >
        X
      </button>
		</li>
	);
};

export default LeasingIndexItem;
