// src/routes/16-items.test.js
// step 32

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./16-items.js"

const app = express()
app.use(express.json())
app.use(appRouter)

describe("Server Routes", () => {
  it("returns JSON from movie route", async () => {
    const res = await request(app).get("/")
    const body = res.body

    expect(res.status).toBe(200)
    expect(Array.isArray(body)).toBe(true)
    expect(body).toHaveLength(3)
    expect(body).toContainEqual({ name: "gum", brand: "Hubba Bubba" })
    expect(body).not.toBeNull()
    expect(body[0].name).toBe("gum")
    expect(body[0].brand).toBe("Hubba Bubba")
    expect(body.map(i => i.name)).toEqual(["gum", "toothpaste", "bike"])

    expect(res.headers["content-type"]).toMatch(/json/);
  });
})

