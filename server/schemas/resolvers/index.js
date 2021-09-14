const postResolvers = require('./posts');
const userResolvers = require('./users');
const likeResolvers = require('./likes');
const commentsResolvers = require('./comments')
module.exports = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...commentsResolvers.Mutation,
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...likeResolvers.Mutation,
  },
};
