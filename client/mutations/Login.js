import gql from 'graphql-tag';

//admin@emil.com, pasword123

export default gql`
  mutation Login($email: String, $password: String){
    login(email: $email, password: $password){
      id
      email
    }
  }
`;
