import fs from "fs"

const articlesPath = "articles.json"

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

class Article {
  constructor({ title, url, description }) {
    this.title = title
    this.url = url
    this.description = description
  }

  static findAll() {
    const articlesData = articlesJson().articles
    const articleObjects = articlesData.map((article) => {
      return new Article(article)
    })
    return articleObjects
  }

  save() {
    //retrieve all existing articles
    // let articlesArray = articlesJson().articles
    const articlesArray = this.constructor.findAll()

    //add our new article to the existing articles
    articlesArray.push(this)

    //convert data to JSON and write to articles.json file
    const jsonArticles = JSON.stringify({ articles: articlesArray })
    fs.writeFileSync(articlesPath, jsonArticles)

    // nice to have once we start adding in validations 
    return true 
  }
}

export default Article
