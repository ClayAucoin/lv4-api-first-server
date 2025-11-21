// src/routes/index-13.js
// step #13
import express from "express"

const app = express.Router()

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

export default app