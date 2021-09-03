const postResolvers = require('./posts');
const userResolvers = require('./users');
const categoryResolvers = require('./category');
const labelResolvers = require('./label');

module.exports = {
    Query: {
        ...postResolvers.Query,
        ...userResolvers.Query,
        ...categoryResolvers.Query,
        ...labelResolvers.Query
    },
    Mutation: {
        ...postResolvers.Mutation,
        ...userResolvers.Mutation
    }
}