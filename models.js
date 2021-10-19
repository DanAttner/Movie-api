const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: {
    name: String,
    description: String,
  },
  director: {
    name: String,
    bio: String,
  },
  actors: [String],
  imagePath: String,
  featured: Boolean,
});

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  birthday: Date,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

let directorSchema = mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  birth: { type: String, required: true },
  death: { type: String },
});

let genreSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

//hashing function
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
//validate hashed passwords function
userSchema.methods.validatePassword = function (password) {
  console.log("test 2");
  return bcrypt.compareSync(password, this.Password);
};

let Movie = mongoose.model("Movie", movieSchema);
let User = mongoose.model("User", userSchema);
let Director = mongoose.model("Director", directorSchema);
let Genre = mongoose.model("Genre", genreSchema);

module.exports.Movie = Movie;
module.exports.User = User;
module.exports.Director = Director;
module.exports.Genre = Genre;
