const Post = require('../../models/Post');

module.exports = {

  Mutation: {
    addPostLike: async (_,{ postId, userId }) => {
      const post = await Post.findById(postId);
      if (!post.likes.includes(userId)){
      post.likes.push(userId);
      post.totalLikes = post.likes.length;
      } else {
       post.likes = post.likes.filter(item => item !== userId)
       post.totalLikes = post.likes.length;
      }
      await Post.updateOne({ "_id": postId},{"totalLikes":post.totalLikes,"likes":post.likes});
      return post;
    },
  },
};