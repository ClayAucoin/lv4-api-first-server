// src/routes/25-1-read-json-from-disk
// step 25

import express from "express"
import fs from "fs"
// import data from "../data.json" with { type: "json" }

const app = express.Router()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  console.log("GET /add-movie")

  const raw = fs.readFileSync("src/data.json")
  const currentMovies = JSON.parse(raw)

  res.status(200).json(currentMovies)
})

app.post("/", (req, res) => {
  console.log("POST /add-movie", req.body)
  const newMovie = req.body

  const raw = fs.readFileSync("src/data.json")
  const currentMovies = JSON.parse(raw)

  currentMovies.push(newMovie)

  fs.writeFileSync("src/data.json", JSON.stringify(currentMovies, null, 2))

  res.status(201).send(`${newMovie.title} added`)
})

export default app