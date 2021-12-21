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
    const articlesData = JSON.parse(fs.readFileSync(articlesPath))
    // console.log(articlesData)
    const articlesObjectArray = articlesData.articles.map((articleObject) => {
      return new Article(articleObject)
    })
    console.log(articlesObjectArray)
    return articlesObjectArray
  }

  save(){
    let existingArticles = Article.findAll()
    existingArticles.push(this)
    fs.writeFileSync(articlesPath, JSON.stringify({ articles: existingArticles }))
  }

}

export default Article
