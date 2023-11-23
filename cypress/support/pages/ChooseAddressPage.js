import { th } from "@faker-js/faker";
import BasePage from "./BasePage";

class ChooseAddressPage extends BasePage {

    constructor() {
        super()
        this.elements.addAddressButton = 'button.btn-new-address';
        this.elements.addressRadioButton = '.mat-cell.cdk-column-Name';
        this.elements.nextButton = '.btn.btn-next';
    }

    getAddAddressButton() {
        return cy.get(this.elements.addAddressButton);
    }

    getAddressRadioButton() {
        return cy.get(this.elements.addressRadioButton);
    }

    getNextButton() {
        return cy.get(this.elements.nextButton);
    }

    clickAddAddressButton() {

        cy.log('Check that Add address button is active and Click')
        this.getAddAddressButton()
            .should('be.visible')
            .and('be.enabled')
            .click({ force: true });
    }

    chooseAddress() {

        cy.log('Check address Radio button is visible and click')
        this.getAddressRadioButton()
            .should('be.be.visible')
            .click({ force: true });

        cy.log('Check next button is enebled and click');
        this.getNextButton()
            .should('be.enabled')
            .click( {force:true});


    }

}

export default new ChooseAddressPage()