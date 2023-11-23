import BasePage from "./BasePage";

class OrderSummaryPage extends BasePage {

    constructor() {
        super()
        this.elements.orderConfirmationMessage = '.confirmation'
    }

    getOrderConfirmationMessage() {
        return cy.get(this.elements.orderConfirmationMessage);
    }

    checkSuccessOrderText(text) {

        cy.log('Check that order is success ');
        this.getOrderConfirmationMessage().contains(text)
    }


}
export default new OrderSummaryPage()