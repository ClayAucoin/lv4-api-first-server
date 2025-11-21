// src/routes/19-movies.test.js

import { describe, it, expect } from "vitest"
import request from "supertest"
import express from "express"

import moviesRouter from "./19-movies.js"
import movies from "../data.js"

const app = express()
app.use(express.json())
app.use(moviesRouter)

describe("GET /movies", () => {
  it("returns the movies from data.js", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)
    expect(res.body).toEqual(movies)
  })
  it("returns an array of movie objects with the right shape", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBe(movies.length)

    res.body.forEach((movie) => {
      expect(movie).toMatchObject({
        id: expect.any(Number),
        imdb_id: expect.any(String),
        title: expect.any(String),
        year: expect.any(Number),
      })
    })
  })
  it("includes Monkey Man in the list", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)

    expect(res.body).toContainEqual(
      expect.objectContaining({
        title: "Monkey Man",
        imdb_id: "tt9214772",
      })
    )
  })
})
