import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const LeasingIndexItem = ({ leasing, deleteLeasing }) => {
  const { lease_duration, start_date, end_date, toy,
          total_cost_of_lease} = leasing;

const startDate = new Date(start_date);
startDate.setDate(startDate.getDate() + 1);
const endDate = new Date(end_date);
endDate.setDate(endDate.getDate() + 1);

  const {id, title, about, image_url, price } = leasing.toy;

	return (
		<li>
			<Link className='leasing-link' to={`/toys/${id}`}>
        <Image publicId={ image_url } cloudName='dwuiaymbx'>
        <Transformation height='200' width='200' crop='scale' />
      </Image>
			</Link>
      <ul className="leasing-attrs">
        <li className='lease-title'>{ title }</li>
        <li>{ about }</li>
        <li className='date'>From <span>{ (startDate.getMonth() + 1) + "/" + startDate.getDate()  + "/" + startDate.getFullYear() }</span> to <span>{ (endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear() }</span></li>
        <li>{ lease_duration } days of playtime!</li>
        <li>${ price } x { lease_duration } = ${ total_cost_of_lease } due</li>
      </ul>
			<button className="cancel-lease-button"
        onClick={() => deleteLeasing(leasing.id)} >
        Cancel Lease
      </button>
		</li>
	);
};

export default LeasingIndexItem;
