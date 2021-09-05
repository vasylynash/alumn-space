const Post = require("../../models/Post");

module.exports = {
  Query: {
    postLikes: async (_, args) => {
      return Post.findById(args.id);
    },
  },

  Mutation: {
    addCommentLike: async (_, { comments }) => {
      // comments.likes = Post.comments.likes + 1;
      return comments.likes;
    },
    addPostLike: async (_, { likes }) => {
      // likes = Post.likes + 1;
      return likes;
    },
  },
};
