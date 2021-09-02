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
            body
            author
            dateCreated
            likes
        }
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
            body
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
                body
                author
                dateCreated
                likes
            }
    }
}
`;

export const QUERY_SINGLE_POST = gql`
  query post(postId: ID!) {
    post(postId: ID!) {
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

export const QUERY_ALL_CATEGORIES = gql`
    query categories {
        categories {
            _id
            name
    }
}
`;

//For below query, do we need to put the posts in the Category typeDef?
export const QUERY_CATEGORY_POSTS = gql`
  query category(categoryId: ID!) {
    category(categoryId: ID!) {
      _id
      name
      posts {  
        _id
        body
        author
        dateCreated
      }
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

//For below query, do we need to put the posts in the Label typeDef?
export const QUERY_LABEL_POSTS = gql`
  query label(labelId: ID!) {
    label(labelId: ID!) {
      _id
      name
      posts {  
        _id
        body
        author
        dateCreated
      }
    }
  }
`;