import express from "express"
import fs from "fs"
const articlesPath = "articles.json"

import Article from "../models/Article.js"

const articlesRouter = new express.Router()

articlesRouter.get("/", (req, res) => {
  //return all of the article records from the JSON file as Article objects in an array and pass them to our views template 
  //const articleObjects = Article.findAll()
  res.render("articles/index", {articles: Article.findAll()})
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new")
})

// articlesRouter.post("/", (req, res) => {
//   // const articleTitle = req.body.title
//   // const articleUrl = req.body.url
//   // const articleDescription = req.body.description
//   // const newArticle = new Article({title: articleTitle, url: articleUrl, description: articleDescription})
//   const formData = req.body 
//   const newArticle = new Article(formData)
//   newArticle.save()
//   res.redirect("/")
// })

//if the name of the article is not supplied when submitting the form, the user should not be redirected to /articles and instead they should remain on the form page

articlesRouter.post("/", (req, res) => {
  const formData = req.body
  if (req.body.title.trim() === "") {
    res.render("articles/new", {error: "title can't be blank"})
  } else {
    const newArticle = new Article(formData)
    newArticle.save()
    res.redirect("/")
  }
})

export default articlesRouter

