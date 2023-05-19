/// <reference types="cypress" />

describe('Testing all Funcionality', () => {

  let imageData;

  before(() => {
    cy.fixture('imagesData').then(i => {
      imageData = i
    })
  })

  it('TC004 - Edit Image Button should be visible', () => {

    cy.editItemButtonIsVisible()

  })

  it('TC005 - Edit Images Button should redirect to specifc Item Page ', () => {

    cy.itemButtonRedirect()

  })

  it('TC001 - Upload Image', () => {

    const image = imageData.imagesData

    cy.uploadImage(image.path, image.fileName)

  })

})