const { Schema, model } = require('mongoose');

const labelSchema = new Schema( {
    name: {
        type: String,
        required: true
    }
});

const Label = model('Label', labelSchema);

module.exports = Label;