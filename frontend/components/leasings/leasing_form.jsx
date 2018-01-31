import React from 'react';

class LeasingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.leasing;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.leasing);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createLeasing(this.state)
    .then(() => {
      this.setState({
          start_date: '',
          end_date: '',
          success_message: ['You successfully made a leasing!']
      });
    }
  );
  }

  render() {
    return (
      <div className='leasing-form-container'>
        <div>
          <h1>Lease this toy!</h1>
        </div>
        <div>
          <h2>Starting from ${this.props.toy.price}</h2>
        </div>
        <div>

          {this.state.success_message}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='start-date-container'>

            <label>Start Date</label>
            <input type='date'
              placeholder='Start Date'
              value={this.state.start_date}
              onChange={this.update('start_date')}/>

          </div>
          <div className='end-date-container'>

            <label>End Date</label>
            <input type='date'
              placeholder='End Date'
              value={this.state.end_date}
              onChange={this.update('end_date')}/>

          </div>
          <input className='button'
                 type='submit'
                 value='Submit'/>
        </form>
      </div>
    );
  }
}

export default LeasingForm;
