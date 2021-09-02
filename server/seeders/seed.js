const db = require("../config/connection");
const { Category, Comment, Label, Post, User } = require("../models");
const categorySeed = require("./categorySeed.json");
const commentSeed = require("./commentSeed.json");
const labelSeed = require("./labelSeed.json");
const postSeed = require("./postSeed.json");
const userSeed = require("./userSeed.json");

db.once("open", async () => {
  try {
    await Category.create(categorySeed);
    await Comment.create(commentSeed);
    await Label.create(labelSeed);
    await Post.create(postSeed);
    await User.create(userSeed);

    console.log("Seeds are deployed!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
