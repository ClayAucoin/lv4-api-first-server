// src/utils/validators.js

import { sendError } from "../utils/createError.js";

export function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) { return next(sendError(400, "Invalid id")) }
  next();
}

export function validateMovieBody(req, res, next) {
  const { title, year, imdb_id } = req.body

  if (!imdb_id) {
    return next(sendError(400, "IMDB ID is required"))
  } if (!title) {
    return next(sendError(400, "Title is required"))
  }

  if (typeof year !== "number") {
    return next(sendError(400, "Year must be a valid year"))
  } else if (year < 1900) {
    return next(sendError(400, "The year must be beyond the year 1900"))
  }

  next()
}