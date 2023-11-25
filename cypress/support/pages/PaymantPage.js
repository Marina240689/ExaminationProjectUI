import { th } from "@faker-js/faker";
import BasePage from "./BasePage";

class PaymentPage extends BasePage {

    constructor() {
        super()
        this.elements.listOfPaymentNethods = '[class*="mat-card"]';
        this.elements.nameInput = '#mat-input-14';
        this.elements.cardNumberInput = '#mat-input-15';
        this.elements.expireMonthDropdown = '#mat-input-16';
        this.elements.expireYearDropdown = '#mat-input-17';
        this.elements.submitButton = '#submitButton';
        this.elements.chooseCardRadioButton = '#mat-radio-44';
        this.elements.continueButton = 'button.nextButton';


    }

    getListOfPaymentMethods() {
        return cy.get(this.elements.listOfPaymentNethods);
    }


    getNameInput() {
        return cy.get(this.elements.nameInput);
    }

    getCardNumberInput() {
        return cy.get(this.elements.cardNumberInput);
    }

    getExpireMonthDropdown() {
        return cy.get(this.elements.expireMonthDropdown)
    }

    getExpireYearDropdown() {
        return cy.get(this.elements.expireYearDropdown);
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    }

    getChooseCardRadioButton() {
        return cy.get(this.elements.chooseCardRadioButton);
    }

    getContinueButton() {
        return cy.get(this.elements.continueButton);
    }

    choosePaymentMethod(method) {

        cy.log('Choose Payment Method')
        this.getListOfPaymentMethods()
            .contains(method)
            .click({ force: true }, { timeout: 2000 });
    }

    fillCardData(data, payment,) {

        cy.log('Fill card data')
        this.getNameInput().type(data.name, { force: true })
        this.getCardNumberInput().type(payment.cardNumber, { force: true });
        this.getExpireMonthDropdown().select('1', { force: true });
        this.getExpireYearDropdown().select('2094', { force: true });

        cy.log('Check that Submit button is enabled and click')
        this.getSubmitButton()
            .should('be.enabled')
            .click({ force: true }, {timeout: 2000});
    }

    chooseCard() {

        cy.log('Check checkbox of saved card');
        this.getChooseCardRadioButton().dblclick({ force: true }, {timeout: 2000});
    }

    clickContinueButton() {

        cy.log('Click Continue button after choosing card');
        this.getContinueButton()
        .should('be.enabled')
        .click({ force: true }, {timeout: 2000});
    }



}

export default new PaymentPage()