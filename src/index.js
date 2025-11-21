// src/index.js
import express from "express"
import cors from "cors"
import fileLogger from "./middleware/fileLogger.js"
import requestMetaLogger from "./middleware/requestMetaLogger.js"
import devLogger from "./middleware/devLogger.js"
import colorLogger from "./middleware/colorLogger.js"
import morganLikeLogger from "./middleware/morganLikeLogger.js"

// import routes
import rootRouter from "./routes/03-root.js"
import happyBirthdayRouter from "./routes/11-happy-birthday.js"
import favoriteRouter from "./routes/12-favorite.js"
import movieRouter from "./routes/13-movie.js"
import itemsRouter from "./routes/16-items.js"
import moviesRouter from "./routes/19-movies.js"
import addMovieRouter from "./routes/20-add-movie.js"
import findMovieRouter from "./routes/23-find-movie.js"
import delMovieRouter from "./routes/24-del.movie.js"
import persistDataRouter from "./routes/25-1-read-json-from-disk.js"

const app = express();
const port = 3000;

app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(fileLogger)
// app.use(requestMetaLogger)
app.use(devLogger)
app.use(colorLogger)
app.use(morganLikeLogger)

app.use("/", rootRouter)
app.use("/happy-birthday", happyBirthdayRouter)
app.use("/favorite", favoriteRouter)
app.use("/movie", movieRouter)
app.use("/items", itemsRouter)
app.use("/movies", moviesRouter)
app.use("/add-movie", addMovieRouter)
app.use("/find-movie", findMovieRouter)
app.use("/del-movie", delMovieRouter)
app.use("/persist-data", persistDataRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

// error 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

// global error handling
app.use((err, req, res, next) => {
  console.error("error:", err.message)

  res.status(err.status || 500).json({
    error: err.message || "server error"
  })
})
