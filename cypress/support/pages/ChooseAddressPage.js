import BasePage from "./BasePage";

class ChooseAddressPage extends BasePage {

    constructor() {
        super()
        this.elements.addAddressButton = 'button.btn-new-address';
    }

    getAddAddressButton(){
        return cy.get(this.elements.addAddressButton);
    }

    clickAddAddressButton(){

        cy.log('Check that Add address button is visible and Click')
        this.getAddAddressButton()
        .should('be.visible')
        .click();
    }

    checkSelectAddressCheckbox(){
        cy.get('#mat-radio-40-input').check({force: true}, {timeout:3000});
        cy.get('button.btn-next').click({force: true});
    }









}

export default new ChooseAddressPage()