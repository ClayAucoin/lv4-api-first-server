// src/routes/20-add-movie.test.js
// step 35

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./20-add-movie.js"

const app = express()
app.use(express.json())
app.use(appRouter)


describe("Server Routes", () => {
  it("add new movie", async () => {
    const res = await request(app)
      .post("/")
      .send({
        "id": 8,
        "imdb_id": "tt1014759",
        "title": "Alice in Wonderland",
        "year": 2010
      })

    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({
      "id": 8,
      "imdb_id": "tt1014759",
      "title": "Alice in Wonderland",
      "year": 2010
    })
    expect(res.body.id).toBeDefined()
  });
})

