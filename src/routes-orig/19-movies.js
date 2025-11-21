// src/routes/19-movies.js
// step #19
import express from "express"
import movies from "../data.js"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /movies")
  res.status(200).json(movies)
})

export default app