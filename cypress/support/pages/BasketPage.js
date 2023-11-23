import BasePage from "./BasePage";

class BasketPage extends BasePage {

    constructor() {
        super()
        this.elements.checkoutButton = 'button#checkoutButton';
        this.elements.basketContainers = '.mat-card .mat-table';
    }

    visit() {

        cy.log('Visist checkout page')
        cy.visit('/basket', { timeout: 2000 });
    }

    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton)
    }

    getBasketContainer() {
        return cy.get(this.elements.basketContainers)
    }

    checkProductIsPresentInBasket(product) {

        cy.log('Check that product is present in card')
        this.getBasketContainer()
            .contains(product.productName)

    }

    clickCheckoutButton() {

        cy.log('Click checkout button')
        this.getCheckoutButton()
            .click({ force: true });
    }


}

export default new BasketPage()