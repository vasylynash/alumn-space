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
      console.log('args',args)
      try {
        const post = await Post.findById(args.id).populate('author');
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
      let filters = [];

      if(search.keyword) {
        filters.push({
          $or: [
            {title: {$regex: search.keyword, $options: 'i'}},
            {body: {$regex: search.keyword, $options: 'i'}}
          ],      
        })
      }
      if (search.label) {
        filters.push({label: search.label})
      } 
      if (search.category) {
        filters.push({category: search.category})
      }

      let searchQuery = filters.length? {$and: filters} : {} ;
     
      const posts = await Post.find(searchQuery)
      .limit(limit)
      .skip((page-1) * limit)
      .populate('author');

      const count = await Post.countDocuments(searchQuery);

      return {
        post: posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      }
    }
  },
  Mutation: {
    addPost: async (_, { title, body, category, label}, context) => {
      if (!category) {
        throw new UserInputError('Please select category')
      }
      if (!label) {
        throw new UserInputError('Please select label')
      }
      
      const post = await Post.create({title: title, body: body, category: category, label: label, author: context.user._id });
      await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post } },
                { new: true }
              );
      return await post.populate('author').execPopulate();
    },
    updatePost: async (_, { id, title, body, category, label }) => {
      console.log("title",title)
      if(!title) {
        throw new UserInputError('The title cannot be empty');
      }
      if(!body) {
        throw new UserInputError('The body of the post cannot be empty');
      }
      console.log(title)
      const post = await Post.findById({_id: id});
      post.title = title;
      post.body = body;
      post.category = category;
      post.label = label;
      return post;
    },
    removePost: async (parent, { id }, context)  => {
      return await Post.deleteOne({ _id: id });
    } 
  }    
};