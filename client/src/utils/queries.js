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
<<<<<<< HEAD
  query post($id: ID!) {
    post(id: $id) {
=======
  query post($postId: ID!) {
    post(postId: $postId) {
>>>>>>> 1fa0ef0d4b73e3b10cf0773108f6931e9a8cfcc7
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
<<<<<<< HEAD
=======

export const QUERY_ALL_CATEGORIES = gql`
    query categories {
        categories {
            _id
            name
    }
}
`;

<<<<<<< HEAD
//Can't include posts in single category search as posts aren't connected to the categories in typeDefs
export const QUERY_SINGLE_CATEGORY = gql`
    query category($id: ID!) {
      category(id: $id) {
=======
// //For below query, do we need to put the posts in the Category typeDef?
export const QUERY_CATEGORY_POSTS = gql`
  query category($categoryId: ID!) {
    category(categoryId: $categoryId) {
      _id
      name
      posts {  
>>>>>>> 1fa0ef0d4b73e3b10cf0773108f6931e9a8cfcc7
        _id
        name
      }
    }
`;

//For below query, do we need to put the posts in the Category typeDef?
// export const QUERY_CATEGORY_POSTS = gql`
//   query category(id: ID!) {
//     category(id: $id) {
//       _id
//       name
//       posts {  
//         _id
//         body
//         author
//         dateCreated
//       }
//     }
//   }
// `;

export const QUERY_ALL_LABELS = gql`
    query labels {
        labels {
            _id
            name
    }
}
`;

<<<<<<< HEAD
//For below query, do we need to put the posts in the Label typeDef?
// export const QUERY_LABEL_POSTS = gql`
//   query label(labelId: ID!) {
//     label(labelId: ID!) {
//       _id
//       name
//       posts {  
//         _id
//         body
//         author
//         dateCreated
//       }
//     }
//   }
// `;


//Can't include posts in single category search as posts aren't connected to the categories in typeDefs
export const QUERY_SINGLE_LABEL = gql`
    query label($id: ID!) {
      label(id: $id) {
=======
// //For below query, do we need to put the posts in the Label typeDef?
export const QUERY_LABEL_POSTS = gql`
  query label($labelId: ID!) {
    label(labelId: $labelId) {
      _id
      name
      posts {  
>>>>>>> 1fa0ef0d4b73e3b10cf0773108f6931e9a8cfcc7
        _id
        name
      }
    }
`;
>>>>>>> main
