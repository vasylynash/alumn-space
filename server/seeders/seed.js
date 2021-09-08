const db = require("../config/connection");
const { Category, Label, Post, User } = require("../models");
const categorySeed = require("./categorySeed.json");
const labelSeed = require("./labelSeed.json");
const postSeed = require("./postSeed.json");
const userSeed = require("./userSeed.json");

db.once("open", async () => {
  try {
    // remove from database
    // await Category.deleteMany({});
    // await Label.deleteMany({});
    
    await User.deleteMany({});
    await Post.deleteMany({});

    // const categories = await Category.insertMany(categorySeed);
    // const labels = await Label.insertMany(labelSeed);
    
    const users = await User.insertMany(userSeed);
    const posts = await Post.insertMany(postSeed);

    // //Post references
    // for (newPost of posts) {
    //   //randomly add a category to each post
    //   const tempCategory =
    //     categories[Math.floor(Math.random() * categories.length)];
    //   newPost.category = tempCategory._id;
    //   await newPost.save();
    //   // randomly add a label to each post
    //   const tempLabel = labels[Math.floor(Math.random() * labels.length)];
    //   newPost.label = tempLabel._id;
    //   await newPost.save();
    //   // reference posts on category model
    //   tempCategory.posts.push(newPost);
    //   await tempCategory.save();
    //   // reference posts on label model
    //   tempLabel.posts.push(newPost);
    //   await tempLabel.save();
    // }

    //User references
    for (newUser of users) {
      // randomly add a posts to each user
      const tempPost = posts[Math.floor(Math.random() * posts.length)];
      newUser.posts.push(tempPost);
      await newUser.save();
      // reference user on post model
      tempPost.author = newUser._id;
      await tempPost.save();
    }

    console.log('Seeds are deployed!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
