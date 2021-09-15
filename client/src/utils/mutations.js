import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($registerInput: RegisterInput!) {
    addUser(registerInput: $registerInput) {
      token
      user {
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
  mutation addPost($title: String!, $body: String!, $category: Category!, $label: Label!) {
      addPost(title: $title, body: $body, category: $category, label: $label) {
          _id
          title
          body
          author {
              _id
              username
          }
          dateCreated
          totalLikes
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

  export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!, $category: Category!, $label: Label!) {
      updatePost(id: $id, title: $title, body: $body, category: $category, label: $label) {
          _id
          title
          body
          author
          dateCreated
          comments {
              _id
              commentText
              author
              dateCreated
              likes
          }
          totalLikes
          category
          label
      }
  }
  `;

//Check and fix the REMOVE_POST in next branch/PR
export const REMOVE_POST = gql`
        mutation removePost($id: ID!) {
            removePost(id: $id) {
               _id
            }
        }
`;

//check ADD UPDATE & REMOVE COMMENT in future branch/PR
export const ADD_COMMENT = gql`
        mutation addComment($postId: String!, $commentText: String!, $author: String!) {
            addComment(postId: $postId, commentText: $commentText, author: $author) {
                _id
                commentText
                author
                dateCreated
                likes
            }
        }
`;

export const UPDATE_COMMENT = gql`
        mutation updateComment($commentId: ID!, $commentText: String!) {
            updateComment(commentId: $commentId, commentText: $commentText) {
                _id
                title
                body
                author
                dateCreated
                totalLikes
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

export const REMOVE_COMMENT = gql`
        mutation removeComment($commentId: ID!) {
            removeComment(commentId: $commentId) {
                _id
                title
                body
                author
                dateCreated
                totalLikes
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

export const ADD_POST_LIKE = gql`
        mutation addPostLike($postId: ID!, $userId: String! ){
            addPostLike(postId: $postId, userId: $userId){
                totalLikes
            }
        }
`;
//UPDATE_USER_PROFILE works
export const UPDATE_USER_PROFILE = gql`
mutation updateUser($id:ID!, $firstName: String, $lastName:String, $bio:String, $yearOfGraduation:String!, $linkedIn: String, $gitHub: String, $className: String!, $email: String!) {
    updateUser(id:$id, firstName:$firstName, lastName:$lastName, bio:$bio, yearOfGraduation:$yearOfGraduation, linkedIn:$linkedIn, gitHub:$gitHub, className:$className, email:$email) {
            _id
      		username
           firstName
      		lastName	
            email  
      		bio	
      		yearOfGraduation
      		linkedIn
      		gitHub
      		className
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($id:ID!) {
      removeUser(id:$id) {
            _id
      }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($id: ID!, $password: String!, $confirmPassword: String!) {
      changePassword(id:$id, password:$password, confirmPassword:$confirmPassword) {
          _id
          password
          confirmPassword
      }
  }
`;