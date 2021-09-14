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
        author {
          _id
          username
        }
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
        author{
          _id
          username
        }
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

export const QUERY_ALL_POSTS_CATEGORY_LABEL = gql`
    query posts {
        posts (category: ${category}, label: ${label}){
            _id
            title
            body
            author{_id}
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

export const QUERY_ALL_POSTS = gql`
    query posts {
        posts {
            _id
            title
            body
            likes
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

export const QUERY_SINGLE_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
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

//For below query, do we need to put the posts in the Category typeDef?
export const QUERY_CATEGORY_POSTS = gql`
  query category($categoryId: ID!) {
    category(categoryId: $categoryId) {
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
  query label($labelId: ID!) {
    label(labelId: $labelId) {
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

export const SEARCH_POSTS = gql `
  query searchPosts($search: SearchQuery) {
    searchPosts(search: $search) {
      post {
        _id
        title
        body
        label
        totalLikes
        likes
        category
        author {
          _id
          username
        }
        dateCreated
      }
    }
  }
`;
