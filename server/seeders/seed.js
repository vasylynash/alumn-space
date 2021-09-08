const db = require("../config/connection");
const { Category, Label, Post, User } = require("../models");
const categorySeed = require("./categorySeed.json");
const labelSeed = require("./labelSeed.json");
const postSeed = require("./postSeed.json");
const userSeed = require("./userSeed.json");

db.once("open", async () => {
  try {
    // remove from database
    await User.deleteMany({});
    await Post.deleteMany({});
   
    const users = await User.insertMany(userSeed);
    const posts = await Post.insertMany(postSeed);

    //User references
    for (newUser of users) {
      // randomly add a posts to each user
      const tempPost = posts[Math.floor(Math.random() * posts.length)];
      newUser.posts.push(tempPost);
      await newUser.save();
      // reference user on post model
      tempPost.author = newUser._id;
      tempPost.likes.push(newUser._id)
      tempPost.totalLikes = tempPost.likes.length
      await tempPost.save();
    }

    console.log('Seeds are deployed!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
