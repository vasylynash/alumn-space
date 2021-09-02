import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, yearOfGraduation: String!, class: String!) {
    addUser(username: $username, email: $email, password: $password, yearOfGraduation: $yearOfGraduation, class: $class) {
      token
      user {
          _id
          username
          email
          firstname
          lastname
          image
          registrationDate
          role
          bio
          yearOfGraduation
          linkedIn
          gitHub
          class
          posts {
              _id
              title
              body
              author
              dateCreated
              likes
              comments {
                  _id
                  body
                  author
                  dateCreated
                  likes
              }
          }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!, $author: String!) {
      addPost(title: $title, body: $body, author: $author) {
          _id
          title
          body
          author
          dateCreated
          likes
          comments {
              _id
              body
              author
              dateCreated
              likes
          }
      }
  }
  `;

export const UPDATE_POST = gql`
    mutation updatePost($postId: ID!, $title: $String!, $body: String!) {
        updatePost(postId: $postId, title: $title, body: $body) {
            _id
            title
            body
        }
    }
    `;

export const REMOVE_POST = gql`
        mutation removePost($postId: ID!) {
            removePost(postId: $postId) {
               _id
               posts {
                   _id
                   title
                   body
                   author
                   dateCreated
                   likes
                   comments {
                       _id
                       body
                       author
                       dateCreated
                       likes
                   }
               } 
            }
        }
        `;

export const ADD_COMMENT = gql`
        mutation addComment(postId: ID!, commentText: String!) {
            addComment(postId: $postId, commentText: $commentText) {
                _id
                title
                body
                author
                dateCreated
                likes
                comments {
                    _id
                    body
                    author
                    dateCreated
                    likes
                }
            }
        }
`;

export const UPDATE_COMMENT = gql`
        mutation updateComment(commentId: ID!, commentText: String!) {
            updateComment(commentId: $commentId, commentText: $commentText) {
                _id
                title
                body
                author
                dateCreated
                likes
                comments {
                    _id
                    body
                    author
                    dateCreated
                    likes
                }
            }
        }
`;

export const REMOVE_COMMENT = gql`
        mutation removeComment(commentId: ID!) {
            removeComment(commentId: $commentId) {
                _id
                title
                body
                author
                dateCreated
                likes
                comments {
                    _id
                    body
                    author
                    dateCreated
                    likes
                }
            }
        }
`;

