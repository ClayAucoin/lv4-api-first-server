// src/routes/11-happy-birthday.test.js
// step 32

import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express"
import appRouter from "./11-happy-birthday.js"

const app = express()
app.use(express.json())
app.use(appRouter)


describe("Server Routes", () => {
  it("returns JSON from happy-birthday route", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("age");
    expect(res.body).toHaveProperty("greeting");
    expect(res.headers["content-type"]).toMatch(/json/);
  });
})

