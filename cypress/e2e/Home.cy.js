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

  it('Edit Images Button should redirect to ', () => {

    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')
    cy.contains('a', 'Edit Images').should('be.visible').click()

  })

  it('Upload Image', () => {

    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')
    cy.contains('a', 'Edit Images').should('be.visible').click()
    cy.url().should('be.equal', 'https://testertest.77diamondstest.com/product-detail/1')
    const tshirtImage = '637774088130982879_tshirt.jpg'
    cy.contains('button', 'Add').should('be.visible')

    cy.get("input[type=file]")
      // .invoke('removeAttr', 'hidden') // Remove the 'hidden' attribute
      .selectFile('cypress/fixtures/637774088130982879_tshirt.jpg', { force: true })

  })


  it('Upload Image debugg', () => {
    cy.visit('https://testertest.77diamondstest.com/product-detail/1');
    // ...

    // Intercept the file upload request
    cy.intercept('POST', '/api/api/Product/UploadProductImage').as('uploadRequest');

    // Select the file and trigger the upload
    cy.get("input[type=file]")
      .invoke('removeAttr', 'hidden')
      .selectFile('cypress/fixtures/Images/Colors/637774088130982879_tshirt.jpg', { force: true });

    // Wait for the file upload request to complete
    cy.wait('@uploadRequest').then((interception) => {
      // Log the request and response details to the console
      const request = interception.request;
      const response = interception.response;
      console.log('File Upload Request:', request);
      console.log('File Upload Response:', response);

      // You can also assert on the response status code or any other properties
      expect(response.statusCode).to.equal(200);
    });

    // Continue with your other assertions and test steps...
  });

  it('Upload Image2', () => {

    cy.visit('https://testertest.77diamondstest.com/')
    cy.title().should('eq', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')
    cy.contains('a', 'Edit Images').should('be.visible').click()
    cy.url().should('be.equal', 'https://testertest.77diamondstest.com/product-detail/1')
    const tshirtImage = '637774088130982879_tshirt.jpg'

    cy.contains('button', 'Add').should('be.visible')
    cy.get("input[type=file]").selectFile('cypress/Images/Colors/637774088130982879_tshirt.jpg', { force: true });

  })

  it.only('Upload Image Page 2', () => {

    cy.visit('https://testertest.77diamondstest.com/product-detail/2')
    // cy.title().should('eq', 'ecommerce-photo-upload')
    // cy.get('tbody tr td a').should('be.visible')
    // cy.contains('a', 'Edit Images').should('be.visible').click()
    cy.url().should('be.equal', 'https://testertest.77diamondstest.com/product-detail/2')
    const tshirtImage = '637774088130982879_tshirt.jpg'
    cy.contains('button', 'Add').should('be.visible')

    cy.get('input[type="file"').first().selectFile('cypress/Images/Colors/green.png', { force: true })
    // .trigger('input')

  })

  // cy.get('.btn-danger').eq(0).click();

})
