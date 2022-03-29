/// <reference types="cypress" />

import starterArticles from "../../fixtures/starterArticles.json"

context("Articles Index", () => {
  beforeEach(() => {
    cy.visit("/articles")
  })

  it("has a header displaying the word Articles", () => {
    cy.get("h1").should("have.text", "Articles")
  })

  it("lists all articles", () => {
    cy.get("ul")
      .find("li")
      .first()
      .should("have.text", `Title: ${starterArticles.articles[0].title}`)

    cy.get("ul")
      .find("li")
      .last()
      .should("have.text", starterArticles.articles[starterArticles.articles.length - 1].url)
  })

  it("has a link to go to the new article form", () => {
    cy.get("a").contains("Click here to add a new article!").click()
    cy.url().should("include", "/articles/new")
  })
})
