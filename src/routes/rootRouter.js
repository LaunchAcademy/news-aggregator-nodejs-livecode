import express from "express"
import articlesRouter from "./articlesRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.redirect("/articles")
})

rootRouter.use("/articles", articlesRouter)

export default rootRouter