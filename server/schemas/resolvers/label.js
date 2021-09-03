const Label = require('../../models/Label');

module.exports = {
    Query: {
    labels: async () => {
      return Label.find();
    },
    label: async (parent, args) => {
      return Label.findById(args.id);
    }
  },
  Mutation: {
      
  }   
};