import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query GET_ME {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
