///<reference types="cypress"/>

import BasePage from "./BasePage";

class HomePage extends BasePage {

    constructor() {
        super()
        this.elements.allProductTitle = '.item-name';
        this.elements.addToBasketToast = 'snack-bar-container.mat-snack-bar-container';

    }

    visit() {
        cy.log('Opening home page, accept cookie and close welcome message')
        cy.visit('/', {timeout: 4000});
    }

    getAllProductTitles() {
        return cy.get(this.elements.allProductTitle);
    }

    findProductByName(productName) {

        cy.log('Find product by name')
        this.getAllProductTitles()
            .contains(productName)
    }

    addToBasket(product) {

        cy.log('Find product by name and find button')
        this.getAllProductTitles().contains(product.productName)
            .closest('.ribbon-card')
            .find('[aria-label="Add to Basket"]')
            .click();

    }

    checkSuccessToastMessage(text) {

        cy.log('Check that success toast message appeared and contains product name')
        cy.get('simple-snack-bar .mat-simple-snack-bar-content')
            .invoke('text').should('contain', text)

    }

}

export default new HomePage()