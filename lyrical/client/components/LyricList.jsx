import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { likeLyric } from '../graphql/queries-and-mutations';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      // Updating the UI before the response comes back from the server.
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
      // After the response comes back from the server, it overrides the optimistic response we set above.
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div>
          <i
            className="material-icons"
            onClick={() => this.onLike(id, likes)}
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
