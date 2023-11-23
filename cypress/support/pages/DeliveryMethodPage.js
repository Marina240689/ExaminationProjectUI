import BasePage from "./BasePage";

class DeliveryMethodPage extends BasePage {

    constructor() {
        super()
        this.elements.allDeliveryOptions = '[data-icon]';
        this.elements.nextButton = 'button.nextButton'


    }

    getDeliveryOptions() {
        return cy.get(this.elements.allDeliveryOptions)
    }

    getNextButton() {
        return cy.get(this.elements.nextButton);
    }

    chooseDeliveryMethod(option) {

        cy.log('Click delivery method')
        cy.get(`[data-icon=${option.icon}]`, {timeout:2000}).click();

        cy.log('Check button is enabled and click');
        this.getNextButton()
            .should('be.enabled')
            .click();
    }

}




export default new DeliveryMethodPage()
