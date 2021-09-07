const Post = require('../../models/Post');
const { UserInputError } = require('apollo-server-express');

module.exports = {
<<<<<<< HEAD
  Query: {
    posts: async () => {
      try {
        return Post.find();
      } catch (err) {
        throw new Error(err);
=======
    category: {
      Coding: 'Coding',
      DataScience: 'Data Science',
      UIUX: 'UI/UX',
      None: 'none'
    },
    label: {
      Help: 'Help',
      SuccessStories: 'Success Stories',
      Jobs: 'Jobs',
      Discussion: 'Discussion',
      NodeJS: 'NodeJs',
      GraphQL: 'GraphQL',
      MONGODB: 'MongoDB',
      React: 'React',
      CSS: 'CSS',
      HTML: 'HTML',
      Handlebars: 'Handlebars',
      JavaScript: 'JavaScript',
      None: 'none'
    },
    Query: {
    posts: async (_, {category, label}) => {
      try {
        if (category && label) {
        return Post.find({
          category: category,
          label: label
        });   
      }  else if (category && !label) {
        return Post.find({
          category: category
        });   
      } else if (!category && label)  {
        return Post.find({
          label: label
        }); 
      } else {
        return Post.find(); 
      }
      }
      catch(err) {
        throw new Error(err)
>>>>>>> main
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
<<<<<<< HEAD
    addPost: async (_, { title, body, author }) => {
      return Post.create({ title: title, body: body, author: author });
    },
    updatePost: async (_, { id, title, body }) => {
      if (!title) {
        throw new UserInputError('The title cannot be empty');
=======
    addPost: async (_, { title, body, author, category, label }) => {
      return Post.create({title: title, body: body, author: author, category: category, label: label});
    },
    updatePost: async (_, { id, title, body, category, label }) => {
      if(!title) {
        throw new UserInputError("The title cannot be empty");
>>>>>>> main
      }
      if (!body) {
        throw new UserInputError('The body of the post cannot be empty');
      }
      const post = await Post.findById({ _id: id });
      post.title = title;
      post.body = body;
<<<<<<< HEAD

=======
      post.category = category;
      post.label = label;
      
>>>>>>> main
      return post;
    },
    removePost: async (_, args) => {
      const id = args.id;
      Post.findByIdAndRemove(id);
      return id;
    },
  },
};
