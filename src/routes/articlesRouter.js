import express from "express"
import fs from "fs"
import Article from "../models/Article.js"

const articlesPath = "articles.json"

const articlesRouter = new express.Router()

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

articlesRouter.get("/", (req, res) => {
  const articleObjects = Article.findAll()

  res.render("articles/index", { articles: articleObjects })
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new")
})

articlesRouter.post("/", (req, res) => {
  const newArticleData = req.body

  if (newArticleData.title.trim() === ""){
    res.render("articles/new", { error: "Please fill out the title" })
  } else {
    const newArticle = new Article(newArticleData)
    newArticle.save()
    res.redirect("/articles")
  }
})

export default articlesRouter
