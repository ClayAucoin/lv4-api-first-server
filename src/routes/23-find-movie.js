// src/routes/23-find-movie.js
// step 24

import express from "express"
import { getAllMovies, getSingleMovie } from "../controllers/23-find-movie.js"
import { validateId } from "../middleware/validators.js"

const app = express.Router()

app.get("/", getAllMovies)
app.get("/:id", validateId, getSingleMovie)

export default app