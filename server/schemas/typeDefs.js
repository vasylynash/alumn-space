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
        token: ID!
        user: User
    }

    type Post {
        _id: ID
        title: String
        body: String
        author: User
        dateCreated: String
        comments: [Comment]
        likes: [String]
        totalLikes: Int
        category: Category
        label: Label
    }

    type Comment {
        _id: ID
        commentText: String
        author: String
        dateCreated: String
        likes: Int
    } 

    enum Category {
        Coding
        DataScience
        UIUX
        None
    }

    enum Label {
        Help
        SuccessStories
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

    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
        yearOfGraduation: String!
        className: String!
        firstName: String
        lastName: String
        bio: String
        linkedIn: String
        gitHub: String
    }

    type PostResult {
      post: [Post]
      currentPage: Int
      totalPages: Int
    }

    input SearchQuery {
        keyword: String
        category: String
        label: String
    }

  type Query {
    users: [User]
    user(id: ID!): User
    posts(category: Category, label: Label): [Post]
    post(id: ID!): Post
    postLikes(id: ID!): Post
    searchPosts(search: SearchQuery, page: Int, limit: Int): PostResult
  }

    type Mutation {
        addUser(registerInput: RegisterInput!): Auth
        login(email: String!, password: String!): Auth
        addPost(title: String!, body: String!, category: Category, label: Label): Post
        updatePost(id: ID!, title: String!, body: String!, category: Category, label: Label): Post
        removePost(id: ID!): Post
        addComment(postId: String!, commentText: String!, author: String!): Comment
        updateComment(commentId: ID!, commentText: String!): Post
        removeComment(id: ID!): Post
        updateUser(id: ID!, firstName: String, lastName: String, bio: String, yearOfGraduation: String!, linkedIn: String, gitHub: String, className: String!, email: String!): User
        addPostLike(postId: ID!, userId: String!): Post
        removeUser(id:ID!): User
        changePassword(id: ID!, password: String!, confirmPassword: String!): User
    }
`;

module.exports = typeDefs;