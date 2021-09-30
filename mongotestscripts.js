//movie list
const movies = [

    var movie1 = {
      title: "Reservoir Dogs",
      description: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant. ",
      
      genre:{
        name: "crime",
        description: "Crime fiction is the genre of fiction that deals with crimes, their detection, criminals, and their motives "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
      imagepath: "reservoirdogs.png",
      featured: true
    }
      
  
    var movie2 = {
      title: "Pulp Fiction",
      description: "Faced with life's cruel irony, the unpredictable stories of a well-dressed pair of low-level hitmen; a gangster's statuesque moll, and a double-crossing prizefighter become inextricably intertwined ",
  
      genre:{
        name: "crime",
        description: "Crime fiction is the genre of fiction that deals with crimes, their detection, criminals, and their motives "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
      imagepath: "pulpfiction.png",
      featured: true
    }
  
  
  
  
    var movie3 = {
      title: "Jackie Brown",
      description: "A middle-aged airline stewardess supplements her income by smuggling arms for crime kingpin Ordell Robbie. One day she is caught and the agents offer her a deal in order to apprehend Robbie. Robbie, however, is onto the threat and tries to have Brown eliminated. ",
  
      genre:{
        name: "crime",
        description: "Crime fiction is the genre of fiction that deals with crimes, their detection, criminals, and their motives "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
  
      imagepath: "jackiebrown.png",
      featured: false
  
    }
  
  
  
  
  
    var movie4 = {
      title: "Kill Bill: Volume 1",
      description: "Kill Bill is the story of one retired assassin's revenge against a man who tried to kill her while she was pregnant years prior. After being in a coma for four years, Beatrix Kiddo is hungry for revenge against the man and his team of assassins and will stop at nothing to Kill Bill. ",
  
      genre:{
        name: "crime",
        description: "Crime fiction is the genre of fiction that deals with crimes, their detection, criminals, and their motives "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
  
      imagepath: "killbill1.png",
      featured: true
  
    }
  
  
  
  
    var movie5 = {
      title: "Kill Bill: Volume 2",
      description: "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle. ",
  
      genre:{
        name: "crime",
        description: "Crime fiction is the genre of fiction that deals with crimes, their detection, criminals, and their motives "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
  
      imagepath: "killbill2.png",
      featured: true
  
    }
  
  
  
    var movie6 = {
      title: "Death Proof",
      description: "Two separate sets of voluptuous women are stalked at different times by a scarred stuntman who uses his 'death proof' cars to execute his murderous plans. ",
  
      genre:{
        name: "thriller",
        description: " Thrillers are dark, engrossing, and suspenseful plot-driven stories.  "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
  
      imagepath: "deathproof.png",
      featured: false
  
    }
  
  
  
  
  
  
  
    var movie7 = {
      title: "Inglourious Basterds",
      description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same. ",
  
      genre:{
        name: "adventure",
        description: " Adventure Films are exciting stories, with new experiences or exotic locales. "
      },
  
      director: {
        name: "Quentin Tarantino",
        bio: "Quentin Jerome Tarantino is an American film director, screenwriter, producer, author, film critic, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir. ",
        birth: "1963",
        death: "N/A"
      },
  
      imagepath: "inglourious.png",
      featured: true
  
    }
  
  
  
  
  
  
  
    var movie8 = {
      title: "A Clockwork Orange",
      description: "A sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
  
      genre:{
        name: "Drama",
        description: "The drama genre features stories with high stakes and a lot of conflicts. They're plot-driven and demand that every character and scene move the story forward "
      },
  
      director: {
        name: "Stanley Kubrick",
        bio: "Stanley Kubrick was an American film director, producer, screenwriter, and photographer. He is frequently cited as one of the greatest filmmakers in cinematic history. His films, which are mostly adaptations of novels or short stories, cover a wide range of genres and are noted for their realism, dark humor, unique cinematography, extensiveset designs, and evocative use of music. ",
        birth: "1928",
        death: "1999"
      },
  
      imagepath: "aclockworkorange.png",
      featured: true
  
    }
  
  
  
  
    var movie9 = {
      title: "Baby Driver",
      description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail. ",
  
      genre:{
        name: "action",
        description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases "
      },
  
      director: {
        name: "Edgar Wright",
        bio: "Edgar Wright (born 18 April 1974) is an English film director, screenwriter and producer. He is known for his fast-paced and kinetic, satirical genre films, which feature extensive utilization of expressive popular music, Steadicam tracking shots, dolly zooms and a signature editing style that includes transitions, whip pans and wipes",
        birth: "1974",
        death: "N/A"
      },
  
      imagepath: "BabyDriver.png",
      featured: true
  
    }
  
  
  
  
    var movie10 = {
      title: "Shaun of the Dead",
      description: "A man's uneventful life is disrupted by the zombie apocalypse. ",
  
      genre:{
        name: "comedy",
        description: "A comedy film is a category of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect. "
      },
  
      director: {
        name: "Edgar Wright",
        bio: "Edgar Wright (born 18 April 1974) is an English film director, screenwriter and producer. He is known for his fast-paced and kinetic, satirical genre films, which feature extensive utilization of expressive popular music, Steadicam tracking shots, dolly zooms and a signature editing style that includes transitions, whip pans and wipes",
        birth: "1974",
        death: "N/A"
      },
  
      imagepath: "shaunofthedead.png",
      featured: true
  
    }
  
  
  
    var movie11 = {
      title: "The Shining",
      description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future. ",
  
      genre:{
        name: "horror",
        description: "Horror is a genre of film and television whose purpose is to create feelings of fear, dread, disgust, and terror in the audience "
      },
  
      director: {
        name: "Stanley Kubrick",
        bio: "Stanley Kubrick was an American film director, producer, screenwriter, and photographer. He is frequently cited as one of the greatest filmmakers in cinematic history. His films, which are mostly adaptations of novels or short stories, cover a wide range of genres and are noted for their realism, dark humor, unique cinematography, extensiveset designs, and evocative use of music. ",
        birth: "1928",
        death: "1999"
      },
  
      imagepath: "aclockworkorange.png",
      featured: true
  
    }
  
  
  
  ];
  
  
  
  
  //users collection
  user1 = {
    userID: '1',
    username: 'Philip Fry',
    password: 'test123',
    email: 'timewarp55@hotmail.com',
    birthday: new Date("1993-12-10"),
    favorites: [ObjectId("615101e0b4af8e8a40d469e1"), ObjectId("6151eea1b4af8e8a40d469e2") ]
  
  }
  
  user2 = {
    userID: '2',
    username: 'Bender',
    password: 'coolpassword420',
    email: 'ironchef22@hotmail.com',
    birthday: new Date("2001-6-16"),
    favorites: [ObjectId("6151f76ab4af8e8a40d469eb")]
  
  }
  
  user3 = {
    userID: '3',
    username: 'Leela',
    password: 'mypass321',
    email: 'purplepilot33@hotmail.com',
    birthday: new Date("2021-12-25"),
    favorites: [ObjectId("6151f67ab4af8e8a40d469e9"), ObjectId("6151eea1b4af8e8a40d469ea") ]
  
  }
  
  user4 = {
    userID: '4',
    username: 'Amy Wong',
    password: 'surfsup99',
    email: 'marsuni@hotmail.com',
    birthday: new Date("1977-4-4"),
    favorites: [ObjectId("6151f1b4b4af8e8a40d469e4"), ObjectId("6151eea1b4af8e8a40d469e5") ]
  
  }
  
  user5 = {
    userID: '5',
    username: 'Zoidberg',
    password: 'dumpsterdive25',
    email: 'realdoctor@hotmail.com',
    birthday: new Date("2004-11-15"),
    favorites: [ObjectId("6151f52ab4af8e8a40d469e8") ]
  
  }
  
  //update shit 
  db.users.update(
    {_id: ObjectId("615200d6b4af8e8a40d469ec") },
    {$push: {favorites: ObjectId("6151f10ab4af8e8a40d469e3")
  }}
  )
  
  
  db.movies.updateMany( { "director.name": "Edgar Wright"}, 
    {$set: {director: {name: "Edgar Wright",
              bio: "Edgar Wright is an English film director, screenwriter and producer. He is known for his fast-paced and kinetic, satirical genre films. Which feature extensive utilization of expressive popular music, Steadicam tracking shots, dolly zooms and signature editing style", 
              birth: "1974",
              death: "N/A"
            }}})
  
  db.users.remove({ "username": "zoidberg"})
  