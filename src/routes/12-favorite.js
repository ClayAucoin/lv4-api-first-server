// src/routes/12-favorite.js
// step #12
import express from "express"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /favorite")
  const favorite = [
    {
      pokemon: "Bulbasaur",
      height: 0.7,
      weight: 6.9,
      attacks: [
        "Vine Whip",
        "Seed Bomb",
        "Solar Beam"
      ]
    }
  ]
  res.status(200).json(favorite)
})

export default app