const express = require("express");
const morgan = require("morgan");

const app = express();

//movie list
const movies = [
  {
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
    year: 1992,
    samuelljackson: false,
    genre: ["crime", "drama", "thriller"],
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    samuelljackson: true,
    genre: ["crime", "drama"],
  },
  {
    title: "Jackie Brown",
    director: "Quentin Tarantino",
    year: 1997,
    samuelljackson: true,
    genre: ["crime", "drama", "thriller"],
  },
  {
    title: "Kill Bill: Volume 1",
    director: "Quentin Tarantino",
    year: 2003,
    samuelljackson: false,
    genre: ["crime", "drama", "action"],
  },
  {
    title: "Kill Bill: Volume 2",
    director: "Quentin Tarantino",
    year: 2004,
    samuelljackson: true,
    genre: ["crime", "action", "thriller"],
  },
  {
    title: "Death Proof",
    director: "Quentin Tarantino",
    year: 2007,
    samuelljackson: false,
    genre: ["action", "thriller"],
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    year: 2009,
    samuelljackson: true,
    genre: ["adventure", "drama", "war"],
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    year: 2012,
    samuelljackson: true,
    genre: ["drama", "western"],
  },
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    year: 2015,
    samuelljackson: true,
    genre: ["crime", "drama", "mystery"],
  },
  {
    title: "Once Upon a Time in Hollywood",
    director: "Quentin Tarantino",
    year: 2019,
    samuelljackson: false,
    genre: ["comedy", "drama"],
  },
];

const genres = {
  action:
    "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. ... Common tropes of the genre include explosions, car chases, fistfights and shootouts.",
  crime:
    "Crime film is a genre that revolves around the action of a criminal mastermind. A Crime film will often revolve around the criminal himself, chronicling his rise and fall. This genre tends to be fast paced with an air of mystery – this mystery can come from the plot or from the characters themselves",
  drama:
    "The drama genre features stories with high stakes and a lot of conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters.",
  thriller:
    "Thrillers are dark, engrossing, and suspenseful plot-driven stories. ... Any novel can generate excitement, suspense, interest, and exhilaration, but because these are the primary goals of the thriller genre, thriller writers have laser-focused expertise in keeping a reader interested",
  war: "War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama.",
  adventure:
    "Adventure Films are exciting stories, with new experiences or exotic locales. Adventure films are very similar to the action film genre, in that they are designed to provide an action-filled, energetic experience for the film viewer.",
  comedy:
    "Comedy films are (make 'em laugh) films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters.",
  western:
    "Western is a genre of fiction set primarily in the latter half of the 19th and early 20th century in the Western United States, which is styled the Old West... Westerns often stress the harshness of the wilderness and frequently set the action in an arid, desolate landscape of deserts and mountains.",
};

const director = {
  name: "Quentin Tarantino",
  bio: "Born in Knoxville, Tennessee, Tarantino grew up in Los Angeles. He began his career as an independent filmmaker with the release of Reservoir Dogs in 1992, a crime thriller film which was in part funded by money from the sale of his screenplay True Romance (1993). Empire magazine hailed Reservoir Dogs as the (Greatest Independent Film of All Time). His second film, Pulp Fiction (1994), a crime comedy, was a major success among critics and audiences and won him numerous awards, including the Palme d'Or and the Academy Award for Best Original Screenplay.[3][4] He wrote the screenplay for the horror comedy film From Dusk till Dawn (1996),[5] in which he also starred. Tarantino paid homage to the blaxploitation films of the 1970s with Jackie Brown (1997), an adaptation of Elmore Leonard's novel Rum Punch.",
  birthday: "March 27, 1963",
};

const users = {
  username: "test",
  useremail: "testguy@hotmail.com",
  favoritelist: "",
};

//Middleware

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

//allows user to register
app.post("/users", (req, res) => {
  res.send("register new user");
});

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
