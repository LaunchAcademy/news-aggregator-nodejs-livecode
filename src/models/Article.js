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
    // ....
    return articleObjects
  }

  save(){
    
  }

}

export default Article
