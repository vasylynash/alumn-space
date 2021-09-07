const Post = require('../../models/Post');
const { UserInputError } = require('apollo-server-express');

module.exports = {
  Query: {
    posts: async () => {
      try {
        return Post.find();
      } catch (err) {
        throw new Error(err);
      }
    },
    post: async (_, args) => {
      try {
        const post = await Post.findById(args.id);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addPost: async (_, { title, body, author }) => {
      return Post.create({ title: title, body: body, author: author });
    },
    updatePost: async (_, { id, title, body }) => {
      if (!title) {
        throw new UserInputError('The title cannot be empty');
      }
      if (!body) {
        throw new UserInputError('The body of the post cannot be empty');
      }
      const post = await Post.findById({ _id: id });
      post.title = title;
      post.body = body;

      return post;
    },
    removePost: async (_, args) => {
      const id = args.id;
      Post.findByIdAndRemove(id);
      return id;
    },
  },
};
