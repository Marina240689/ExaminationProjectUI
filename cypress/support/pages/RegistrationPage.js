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
        this.elements.passwordErrorTooltip = '#mat-error-1';
        this.elements.allTooltips = '[class*=mat-error]';
        this.elements.allEmptyInputs = '[class*="mat-form-field-outline mat-form-field-outline-thick ng-tns-c119"]'
        this.elements.emailErrorTooltip = '#mat-error-0';
        this.elements.passworderrorTooltip = 'mat-error-1';
        this.elements.repeatPasswordErrorTooltip = '#mat-error-2';
        this.elements.securityQuestionTooltip = '#mat-error-3'
        this.elements.answearErrorTooltip = '#mat-error-4';

    }

    visit() {
        cy.log('Open Registration Page');
        cy.visit('/register')

        cy.log('Check Url')
        cy.url()
            .should('include', '/register');

        cy.log('Close Welcome popup')
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

    getRegisterButton() {
        return cy.get(this.elements.registerButton);
    }

    getAllErrorTooltips() {
        return cy.get(this.elements.allTooltips);
    }

    getEmailErrorTooltip() {
        return cy.get(this.elements.emailErrorTooltip);
    }

    getPasswordErrorTooltip() {
        return cy.get(this.elements.passwordErrorTooltip);
    }

    getRepeatPasswordErrorTooltip() {
        return cy.get(this.elements.repeatPasswordErrorTooltip);
    }

    getSecurityQuestionErrorTooltip() {
        return cy.get(this.elements.securityQuestionTooltip);
    }

    getAnswearErrorTooltip() {
        return cy.get(this.elements.answearErrorTooltip);
    }

    getAllValidatedFields() {
        return cy.get(this.elements.allEmptyInputs);
    }

    chooseSecurityQuestion(question) {
        this.getSecurityQuestionDropdownList()
            .find(`#mat-option-${question}`)
            .click()
    }


    register(user, question) {
        cy.log('Fill registration fields');

        this.getEmailInput().type(user.email);
        this.getPasswordInput().type(user.password);
        this.getRepeatpasswordInput().type(user.password);
        this.getSecurityQuestionDropdown().click();
        this.chooseSecurityQuestion(question)
        this.getAnswearInput().type(user.answear);

        cy.log('Check button enabled and click')
        this.getRegisterButton()
            .should('be.enabled')
            .click()

    }

    leaveAllFieldsEmppty() {
        cy.log('Trigger error tooltips');

        this.getEmailInput().focus().blur();
        this.getPasswordInput().focus().blur();
        this.getRepeatpasswordInput().focus().blur();
        this.getAnswearInput().focus().blur();
        this.getSecurityQuestionDropdown().click();
        cy.get('body').click()
    }


}

export default new RegistrationPage()


