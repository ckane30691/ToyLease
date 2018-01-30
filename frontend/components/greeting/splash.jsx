import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

const Splash = () => (
  <div className='splash'>
		<div className="hero-img-container">
      <img className="hero-img" alt="hero image"
        src="https://s3.amazonaws.com/toy-lease/mly.jpg"/>
    </div>

    <div className="intro-container">

			<p className="intro-body">
				Everybody wishes they had more toys and now is your chance to
        play with every toy without breaking the bank.
			</p>
    </div>
  </div>
);

export default Splash;
