import express from "express"

import Article from "../models/Article.js"

const articlesRouter = new express.Router()

articlesRouter.get("/", (req, res) => {
  // res.send("Hi!")
  // I should be able to see all the articles that have been submitted

  // I need to get my data from the json file
  // I'm going to use my Article model to get the data
  // I'll have a `findAll` static method on my model
  // (that I can call like `Article.findAll()`)
  // which gives me back an array of Article objects
  const articlesList = Article.findAll()

  // I want to render the below view
  // I need to pass the data from the model over to the view
  res.render("articles/index", { articles: articlesList })
  // res.render("articles/index", { articles: Article.findAll() })
})

articlesRouter.get("/new", (req, res) => {
  res.render("articles/new", {
    newArticle: new Article({
      title: "",
      url: "",
      description: ""
    })
  })
})

articlesRouter.post("/", (req, res) => {
  // When I successfully post an article, it should be saved to a JSON file via a POST request to /articles. I should then be redirected back to the "/articles" index page.
  // If I fail to provide any of the required information, it does not alter my JSON file, and keeps me on the form page.
  // capture the user's input from the form in variables
  // const title = req.body.title
  // const url = req.body.url
  // const description = req.body.description
  const { title, url, description } = req.body
  // double-check to make sure they input everything we need
  // if they gave all the necessary input
  const newArticle = new Article(req.body)
  if (title && url) {
    // Save the article to the JSON file
    // I want to use my model to do the logic work of adding the new article to the list
    // and rewriting to the JSON file
    // I'll create a `save()` instance method to do that work, and call it as `article.save()` here
    // I'll first create an instance of an article with the user's input
    // and then I'll try to `save()` it
    // const newArticle = new Article({
    //   title: title,
    //   url: url,
    //   description: description
    // })
    // const newArticle = new Article({ title, url, description })
    newArticle.save()

    // redirect them back to the "/articles" index page
    res.redirect("/articles")
  } else {
    // otherwise
    // don't touch the JSON file
    // keep them on the form page
    const error = "You did not provide all required information"
    res.render("articles/new", { error, newArticle })
  }
})

export default articlesRouter
