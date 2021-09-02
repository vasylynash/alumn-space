const { Schema, model } = require('mongoose');
const postSchema = require('./Post');

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    posts: [postSchema]
});

const Category = model('Category', categorySchema);

module.exports = Category;
