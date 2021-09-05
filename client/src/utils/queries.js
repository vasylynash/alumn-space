import { gql } from '@apollo/client';
//we will need to import the user selected category and label to be able to search for those
//in the QUERY_ALL_POSTS below



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
        posts (category:${category}, label:${label}){
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
