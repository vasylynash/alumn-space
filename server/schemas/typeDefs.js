const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    image: String
    posts: [Post]
    registrationDate: String
    role: String
    bio: String
    yearOfGraduation: String
    linkedIn: String
    gitHub: String
    className: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Post {
    _id: ID
    title: String
    body: String
    author: String
    dateCreated: String
    comments: [Comment]
    likes: Int
  }

  type Comment {
    _id: ID
    commentText: String
    author: String
    dateCreated: String
    likes: Int
  }

  type Category {
    _id: ID
    name: String
  }

  type Label {
    _id: ID
    name: String
  }

  type Likes {
    _id: ID
    likes: Int
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    yearOfGraduation: String!
    className: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
    categories: [Category]
    category(id: ID!): Category
    labels: [Label]
    label(id: ID!): Label
    commentLikes(id: ID!): Likes
    postLikes(id: ID!): Likes
  }

  type Mutation {
    addUser(registerInput: RegisterInput!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, body: String!, author: String!): Post
    updatePost(id: ID!, title: String!, body: String!): Post
    removePost(id: ID!): Post
    addComment(postId: ID!, commentText: String!): Post
    updateComment(commentId: ID!, commentText: String!): Post
    removeComment(id: ID!): Post
    addCommentLike(commentId: ID!, likes: Int!): Likes
    addPostLike(postId: ID!, likes: Int!): Likes
  }
`;

module.exports = typeDefs;
