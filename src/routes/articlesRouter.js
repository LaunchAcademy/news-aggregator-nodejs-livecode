import express from "express"
import fs from "fs"
const articlesPath = "articles.json"

import Article from "../models/Article.js"

// import Article from "../models/Article.js"

const articlesRouter = new express.Router()

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

articlesRouter.get("/", (req, res) => {
  const articlesArray = Article.findAll()
  res.render("articles/index", { articles: articlesArray })
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new")
})

articlesRouter.post("/", (req, res) => {
  const newArticle = new Article(req.body)
  newArticle.save()
  res.redirect("/articles")
})

export default articlesRouter
