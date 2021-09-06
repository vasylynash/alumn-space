const Post = require("../../models/Post");

module.exports = {
  Query: {
    postLikes: async (_, args) => {
      return Post.findById(args.id);
    },

    commentLikes: async (_, args) => {
      console.log(args.id);

      return Post.find();
    },
  },

  // Mutation: {
  //   addCommentLike: async (_, args) => {
  //
  //     return comments.likes;
  //   },
  //   addPostLike: async (_, args) => {
  //
  //     return likes;
  //   },
  // },
};
