// src/routes/16-items.js
// step #16
import express from "express"

const app = express.Router()

const items = [
  { name: "gum", brand: "Hubba Bubba" },
  { name: "toothpaste", brand: "crest" },
  { name: "bike", brand: "Red Line" }
]

app.get("/", (req, res) => {
  console.log("GET /items")
  res.status(200).json(items)
})

app.post("/", (req, res) => {
  console.log("POST /items", req.body)
  items.push(req.body)
  res.status(201).json(req.body)
})

export default app