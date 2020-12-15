import express from "express"
import fs from "fs"
const articlesPath = "articles.json"

// import Article from "../models/Article.js"

const articlesRouter = new express.Router()

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

export default articlesRouter
