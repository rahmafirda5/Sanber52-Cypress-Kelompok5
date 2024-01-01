describe('Verify Shopping cart process', () => {
    beforeEach(() => {

      cy.visit('https://magento.softwaretestingboard.com/')

    })
  
    it('check displays empty cart', () => {

      cy.get('.minicart-wrapper > .action').click()
      cy.get('.cart-empty').should('be.visible')
  
    })

    it('user is not able to add product to cart without choose the size and colour option', () => {

        cy.get('.product-items > :nth-child(1)').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.size').should('contain', 'This is a required field')
        cy.get('.swatch-attribute.color').should('contain', 'This is a required field')
        
    })

      it('user is able to add product to shopping cart', () => {

        cy.get('.product-items > :nth-child(1)').click()
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should('be.visible')
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.showcart').click()
        cy.get('#minicart-content-wrapper > .block-content > :nth-child(3) > div.primary').should('be.visible')
        
    })

      it('user is able to view shopping cart', () => {

        cy.get('.product-items > :nth-child(1)').click()
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should('be.visible')
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.showcart').click()
        cy.get('#minicart-content-wrapper > .block-content > :nth-child(3) > div.primary').should('be.visible')
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        
    })

      it('user is able to update size on shopping cart', () => {

        cy.get('.product-items > :nth-child(1)').click()
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should('be.visible')
        cy.get('.showcart > .counter').should('be.visible')
        cy.get('.showcart').click()
        cy.get('#minicart-content-wrapper > .block-content > :nth-child(3) > div.primary').should('be.visible')
        cy.get(':nth-child(7) > .secondary > .action > span').click()
        cy.get('.action-edit').click()
        cy.get('#option-label-size-143-item-170').click()
        cy.get('#product-updatecart-button').click()
        cy.get('.message-success > div').should('be.visible')

    })

})
  
    