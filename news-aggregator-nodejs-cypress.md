After going through the articles on Cypress, it's time to bring some of that test coverage to the `news-aggregator-nodejs` exercise!

### Learning Objectives

- Write feature tests using Cypress.
- Practice TDD with supplied tests.

### Getting Setup

```no-highlight
et get news-aggregator-nodejs-cypress
cd news-aggregator-nodejs-cypress
yarn install
```

In one terminal window run:

```no-highlight
yarn run dev
```

In a second terminal window run:

```no-highlight
yarn run test:open
```

### Overview

A completed version of `news-aggregator-nodejs` has been provided, but it's lacking some tests. Our job will be to fill out any empty `it` blocks in the provided spec files, `01_userViewsArticlesIndex.spec.js` & `02_userAddsANewArticles.spec.js` and also satisfy any written tests.

Let's take a look at the first spec file.

```JavaScript
// 01_userViewsArticlesIndex.spec.js

/// <reference types="cypress" />

context("Articles Index", () => {
  beforeEach(() => {
    cy.visit("/articles")
  })

  it("has the correct header", () => {})

  it("lists all articles", () => {})

  it("has a link to go to the new article form", () => {
    cy.findByText("Click here to add a new article!").click()
    cy.url().should("include", "/articles/new")
  })
})
```

Currently we only have one test and its failing because it is unable to find the text `Click here to add a new article!` on the page. When a test is unable to find some content on a page, it's always a good idea to check the view and make sure that content is being displayed first! Following that debugging flow we can look at the `articles/index.hbs` to see whats being rendered onto the page.

```HandleBars
<h1>Articles</h1>

<ul>
  {{#each articles}}
  <div>
    <li>Title: {{this.title}}</li>
    <li>Description: {{this.description}}</li>
    <li><a href={{this.url}} target="_blank" rel="noopener noreferrer">{{this.url}}</a></li>
  </div>
  <br>
  {{/each}}
</ul>
```

Ah! Now we can see that the issue is that the string `Click here to add a new article!`. Is never being displayed on the index page. We will need to add that text to the page. When deciding if it should be an `h2`, `p`, etc. always go back and read the spec file!

```js
it("has a link to go to the new article form", () => {
  cy.findByText("Click here to add a new article!").click()
  cy.url().should("include", "/articles/new")
})
```

The first line is telling us that this test is trying to find a link on the page. Within the `it` block we can also see that after locating the text on the page, the `.click()` function is chained on which also let's us know that this is an interactive element on the page.

After getting both provided tests to pass, it's on to writing your own tests!

#### Tips

- Make sure to read the text provided in each `it` block. That will help explain what should be tested within that block.
- Since finished code has been provided, you will need to reference `articles/index.hbs` and `articles/new.hbs` to determine what is being displayed on the page, so that you will know what is available to test.
- Be aware that if you want to seed more `articles` in `articles.json`, you will also need to edit `cypres/fixtures/starterArticles.json` as this is being used in `02_userAddsANewArticle.spec.js` to reset the `articles.json` file after each test.
