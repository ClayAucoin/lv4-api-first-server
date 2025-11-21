// src/controllers/23-find-movie.js
// step 24

import movies from "../data.js"
import { sendError } from "../utils/createError.js"

export function getAllMovies(req, res, next) {
  try {
    console.log("GET /find-movie")
    res.status(200).json(movies)
  } catch (err) {
    next(err)
  }
}

export function getSingleMovie(req, res, next) {
  try {
    console.log("GET /find-movie/id")

    const id = Number(req.params.id)
    const movie = movies.find((entry) => entry.id === id)

    if (!movie) {
      throw sendError(404, "Movie not found")
    }

    // console.log("id:", id)
    // console.log(movie)

    res.status(200).json(movie)
  } catch (err) {
    next(err)
  }
}
