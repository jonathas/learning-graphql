import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import { login, getCurrentUser } from '../graphql/queries-and-mutations';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  /**
   * this.props => the old, current set of props
   * nextProps => the next set of props that will be in place when the component rerenders
   */
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      // user was not logged in before, but just logged in
      hashHistory.push('/dashboard');
    }
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
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
        <div className="errors">
          {this.state.errors.map(error => <div key={error}>{error}</div>)}
        </div>
      </div>
    );
  }
}

export default graphql(getCurrentUser)(
  graphql(login)(LoginForm)
);
