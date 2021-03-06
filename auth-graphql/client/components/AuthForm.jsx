import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="row">
        <form action="post" className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
