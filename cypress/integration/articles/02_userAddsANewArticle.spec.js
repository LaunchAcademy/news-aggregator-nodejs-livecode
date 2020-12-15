/// <reference types="cypress" />

import newArticle from "../../fixtures/newArticle.json"
import starterArticles from "../../fixtures/starterArticles.json"
const articlesFilePath = "articles.json"

context("Articles New", () => {
  it("has a header for the new article page", () => {})

  it("adds a travel attraction to the list upon submitting the form", () => {})

  it("has a link to go to the article index page", () => {
    cy.get('a').contains("Back to the homepage").click()
    cy.url().should("include", "/articles")
  })

  afterEach(() => {
    cy.writeFile(articlesFilePath, JSON.stringify(starterArticles))
  })
})
