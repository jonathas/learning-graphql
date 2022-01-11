import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import { signup, getCurrentUser } from '../graphql/queries-and-mutations';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: getCurrentUser }]
    }).catch(res => {
      this.setState({ errors: res.graphQLErrors.map(err => err.message) });
    });
  }

  render() {
    return (
      <div>
        <h3>Sign up</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
        <div className="errors">
          {this.state.errors.map(error => <div key={error}>{error}</div>)}
        </div>
      </div>
    );
  }
}

export default graphql(signup)(SignupForm);
