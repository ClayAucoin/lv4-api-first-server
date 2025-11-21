// src/routes/index-13.js
// step #13
import express from "express"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /movie")
  const movie = {
    "name": "Monkey Man",
    "contentRating": "R",
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "datePublished": "2024-04-05",
    "duration": "PT2H1M"
  }
  console.log("movie.length:", Object.keys(movie).length)
  console.log(movie)
  res.status(200).json(movie)
})

export default app