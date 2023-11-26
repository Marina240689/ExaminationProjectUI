import BasePage from "./BasePage";

class OrderSummaryPage extends BasePage {

    constructor() {
        super()
        this.elements.summaryContainer = 'app-order-summary .mat-own-card';
        this.elements.placeOrderButton = 'button#checkoutButton'


    }

    getSummaryContainer() {
        return cy.get(this.elements.summaryContainer);
    }
    getPlaceOrderButton() {
        return cy.get(this.elements.placeOrderButton);
    }



    checkProductInSummary(text) {

        cy.log('Check that added product is present in Checkout')
        this.getSummaryContainer()
            .contains(text.productName, { timeout: 2000 });
    }

    ConfirmPlaceOrder() {

        cy.log('Click Place order button')
        this.getPlaceOrderButton().click({ force: true }, { timeout: 2000 });
    }


}




export default new OrderSummaryPage()
