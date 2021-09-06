const Post = require("../../models/Post");

module.exports = {
  Query: {
    postLikes: async (_, args) => {
      return Post.findById(args.id);
    },
  },

  Mutation: {
    addPostLike: async (_, args) => {
  
      return likes;
    },
  },
};
