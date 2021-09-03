const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Category, Comment, Label, Post, User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findById(args.id);
    },
    posts: async () => {
      return Post.find();
    },
    post: async (parent, args) => {
      return Post.findById(args.id);
    },
    categories: async () => {
      return Category.find();
    },
    category: async (parent, args) => {
      return Category.findById(args.id);
    },
    labels: async () => {
      return Label.find();
    },
    label: async (parent, args) => {
      return Label.findById(args.id);
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
    addPost: async (parent, { title, body, author }) => {
      return Post.create({title: title, body: body, author: author});
    },
    updatePost: async (parent, { id, title, body }, context) => {
      const updatedPost = await Post.findOneAndUpdate(
          { id: id, title: title, body: body },
          { new: true});
      
      return { updatedPost };
    },
    removePost: async (parent, args)  => {
      const id = args.id;
      Post.findByIdAndRemove(id);
      return id;
    } 
  }    
};

module.exports = resolvers;
