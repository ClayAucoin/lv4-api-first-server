// src/routes/24-del.movie.js
// step 24

import express from "express"
import movies from "../data.js"

const app = express.Router()
app.use(express.json());

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
  // console.log("title:", title)

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

export default app