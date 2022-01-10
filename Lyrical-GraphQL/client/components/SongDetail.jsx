import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { getSong } from '../graphql/queries-and-mutations';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { loading, song } = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    );
  }
}

export default graphql(getSong, { options: (props) => (
  { variables: { id: props.params.id } }
) })(SongDetail);
