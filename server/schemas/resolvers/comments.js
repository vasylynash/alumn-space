const Post = require('../../models/Post');
const { UserInputError } = require('apollo-server-express');
const User = require('../../models/User');

module.exports = {

  Mutation: {
    addComment: async (_,{ postId, commentText, author, authorId }, context) => {
    if(!commentText){
        throw new UserInputError("Comment cannot be empty!");
    }
    // const post = await Post.findById(postId);
    const newComment = {author:author, commentText:commentText, authorId:authorId}
    // post.comments.push(newComment)
    // return await Post.updateOne({ "_id": postId},{"comments": post.comments})
  await Post.findByIdAndUpdate(
      { _id: postId },
      { $push: { comments: newComment } },
      { new: true }
    );
    },

    // removeComment: async (parent, { id }, context)  => {
    //     return await Post.comments.deleteOne({ _id: id });
    //   } 
  },
};