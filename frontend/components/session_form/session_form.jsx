import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentDidMount() {
    // this.props.receiveCurrentUser(null);
  }


  componentWillReceiveProps(newProps) {
    if (newProps.formType !== this.props.formType) {
      // this.props.receiveCurrentUser(null);
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/projects");
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <h1>Hooray</h1>;
  }
}

export default SessionForm;
