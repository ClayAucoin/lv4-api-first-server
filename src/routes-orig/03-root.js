// src/routes/03-root.js
// step #3
import express from "express"

const app = express.Router()

app.get("/", (req, res) => {
  console.log("GET /03-root")
  let payload = "<h1>Hello Express</h1>"
  payload += "<p>Your server is working</p>"

  res.status(200).send(payload)
})

export default app