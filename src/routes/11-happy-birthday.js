// src/routes/11-happy-birthday.js
// step #11
import express from 'express'

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /happy-birthday")
  const response = {
    name: "Donald Duck",
    age: 10,
    greeting: "Happy Birthday"
  }

  res.status(200).json(response)
})

export default app