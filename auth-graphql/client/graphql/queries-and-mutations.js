import gql from 'graphql-tag';

const signup = gql`
mutation Signup($email: String, $password: String) {
  signup(email: $email, password: $password) {
    id
    email
  }
}
`;

const getCurrentUser = gql`
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
  signup,
  getCurrentUser,
  login,
  logout
};
