import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { likeLyric } from '../graphql/queries-and-mutations';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div>
          <i
            className="material-icons"
            onClick={() => this.onLike(id)}
            role="button"
            tabIndex="-1"
            onKeyPress={() => {}}
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
