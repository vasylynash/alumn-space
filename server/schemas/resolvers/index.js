const postResolvers = require("./posts");
const userResolvers = require("./users");
const categoryResolvers = require("./category");
const labelResolvers = require("./label");
const likeResolvers = require("./likes");
module.exports = {
  Query: {
    ...postResolvers.Query,
    ...userResolvers.Query,
    ...categoryResolvers.Query,
    ...labelResolvers.Query,
    ...likeResolvers.Query,
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...userResolvers.Mutation,
    ...likeResolvers.Mutation,
  },
};
