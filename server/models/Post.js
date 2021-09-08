const { Schema, model, now } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200
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
      },
    }
  ],
  likes: {
    type: [String],
  },
  totalLikes: {
    type: Number
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
    default: Date.now
  }
});

const Post = model('Post', postSchema);

module.exports = Post;