const Post = require('../../models/Post');

module.exports = {
  Query: {
    postLikes: async (_, args) => {
       const data = await Post.findById(args.id);
       data.totalLikes = data.likes.length
      return await data
    },
  },

  Mutation: {
    addPostLike: async (_, args) => {
      const post = Post.findById(args.id)
      return likes;
    },
  },
};
