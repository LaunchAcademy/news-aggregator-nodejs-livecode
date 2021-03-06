/// <reference types="cypress" />

context("Articles Index", () => {
  beforeEach(() => {
    cy.visit("/articles")
  })

  it("has a header displaying the word Articles!", () => {})

  it("lists all articles", () => {})

  it("has a link to go to the new article form", () => {
    cy.get('a').contains("Click here to add a new article!").click()
    cy.url().should("include", "/articles/new")
  })
})
