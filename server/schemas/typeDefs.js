const { gql } = require("apollo-server-express");

const typeDefs = gql `
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
        CODING
        DATASCIENCE
        UIUX
        NONE
    }



    enum Label {
        HELP
        SUCCESSSTORIES
        JOBS
        DISCUSSION
        NODEJS
        GRAPHQL
        MONGODB
        REACT
        CSS
        HTML
        HANDLEBARS
        JAVASCRIPT
        NONE
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!,
        yearOfGraduation: String!,
        className: String!
    }

    input UpdateUserProfile {
        username: String!
        email: String!
        yearOfGraduation: String!
        className: String!
        firstName: String
        lastName: String
        image: String
        role: String
        bio: String
        gitHub: String
        linkedIn: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
        posts(Category: String, Label: String): [Post]
        post(id: ID!): Post
        categories: [Category]
        category(id: ID!): Category
        labels: [Label]
        label(id: ID!): Label
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
        updateUser(id: ID!, firstName: String, lastName: String, image: String, role: String, bio: String, yearOfGraduation: String!, linkedIn: String, gitHub: String, className: String!): User
    }
`;


module.exports = typeDefs;
