const Category = require('../../models/Category');

module.exports = {
    Query: {
    categories: async () => {
      return Category.find();
    },
    category: async (_, args) => {
      return Category.findById(args.id);
    }
  }   
};
