import express from "express"
import { randomUUID } from "node:crypto"
import movies from "../data.js"

const app = express.Router()
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// src/routes/03-root.js
// step #3

app.get("/", (req, res) => {
  console.log("GET /03-root")
  let payload = "<h1>Hello Express</h1>"
  payload += "<p>Your server is working</p>"

  res.status(200).send(payload)
})

// src/routes/11-happy-birthday.js
// step #11

app.get("/", (req, res) => {
  console.log("GET /happy-birthday")
  const response = {
    name: "Donald Duck",
    age: 10,
    greeting: "Happy Birthday"
  }

  res.status(200).json(response)
})

// src/routes/12-favorite.js
// step #12

app.get("/", (req, res) => {
  console.log("GET /favorite")
  const favorite = {
    pokemon: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    attachs: [
      "Vine Whip",
      "Seed Bomb",
      "Solar Beam"
    ]
  }
  res.status(200).json(favorite)
})

// src/routes/index-13.js
// step #13

app.get("/", (req, res) => {
  console.log("GET /movie")
  const movie = {
    "name": "Monkey Man",
    "image": "https://m.media-amazon.com/images/M/MV5BODM2ZmZjYmQtNTA3NC00MmYzLWEwOTItMDNjYzc3MzI1NWNmXkEyXkFqcGc@._V1_.jpg",
    "description": "An anonymous young man unleashes a campaign of vengeance against the corrupt leaders who murdered his mother and continue to systematically victimize the poor and powerless.",
    "contentRating": "R",
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "datePublished": "2024-04-05",
    "duration": "PT2H1M"
  }
  res.status(200).json(movie)
})

// src/routes/16-items.js
// step #16

const items = [
  { name: "gum", brand: "Hubba Bubba" },
  { name: "toothpaste", brand: "crest" },
  { name: "bike", brand: "Red Line" }
]

app.get("/", (req, res) => {
  console.log("GET /items")
  res.status(200).json(items)
})

app.post("/", (req, res) => {
  console.log("POST /items", req.body)
  items.push(req.body)
  res.status(201).json(req.body)
})

// src/routes/19-movies.js
// step #19

app.get("/", (req, res) => {
  console.log("GET /movies")
  res.status(200).json(movies)
})

// src/routes/20-add-movie.js
// step #20

app.get("/", (req, res) => {
  console.log("GET /add-movie")
  res.status(200).json(movies)
})

app.post("/", (req, res) => {
  console.log("POST /add-movie", req.body)
  // step 22 randomUUID
  // const newMovie = { ...req.body, id: randomUUID() }
  // const newMovie = { ...req.body }
  const newMovie = req.body
  // console.log(newMovie.id)

  // step 21
  if (!newMovie?.imdb_id) {
    return res.status(400).json({ error: 'IMDB ID is required' })
  } if (!newMovie?.title) {
    return res.status(400).json({ error: 'Title is required' })
  } else {
    movies.push(newMovie)
    res.status(201).json(newMovie)
  }
})

// src/routes/23-find-movie.js
// step 24

app.get("/", (req, res) => {
  console.log("GET /find-movie")
  res.status(200).json(movies)
})

app.get("/:id", (req, res) => {
  console.log("GET /find-movie/id")
  const id = Number(req.params.id)
  const movieFound = movies.find((entry) => entry.id === id)

  if (!movieFound) return res.status(404).json({ error: "Item not found" })
  console.log("id:", id)
  console.log(movieFound)

  res.status(200).json(movieFound)
})

// src/routes/24-del.movie.js
// step 24

app.get("/", (req, res) => {
  console.log("GET /del-movie")
  res.status(200).json(movies)
})

app.delete("/:id", (req, res) => {
  console.log("DELETE /del-movie")
  const id = Number(req.params.id)
  const exists = movies.some((movie) => movie.id === id)

  console.log("id:", id)

  if (!exists) {
    return res.status(404).json({ error: "Item not found" })
  }

  const updated = movies.filter((movie) => movie.id !== id)

  movies.length = 0
  movies.push(...updated)

  res.status(200).json({
    message: "Item deleted successfully"
  })
  res.status(200).json(movies)
})

app.get("/:id", (req, res) => {
  console.log("GET /del-movie/id")
  const id = Number(req.params.id)
  const exists = movies.some((movie) => movie.id === id)
  const movie = movies.find((movie) => movie.id === id)

  let title = ""
  if (movie) {
    title = movie.title
  }

  if (!exists) {
    return res.status(404).json({ error: "Item not found" })
  }

  const updated = movies.filter((movie) => movie.id !== id)

  movies.length = 0
  movies.push(...updated)

  res.status(200).json({
    // message: "Item deleted successfully"
    message: `${title} deleted successfully`
  })
})
