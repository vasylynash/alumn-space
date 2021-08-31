const { Schema, model, now } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    likes: {
        type: Number
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
