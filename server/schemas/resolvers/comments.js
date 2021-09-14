const Post = require('../../models/Post');
const { UserInputError } = require('apollo-server-express');

module.exports = {

  Mutation: {
    addComment: async (_,{ postId, commentText, author }) => {
    if(!commentText){
        throw new UserInputError("Comment cannot be empty!");
    }
    const post = await Post.findById(postId);
    const newComment = {author:author, commentText:commentText}
    post.comments.push(newComment)
    return await Post.updateOne({ "_id": postId},{"comments": post.comments})
    },

    // removeComment: async (parent, { id }, context)  => {
    //     return await Post.comments.deleteOne({ _id: id });
    //   } 
  },
};