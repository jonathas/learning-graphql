import gql from 'graphql-tag';

const currentUser = gql`
  {
    user {
      id
      email
    }
  }
`;

const login = gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
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
  login,
  logout
};
