import gql from 'graphql-tag';

const fetchSongs = gql`
{
    songs {
        id
        title
    }
}
`;

module.exports = {
    fetchSongs
};