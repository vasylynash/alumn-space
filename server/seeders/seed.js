const db = require("../config/connection");
const { Category, Label, Post, User } = require("../models");
const categorySeed = require("./categorySeed.json");
const labelSeed = require("./labelSeed.json");
const postSeed = require("./postSeed.json");
const userSeed = require("./userSeed.json");

db.once("open", async () => {
  try {
    // remove from database
    await Category.deleteMany({});
    await Label.deleteMany({});
    await Post.deleteMany({});
    await User.deleteMany({});

    const categories = await Category.insertMany(categorySeed);
    const labels = await Label.insertMany(labelSeed);
    const posts = await Post.insertMany(postSeed);
    const users = await User.insertMany(userSeed);

    //Post references
    for (newPost of posts) {
      // randomly add a category to each post
      const tempCategory =
        categories[Math.floor(Math.random() * categories.length)];
      newPost.category = tempCategory._id;
      await newPost.save();
      // randomly add a label to each post
      const tempLabel = labels[Math.floor(Math.random() * labels.length)];
      newPost.label = tempLabel._id;
      await newPost.save();
      // reference posts on category model
      tempCategory.posts.push(newPost);
      await tempCategory.save();
      // reference posts on label model
      tempLabel.posts.push(newPost);
      await tempLabel.save();
    }

    //User references - TODO

    console.log('Seeds are deployed!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
