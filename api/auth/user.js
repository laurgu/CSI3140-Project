const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "User" }
); // Specify the collection name here

userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (user.isModified("password") || user.isNew) {
      bcrypt.hash("mypassword", 10, function (err, hash) {
        if (err) {
          throw err;
        }
        user.password = hash;
        console.log("hashed:", hash);
      });
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
