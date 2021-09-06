import { gql } from '@apollo/client';

//Will need to grab dynamic category and label from front end/user 
//to put into the QUERY_ALL_POSTS below then when there are no category or label 
//it will query all, and if there is one or both category and/or label chosen
//it will include those in the query

//category and label are hardcoded here only for now
const category = 'None'
const label = 'None'

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
        posts (cagegory: ${category}, label: ${label}){
            _id
            title
            body
            author
            dateCreated
            likes
            category
            label
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
      category
      label
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


