import fs from "fs"

const articlesPath = "articles.json"

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

class Article {
  constructor({ title, url, description }) {
    this.title = title
    this.url = url
    this.description = description || null
  }

  static findAll() {
    const articlesData = articlesJson()
    const articlesObjectArray = articlesData.articles.map((articleObject) => {
      return new Article(articleObject)
    })
    return articlesObjectArray
  }

  save() {
    let existingArticles = Article.findAll()
    existingArticles.push(this)
    fs.writeFileSync(articlesPath, JSON.stringify({ articles: existingArticles }))
  }
}

export default Article
