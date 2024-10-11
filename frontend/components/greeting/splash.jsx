import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

const Splash = () => (
  <div className='splash'>
		<div className="hero-img-container">
      <img className="hero-img" alt="hero image"
        src="/assets/mly-4056ac8ec8a8f4c3c95fcdedb7527c93848b59b39679f93d8dc758e10b4005bd.jpg"/>
    </div>

    <div className="intro-container">

    </div>

    <div className="splash-signup">
				<div className="call-to-action">
					<h3>Try ToyLease Today: <span id="arrow">⟶</span></h3>

					<ul>
						<li><span>✓</span>Play with any toy you want for a low price</li>
						<li><span>✓</span>Get access to toys you otherwise couldn't afford</li>
						<li><span>✓</span>Make money from your old toys you don't use anymore</li>
						<li><span>✓</span>Discover new and interesting toys</li>
						<li><span>✓</span>Meet a user base with similar interests to yours</li>
					</ul>
				</div>

				<SessionFormContainer />
			</div>
  </div>
);

export default Splash;
