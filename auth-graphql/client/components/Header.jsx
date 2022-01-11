import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCurrentUser, logout } from '../graphql/queries-and-mutations';
import { Link } from 'react-router';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: getCurrentUser }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <div />;
    }

    if (user) {
      return <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>;
    }
    return (
      <div>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logout)(
  graphql(getCurrentUser)(Header)
);
