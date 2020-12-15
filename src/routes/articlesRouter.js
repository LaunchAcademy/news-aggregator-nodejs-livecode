import express from "express"
// import fs from "fs"
// const articlesPath = "articles.json"

import Article from "../models/Article.js"

const articlesRouter = new express.Router()

articlesRouter.get("/", (req, res) => {
  // return all of the article records from the JSON file as Article objects, in an array
  const articleObjects = Article.findAll()
    
  res.render("articles/index", { articles: articleObjects })
  // res.render("articles/index", { articles: articlesJson().articles })
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new")
})

articlesRouter.post("/", (req, res) => {
  const formData = req.body 
  
  const newArticle = new Article(formData)
  // Article {title: "something", url: "something.com", description: "blah"}

  newArticle.save()

  res.redirect("/articles")
})

export default articlesRouter
