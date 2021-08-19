const express = require('express');
const app = express();


//movie list
const tarantinoMovies[
  {
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
    year: 1992
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994
  },
  {
    title: "Jackie Brown",
    director: "Quentin Tarantino",
    year: 1997
  },
  {
    title: "Kill Bill: Volume 1",
    director: "Quentin Tarantino",
    year: 2003
  },
  {
    title: "Kill Bill: Volume 2",
    director: "Quentin Tarantino",
    year: 2004
  },
  {
    title: "Death Proof",
    director: "Quentin Tarantino",
    year: 2007
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    year: 2009
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    year: 2012
  },
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    year: 2015
  },
  {
    title: "Once Upon a Time in Hollywood",
    director: "Quentin Tarantino",
    year: 2019
  }
];

//URL logger

let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
  };

app.use(myLogger);

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my book club!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(tarantinoMovies);

});


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
