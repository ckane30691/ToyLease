import React from 'react';
import LeasingIndexItem from './leasing_index_item';
import { Link } from 'react-router-dom';

class LeasingIndex extends React.Component {
  componentDidMount() {
		this.props.fetchLeasings();
	}

  render() {
    return (
			<div className="leasing-index-body">
				<div className="leasing-index-container">
					<h2 className="feature-header">Your Leasings</h2>

					<ul className='leasing-list'>
						{
							this.props.leasings.map(leasing => (
              <div key={leasing.id} className='leasing-index-card'>
  							<LeasingIndexItem
  								deleteLeasing={this.props.deleteLeasing}
  								leasing={leasing}	/>
              </div>
							))
						}
					</ul>
				</div>
			</div>
		);
  }
}

export default LeasingIndex;
