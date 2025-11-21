// src/routes/13-movie.test.js
// step 32

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./13-movie.js"

const app = express()
app.use(express.json())
app.use(appRouter)

describe("Server Routes", () => {
  it("returns JSON from movie route", async () => {
    const res = await request(app).get("/")
    const movie = res.body

    expect(res.status).toBe(200);
    expect(movie).toMatchObject({ "name": "Monkey Man", "contentRating": "R", "genre": ["Action", "Crime", "Thriller"], "datePublished": "2024-04-05", "duration": "PT2H1M" })
    expect(typeof movie).toBe("object")
    expect(movie).not.toBeNull()
    expect(Object.keys(movie)).toHaveLength(5)
    expect(movie).toHaveProperty("name")
    expect(movie).toHaveProperty("contentRating", "R")
    expect(movie).toHaveProperty("genre", ["Action", "Crime", "Thriller"])
    expect(movie).toHaveProperty("datePublished", "2024-04-05")
    expect(movie).toMatchObject({ name: "Monkey Man", contentRating: "R" })
    expect(movie).toEqual({ "name": "Monkey Man", "contentRating": "R", "genre": ["Action", "Crime", "Thriller"], "datePublished": "2024-04-05", "duration": "PT2H1M" })

    expect(res.headers["content-type"]).toMatch(/json/);
  });
})

