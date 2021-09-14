const { Schema, model, now } = require('mongoose');
const bcrypt = require('bcrypt');
const postSchema = require('./Post').schema;
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    image: {
        type: String,
        required: false,
    },
    posts: [postSchema],
    registrationDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    role: {
        type: String
    },
    bio: {
        type: String,
        default: ''
    },
    yearOfGraduation: {
        type: Date
    },
    linkedIn: {
        type: String,
        default: ''
    },
    gitHub: {
        type: String,
        default: ''
    },
    className: {
        type: String,
        required: true
    }
  },
 
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;