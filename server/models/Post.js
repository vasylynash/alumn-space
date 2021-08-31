const { Schema, model, now } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments: [commentSchema],
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
        ref: 'Category'
    },
    label: {
        type: Schema.Types.ObjectId,
        ref: 'Label'
    }

});

const Post = model('Post', postSchema);

module.exports = Post;