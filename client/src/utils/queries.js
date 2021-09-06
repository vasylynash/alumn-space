import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query users {
    users {
      _id
      username
      email
      firstName
      lastName
      image
      registrationDate
      role
      bio
      yearOfGraduation
      linkedIn
      gitHub
      className
      posts {
        _id
        title
        body
        author
        dateCreated
        likes
        comments {
            _id
            commentText
            author
            dateCreated
            likes
        }
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      firstName
      lastName
      image
      registrationDate
      role
      bio
      yearOfGraduation
      linkedIn
      gitHub
      className
      posts {
        _id
        title
        body
        author
        dateCreated
        likes
        comments {
            _id
            commentText
            author
            dateCreated
            likes
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
    query posts {
        posts {
            _id
            title
            body
            author
            dateCreated
            likes
            comments {
                _id
                commentText
                author
                dateCreated
                likes
            }
    }
}
`;

export const QUERY_SINGLE_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      _id
      title
      body
      author
      dateCreated
      likes
      comments {
        _id
        commentText
        author
        dateCreated
        likes
      }
    }
  }
`;

export const QUERY_ALL_CATEGORIES = gql`
    query categories {
        categories {
            _id
            name
    }
}
`;

export const QUERY_ALL_LABELS = gql`
    query labels {
        labels {
            _id
            name
    }
}
`;



//Can't include posts in single category search as posts aren't connected to the categories in typeDefs
export const QUERY_SINGLE_LABEL = gql`
    query label($id: ID!) {
      label(id: $id) {
        _id
        name
      }
    }
`;