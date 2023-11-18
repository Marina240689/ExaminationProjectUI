import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
    constructor() {
        super()
        this.elements.emailInput = '#emailControl';
        this.elements.passwordInput = '#passwordControl';
        this.elements.repeatPasswordInput = '#repeatPasswordControl';
        this.elements.securityQuestionDropdown = '[class="mat-form-field-flex ng-tns-c119-10"]';
        this.elements.securityQuestionDropdownList = '#mat-select-0-panel'
        this.elements.answearInput = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton';

    }

    visit() {
        cy.log('Open Registration Page');
        cy.visit('/register')

        cy.log('Check Url')
        cy.url()
            .should('include', '/register');

        this.acceptCookieButton();
        this.closeWelcomeMessage();
    }

    getEmailInput() {
        return cy.get(this.elements.emailInput);
    }

    getPasswordInput() {
        return cy.get(this.elements.passwordInput);
    }

    getRepeatpasswordInput() {
        return cy.get(this.elements.repeatPasswordInput);
    }

    getSecurityQuestionDropdown() {
        return cy.get(this.elements.securityQuestionDropdown);
    }

    getSecurityQuestionDropdownList() {
        return cy.get(this.elements.securityQuestionDropdownList);
    }

    getAnswearInput() {
        return cy.get(this.elements.answearInput);
    }

    getregisterButton() {
        return cy.get(this.elements.registerButton);
    }



    fillRegistrationfields(user) {
        cy.log('Fill registration fields');

        this.getEmailInput().type(user.email);
        this.getPasswordInput().type(user.password);
        this.getRepeatpasswordInput().type(user.password);
        // this.getSecurityQuestionDropdown().click();
        // this.getSecurityQuestionDropdownList()
        //     // .contains(securityQuestion)
        //     // .click();
        this.getAnswearInput().type(user.answear);

    }



}

export default new RegistrationPage()


