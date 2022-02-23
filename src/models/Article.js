import fs from "fs"

// path to your articles.json file
const articlesPath = "articles.json"

class Article {
  // We first need a constructor to set the structure for what an Article is
  // Article takes in an object that includes a title, url, and description
  constructor({ title, url, description }) {
    this.title = title
    this.url = url
    this.description = description
  }

  // We want to call it like: Article.findAll
  // We need a findAll method which is able to
  static findAll() {
    // read the JSON file
    const fileData = fs.readFileSync(articlesPath)
    // parse the data into a data structure
    const parsedData = JSON.parse(fileData)
    // drill down into the data to get the array of objects
    const dataArray = parsedData.articles

    // Turn it into Article objects
    const articleObjects = dataArray.map((article) => {
      return new Article(article)
    })

    // And spit out an array of Articles for us to use
    return articleObjects
  }

  save() {
    // get the existing list of articles
    // const currentArticles = this.constructor.findAll()
    const currentArticles = Article.findAll()
    // add this new article to the existing list
    console.log("this", this)
    currentArticles.push(this)
    // prepare the data to be written to the file
    const fileData = JSON.stringify({ articles: currentArticles })
    // write the data to the file
    fs.writeFileSync(articlesPath, fileData)
  }
}

export default Article
