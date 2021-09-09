const Post = require('../../models/Post');
const User = require('../../models/User');
const { UserInputError } = require('apollo-server-express');

module.exports = {
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
      NodeJS: 'NodeJS',
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
        return Post.find().populate('author'); 
      }
      }
      catch(err) {
        throw new Error(err)
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
      }
      catch (err) {
        throw new Error(err)
      }
    },
    searchPosts: async (_, args) => {
      const { search = null, page = 1, limit = 20 } = args;

      let searchQuery = {};

      if(search) {
        searchQuery = {
          $or: [
            {title: {$regex: search, $options: 'i'}},
            {body: {$regex: search, $options: 'i'}}
          ]
        };
      }
     
      const posts = await Post.find(searchQuery)
      .limit(limit)
      .skip((page-1) * limit)
      .lean();

      const count = await Post.countDocuments(searchQuery);

      return {
        post: posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      }
    }
  },
  Mutation: {
    addPost: async (_, { title, body, category, label }, context) => {
      const post = await Post.create({title: title, body: body, category: category, label: label, author: context.user._id });
      await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post._id } },
                { new: true }
              );
      return await post.populate('author').execPopulate();
    },
    updatePost: async (_, { id, title, body, category, label }) => {
      if(!title) {
        throw new UserInputError("The title cannot be empty");
      }
      if(!body) {
        throw new UserInputError("The body of the post cannot be empty");
      }
      const post = await Post.findById({_id: id});
      post.title = title;
      post.body = body;
      post.category = category;
      post.label = label;
      
      return post;
    },
    removePost: async (_, args)  => {
      const id = args.id;
      Post.findByIdAndRemove(id);
      return id;
    },
     
  }    
};