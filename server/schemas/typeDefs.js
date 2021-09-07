const { gql } = require('apollo-server-express');

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

<<<<<<< HEAD
  type Post {
    _id: ID
    title: String
    body: String
    author: String
    dateCreated: String
    comments: [Comment]
    likes: [String]
    totalLikes: Int
  }
=======
    type Post {
        _id: ID
        title: String
        body: String
        author: String
        dateCreated: String
        comments: [Comment]
        likes: Int
        category: Category
        label: Label
    }
>>>>>>> main

  type Comment {
    _id: ID
    commentText: String
    author: String
    dateCreated: String
    likes: Int
  }

<<<<<<< HEAD
  type Category {
    _id: ID
    name: String
  }

  type Label {
    _id: ID
    name: String
  }
=======
    enum Category {
        Coding
        DataScience
        UIUX
        None
    }

    enum Label {
        Help
        SucessStories
        Jobs
        Discussion
        NodeJS
        GraphQL
        MongoDB
        React
        CSS
        HTML
        Handlebars
        JavaScript
        None
    }
>>>>>>> main

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    yearOfGraduation: String!
    className: String!
  }

<<<<<<< HEAD
  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
    categories: [Category]
    category(id: ID!): Category
    labels: [Label]
    label(id: ID!): Label
    postLikes(id: ID!): Post
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
    addPostLike(id: ID!, userId: ID!): Post
  }
=======
    type Query {
        users: [User]
        user(id: ID!): User
        posts(category: Category, label: Label): [Post]
        post(id: ID!): Post
    }

    type Mutation {
        addUser(registerInput: RegisterInput!): Auth
        login(email: String!, password: String!): Auth
        addPost(title: String!, body: String!, author: String!, category: Category, label: Label): Post
        updatePost(id: ID!, title: String!, body: String!, category: Category, label: Label): Post
        removePost(id: ID!): Post
        addComment(postId: ID!, commentText: String!): Post
        updateComment(commentId: ID!, commentText: String!): Post
        removeComment(id: ID!): Post
        updateUser(id: ID!, firstName: String, lastName: String, image: String, role: String, bio: String, yearOfGraduation: String!, linkedIn: String, gitHub: String, className: String!): User
    }
>>>>>>> main
`;

module.exports = typeDefs;
