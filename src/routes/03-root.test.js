// src/routes/03-root.test.js
// step 32

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./03-root.js"

const app = express()
app.use(express.json())
app.use(appRouter)

describe("Server root route", () => {
  it("serves HTML from root route", async () => {
    const res = await request(app).get("/")

    expect(res.status).toBe(200)
    expect(res.text).toContain("<h1>Hello Express</h1><p>Your server is working</p>")
    expect(res.headers["content-type"]).toMatch(/html/)
  })
})