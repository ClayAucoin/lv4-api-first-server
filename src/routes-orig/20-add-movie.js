// src/routes/20-add-movie.js
// step #20
import express from "express"
import { randomUUID } from "node:crypto"
import movies from "../data.js"
import { validateMovieBody } from "../middleware/validators.js"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /add-movie")
  res.status(200).json(movies)
})

app.post("/", validateMovieBody, (req, res) => {
  console.log("POST /add-movie", req.body)
  // step 22 randomUUID
  // const newMovie = { ...req.body, id: randomUUID() }
  // const newMovie = { ...req.body }

  const newMovie = req.body
  movies.push(newMovie)
  res.status(201).json(newMovie)
})

export default app