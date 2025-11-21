// src/routes/12-favorite.test.js
// step 34

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./12-favorite.js"

const app = express()
app.use(express.json())
app.use(appRouter)


describe("Server Routes", () => {
  it("returns pokeman array from fatorite route", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.headers["content-type"]).toMatch(/json/)
  });
})

