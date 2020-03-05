import { gql } from "apollo-boost";
export const LOG_IN = gql`
  mutation requestSecret($eamil: String!) {
    requestSecret(email: $email)
  }
`;
