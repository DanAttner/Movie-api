const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Models = require("./models.js");

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect("mongodb://localhost:27017/myFlixDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("common")); //logs info on server requests
app.use(express.static("public")); // sets default static path to public,
//although doesnt seems to work as I cannot get my 'documentation.html' file to load

//error handeling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! Everybody panic!");
});

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to myflix api thing!");
});

//return all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

//return movie description by title
app.get("/movies/:title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

//data about a genre
app.get("/genres/:type", (req, res) => {
  res.send("info on a genre ");
});

//returns info about the director
app.get("/director/:name", (req, res) => {
  res.send("information about director");
});

//Add a user
/* We’ll expect JSON in this format
{
  ID: Integer,
  Username: String,
  Password: String,
  Email: String,
  Birthday: Date
}*/
app.post("/users", (req, res) => {
  res.status(201).send(req.body.Username + "aaaaaaaa");
});
/*
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + " already exists");
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error: " + error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error: " + error);
    });
});
*/

//allow users to update username
app.put("/users/:username/", (req, res) => {
  res.send("update user info");
});

//allow user add movies to their list of favs
app.put("/users/:username/movies/:title", (req, res) => {
  res.send("add to fav list");
});

//allow user delete movies from their list of favs
app.delete("/users/:username/movies/:title", (req, res) => {
  res.send("delete from fav list");
});

//allow to deregister from website
app.delete("/users/:username", (req, res) => {
  res.send("delete account with website");
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
