/// <reference types="cypress" />

describe('Testing all Funcionality', () => {

  let imageData;

  before(() => {
    cy.fixture('imagesData').then(i => {
      imageData = i
    })
  })

  it('WebApp should be online', () => {

    cy.visitPage('/', 'ecommerce-photo-upload')

  })

  it('Button Edit Image should be visible', () => {

    cy.editItemButtonIsVisible()

  })

  it('Edit Images Button should redirect to specifc Item Page ', () => {

    cy.itemButtonRedirect()

  })

  it('Upload Image', () => {

    const image = imageData.imagesData

    cy.uploadImage(image.path, image.fileName)

  })

})