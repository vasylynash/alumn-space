const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Category, Comment, Label, Post, User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.find({_id: userId});
    },
    posts: async () => {
      return Post.find();
    },
    post: async (parent, { postId }) => {
      return Post.find({_id: postId});
    },
    categories: async () => {
      return Category.find();
    },
    category: async (parent, { categoryId }) => {
      return Category.find({_id: categoryId});
    },
    labels: async () => {
      return Label.find();
    },
    label: async (parent, { labelId }) => {
      return Label.find({_id: labelId});
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password, yearOfGraduation, className }) => {
      const user = await User.create({ username, email, password, yearOfGraduation, className });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { title, body }, context) => {
      return Post.create({title: title, body: body, author: context.user.username});
    },
    updatePost: async (parent, { postId, title, body }, context) => {
      const updatedPost = await Post.findOneAndUpdate(
          { postId: postId, title: title, body:body },
          { new: true});
      
      return { updatedPost };
  }
  }    
};

module.exports = resolvers;
