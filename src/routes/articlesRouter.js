import express from "express"
import fs from "fs"
const articlesPath = "articles.json"

// import Article from "../models/Article.js"

const articlesRouter = new express.Router()

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

articlesRouter.get("/", (req, res) => {

})

articlesRouter.get("/new", (req, res) => {

})

articlesRouter.post("/", (req, res) => {

})

export default articlesRouter
