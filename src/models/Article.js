import fs from "fs"

const articlesPath = "articles.json"

const articlesJson = () => {
  return JSON.parse(fs.readFileSync(articlesPath))
}

class Article {
  // if we know the keys of the object that is being passed in, we can use those keys to define variables of the same name and assign the corresponding value
  constructor({ title, url, description }){
    this.title = title
    this.url = url
    this.description = description
  } 

  static findAll(){
    // 
    const articlesData = articlesJson().articles
    
    const articleObjects = articlesData.map(article => {
      return new Article(article)
    })

    return articleObjects
  }

  save(){
    // retrieve existing articles 
    let articlesArray = articlesJson().articles

    // add our new article to the existing articles 
    articlesArray.push(this)
    // then write these articles to a JSON file

    const jsonArticles = JSON.stringify({ articles: articlesArray })

    fs.writeFileSync(articlesPath, jsonArticles)

    return true
  }


}

export default Article
