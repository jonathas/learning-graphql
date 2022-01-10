import gql from 'graphql-tag';

const listSongs = gql`
{
  songs {
    id
    title
  }
}
`;

const getSong = gql`
query GetSong($id: ID!) {
  song(id: $id) {
    id
    title
    lyrics {
      id
      content
      likes
    }
  }
}
`;

const addSong = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
`;

const deleteSong = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

const addLyricToSong = gql`
mutation AddLyricToSong($content: String!, $songId: ID!) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    title
    lyrics {
      id
      content
      likes
    }
  }
}
`;

const likeLyric = gql`
mutation LikeLyric($id: ID!) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

export {
  listSongs,
  getSong,
  addSong,
  deleteSong,
  addLyricToSong,
  likeLyric
};
