/// <reference types="cypress" />

import newArticle from "../../fixtures/newArticle.json"
import starterArticles from "../../fixtures/starterArticles.json"
const articlesFilePath = "articles.json"

context("Articles New", () => {
  beforeEach(() => {
    cy.visit("/articles/new")
  })

  it("has a header for the new article page", () => {
    cy.get("h1").should("have.text", "Add a new article!")
  })

  it("adds a travel attraction to the list upon submitting the form", () => {
    cy.get("#title")
      .type(newArticle.title)
      .should("have.value", newArticle.title)

    cy.get("#description")
      .type(newArticle.description)
      .should("have.value", newArticle.description)

    cy.get("#url")
      .type(newArticle.url)
      .should("have.value", newArticle.url)
  })

  it("has a link to go to the article index page", () => {
    cy.get('a').contains("Back to the homepage").click()
    cy.url().should("include", "/articles")
  })

  afterEach(() => {
    cy.writeFile(articlesFilePath, JSON.stringify(starterArticles))
  })
})
