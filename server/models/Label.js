const { Schema, model } = require('mongoose');
const postSchema = require('./Post');

const labelSchema = new Schema( {
    name: {
        type: String,
        required: true
    },
    posts: [postSchema]
});

const Label = model('Label', labelSchema);

module.exports = Label;