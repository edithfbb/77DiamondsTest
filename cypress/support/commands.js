/// <reference types="cypress" />
import 'cypress-file-upload';


Cypress.Commands.add('visitPage', (homePage, title) => {
    cy.visit(homePage)
    cy.title().should('eq', title)
})

Cypress.Commands.add('editItemButtonIsVisible', () => {
    cy.visitPage('/', 'ecommerce-photo-upload')
    cy.get('tbody tr td a').should('be.visible')
})

Cypress.Commands.add('itemButtonRedirect', () => {
    cy.visitPage('/', 'ecommerce-photo-upload')
    cy.editItemButtonIsVisible()
    cy.contains('a', 'Edit Images').should('be.visible').click()
    cy.url().should('include', 'product-detail');
})

Cypress.Commands.add('uploadImage', (itemPath, itemName) => {
    cy.fixture(itemPath, 'binary').then(image => {
        const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
        const formData = new FormData();
        formData.append('colorId', '2');
        formData.append('fabricId', '2');
        formData.append('formFile', blob, itemName);
        formData.append('productId', '2');
        cy.request({
            method: 'POST',
            url: `//api/api/Product/UploadProductImage`,
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})