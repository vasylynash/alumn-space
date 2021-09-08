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
    type: Schema.Types.ObjectId,
    ref: 'User',
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
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  likes: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  label: {
    type: Schema.Types.ObjectId,
    ref: 'Label',
  },
});

const Post = model('Post', postSchema);

module.exports = Post;
