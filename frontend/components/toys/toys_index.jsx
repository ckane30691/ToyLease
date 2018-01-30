import React from 'react';
import ToyIndexItem from './toys_index_item';
import { Link } from 'react-router-dom';

class ToyIndex extends React.Component {
  componentDidMount() {
		this.props.fetchToys();
	}

  render() {
    return (
			<div className="toy-index-body">
				<div className="generic-index-container">
					<h2 className="feature-header">Available Toys</h2>

					<ul className='toy-list'>
						{
							this.props.toys.map(toy => (
							<ToyIndexItem
								key={toy.id}
								deleteToy={this.props.deleteToy}
								updateToy={this.props.updateToy}
								toy={toy}	/>
							))
						}
					</ul>
				</div>
			</div>
		);
  }
}

export default ToyIndex;
