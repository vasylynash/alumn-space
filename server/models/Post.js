const { Schema, model, now } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20
  },
  body: {
    type: String,
    required: true,
    minlength: 1
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
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
        default: 0
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
      'SuccessStories',
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
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Post = model('Post', postSchema);

module.exports = Post;