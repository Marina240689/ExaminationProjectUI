import BasePage from "./BasePage";

class BasketPage extends BasePage {

    constructor() {
        super()
        this.elements.checkoutButton = 'button#checkoutButton'
    }

    visit() {

        cy.log('Visist checkout page')
        cy.visit('/basket');
    }

    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton)
    }

    checkProductIsPresentInBasket(product) {

        cy.log('Check that product is present in card')
        cy.get('.mat-card .mat-table').contains(product.productName)

    }

    clickCheckoutButton() {

        cy.log('Click checkout button')
        this.getCheckoutButton()
            .click();
    }


}

export default new BasketPage()