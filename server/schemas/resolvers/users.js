const { UserInputError } = require('apollo-server-express');

const User = require('../../models/User');
const { signToken } = require('../../utils/auth');
const { validateRegisterInput, validateLoginInput } = require('../../utils/validators');
const { AuthenticationError } = require('apollo-server-express');

module.exports = {
    Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findById(args.id);
    },
  },
  Mutation: {
    addUser: async (_, {registerInput: { username, email, password, confirmPassword, yearOfGraduation, className }}) => {
      const { errors, valid } = validateRegisterInput(username, email, password, confirmPassword, yearOfGraduation, className);
      if (!valid) {
        throw new UserInputError('Errors', { errors })
      }
      let user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken'
          }
        }) 
      };
      user = await User.findOne({ email });
      if(user) {
        throw new UserInputError('User with this email already exists', {
          errors: {
            email: 'User with this email already exists'
          }
        })
      }

      const newUser = await User.create({ username, email, password, yearOfGraduation, className });
      const token = signToken(newUser);
      console.log(token)
      console.log(newUser)
      return { token, newUser };
    },
    login: async (_, { email, password }) => {
      const { errors, valid } = validateLoginInput(email, password); 
      const user = await User.findOne({ email });

      if (!user) {
        errors.general = 'No user found with this email address';
        throw new UserInputError('No user found with this email address', { errors } );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }, 

    updateUser: async (parent, {id, firstName, lastName, image, role, bio, yearOfGraduation, linkedIn, gitHub, className }) => {
      return await User.findOneAndUpdate(
        {_id: id},
        { firstName, lastName, image, role, bio, yearOfGraduation, linkedIn, gitHub, className },
        { new: true }
      );
    }
    }    
};
