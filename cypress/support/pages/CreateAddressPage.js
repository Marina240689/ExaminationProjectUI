import BasePage from "./BasePage";

class CreateAddressPage extends BasePage {
    constructor() {
        super()
        this.elements.countryField = '#mat-input-7';
        this.elements.nameField = '#mat-input-8';
        this.elements.mobileNumberField = '#mat-input-9';
        this.elements.zipField = '#mat-input-10';
        this.elements.addressField = '#address';
        this.elements.cityField = '#mat-input-12';
        this.elements.stateField = '#mat-input-13';
        this.elements.submitButton = 'button#submitButton';

    }

    getCountryField() {
        return cy.get(this.elements.countryField);
    }

    getNameField() {
        return cy.get(this.elements.nameField);
    }

    getMobileNumberField() {
        return cy.get(this.elements.mobileNumberField);
    }

    getZipField() {
        return cy.get(this.elements.zipField);
    }

    getAddressField() {
        return cy.get(this.elements.addressField);
    }

    getCityField() {
        return cy.get(this.elements.cityField);
    }

    getStateField() {
        return cy.get(this.elements.stateField);
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    }

    createAddress(address) {

        cy.log('Fill address fields')
        this.getCountryField().type(address.country, { force: true });
        this.getNameField().type(address.name, { force: true });
        this.getMobileNumberField().type(address.phone, { force: true });
        this.getZipField().type(address.zip, { force: true });
        this.getAddressField().type(address.address, { force: true });
        this.getCityField().type(address.city, { force: true });
        this.getStateField().type(address.state, { force: true });

        cy.log('Check Submit button is active and click');
        this.getSubmitButton()
            .should('be.enabled')
            .click({ force: true });

    }




}

export default new CreateAddressPage()