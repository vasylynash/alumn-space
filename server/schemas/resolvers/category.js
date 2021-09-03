const Category = require('../../models/Category');

module.exports = {
    Query: {
    categories: async () => {
      return Category.find();
    },
    category: async (parent, args) => {
      return Category.findById(args.id);
    }
  },
  Mutation: {
  }    
};
