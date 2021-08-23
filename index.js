const express = require("express");
const morgan = require("morgan");

const app = express();

//movie list
const tarantinoMovies = [
  {
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
    year: 1992,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
  },
  {
    title: "Jackie Brown",
    director: "Quentin Tarantino",
    year: 1997,
  },
  {
    title: "Kill Bill: Volume 1",
    director: "Quentin Tarantino",
    year: 2003,
  },
  {
    title: "Kill Bill: Volume 2",
    director: "Quentin Tarantino",
    year: 2004,
  },
  {
    title: "Death Proof",
    director: "Quentin Tarantino",
    year: 2007,
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    year: 2009,
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    year: 2012,
  },
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    year: 2015,
  },
  {
    title: "Once Upon a Time in Hollywood",
    director: "Quentin Tarantino",
    year: 2019,
  },
];

//Middleware

app.use(morgan("common")); //logs info on server requests
app.use(express.static("public")); // sets default static path to public, although doesnt seems to work as I cannot get my 'documentation.html' file to load

//error handeling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! Everybody panic!");
});

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my book club!");
});

app.get("/secreturl", (req, res) => {
  res.send("This is a secret url with super top-secret content.");
});

//app.get('/documentation', (req, res) => {
//  res.sendFile('/public/documentation.html', { root: __dirname });
//});

app.get("/movies", (req, res) => {
  res.json(tarantinoMovies);
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
