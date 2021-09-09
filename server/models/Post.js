const { Schema, model, now } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
      },
      author: {
        type: String,
        required: true,
      },
      dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      likes: {
        type: Number,
      },
    }
  ],
  likes: {
    type: [String],
  },
  totalLikes: {
    type: Number,
    default: 0,
 },
    category: {
        type: String,
        enum: ['Coding', 'DataScience', 'UIUX', 'None'],
        default: 'None',
        required: true
    },
    label: {
        type: String, 
        enum: [
            'Help',
            'SucessStories',
            'Jobs',
            'Discussion',
            'NodeJS',
            'GraphQL',
            'MongoDB',
            'React',
            'CSS',
            'HTML',
            'Handlebars',
            'JavaScript',
            'None'
        ],
        default: 'None',
        required: true
    }

});

const Post = model('Post', postSchema);

module.exports = Post;