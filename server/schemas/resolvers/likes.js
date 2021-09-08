const Post = require('../../models/Post');

module.exports = {

  Mutation: {
    addPostLike: async (_, args) => {
      const post = await Post.findById(args.id);

      if (!post.likes.includes(args.userId)){
      post.likes.push(args.userId);
      post.totalLikes = post.likes.length;
      await Post.updateOne(post);
      
      }
  
      return post;
    },
  },
};
