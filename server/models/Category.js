const { Schema, model } = require('mongoose');

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

const Categoru = model('Category', categorySchema);

module.exports = Category;
