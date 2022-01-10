import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { listSongs, deleteSong } from '../graphql/queries-and-mutations';

class SongList extends Component {
  onSongDelete(id) {
    // the methods here are populated by Apollo
    this.props.mutate({ variables: { id } })
      // refreshing like this because the query is associated with this same component
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`songs/${id}`}>{title}</Link>
        <i
          className="material-icons"
          role="button"
          tabIndex="-1"
          onClick={() => this.onSongDelete(id)}
          onKeyPress={() => {}}
        >
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(
  graphql(listSongs)(SongList),
);
