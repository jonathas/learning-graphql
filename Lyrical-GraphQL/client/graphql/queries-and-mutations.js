import gql from 'graphql-tag';

const fetchSongs = gql`
{
  songs {
    id
    title
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

export {
  fetchSongs,
  addSong,
  deleteSong,
};
