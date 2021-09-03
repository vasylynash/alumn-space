const Post = require('../../models/Post');

module.exports = {
    Query: {
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
