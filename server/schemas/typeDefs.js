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
        class: String
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
        body: String
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

    type Query {
        users: [User]
        user(username: String!): User
        posts: [Post]
        post(postId: ID!): Post
        categories: [Category]
        category(categoryId: ID!)
        labels: [Label]
        label(labelId: ID!): Label
    }
`;


module.exports = typeDefs;
