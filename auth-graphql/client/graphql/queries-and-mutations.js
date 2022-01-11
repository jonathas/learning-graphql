import gql from 'graphql-tag';

const currentUser = gql`
  {
    user {
      id
      email
    }
  }
`;

const logout = gql`
mutation {
  logout {
    id
    email
  }
}
`;

export {
  currentUser,
  logout
};
