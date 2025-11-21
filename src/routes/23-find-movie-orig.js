``// src/routes/23-find-movie.js
// step 24

import express from "express"
import movies from "../data.js"
import { sendError } from "../utils/sendError.js"
import { validateId } from "../middleware/validateId.js"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /find-movie")
  res.status(200).json(movies)
})

app.get("/:id", validateId, (req, res, next) => {
  console.log("GET /find-movie/id")
  const id = Number(req.params.id)
  const movie = movies.find((entry) => entry.id === id)

  if (!movie) {
    return next(sendError(404, "Movie not found"))
  }
  console.log("id:", id)
  console.log(movie)

  res.status(200).json(movie)
})

export default app