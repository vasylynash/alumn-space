const postResolvers = require('./posts');
const userResolvers = require('./users');
const likeResolvers = require('./likes');
module.exports = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
    ...likeResolvers.Query,
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...likeResolvers.Mutation,
  },
};
