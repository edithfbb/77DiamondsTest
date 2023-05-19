/// <reference types="cypress" />

describe('example to-do app', () => {

  it('WebApp should be online', () => {

    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
  })

  it('Button Edit Image should be visible', () => {
    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')

  })

  it('Edit Images Button should redirect to specifc Item Page ', () => {

    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')
    cy.contains('a', 'Edit Images').should('be.visible').click()
    cy.url().should('include', 'product-detail');

  })

  it('Upload Image', () => {

    cy.fixture('green.png', 'binary').then(image => {
      const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
      const formData = new FormData();
      formData.append('colorId', '2');
      formData.append('fabricId', '2');
      formData.append('formFile', blob, 'green.png');
      formData.append('productId', '2');
      cy.request({
        method: 'POST',
        url: 'https://testertest.77diamondstest.com/api/api/Product/UploadProductImage',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
    })

  })

})
