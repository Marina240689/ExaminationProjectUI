import BasePage from "./BasePage";

class LoginPage extends BasePage {
    constructor() {
        super()
        this.elements.loginPopup = "#login-form"
        this.elements.emailInput = '#email';
        this.elements.passwordInput = '#password';
        this.elements.loginButton = '#login-form #loginButton';
        this.elements.allErrorTooltips = '[class*=mat-error]';
        this.elements.validatedFields = '[class*="mat-form-field-outline mat-form-field-outline-thick"]';
        this.elements.emailErrorTooltip = '#mat-error-0';
        this.elements.passwordErrorTooltip = '#mat-error-1';

    }

    visit() {
        cy.log('Open login page')
        cy.visit('/login', { timeout: 3000 });


    }

    getLoginPopup() {
        return cy.get(this.elements.loginButton);
    }

    getEmailInput() {
        return cy.get(this.elements.emailInput)
    }

    getPasswordInput() {
        return cy.get(this.elements.passwordInput)
    }

    getLoginButton() {
        return cy.get(this.elements.loginButton);
    }

    getAllErrorTooltips() {
        return cy.get(this.elements.allErrorTooltips);
    }

    getEmailErrorTooltip() {
        return cy.get(this.elements.emailErrorTooltip);
    }

    getPasswordErrorTooltip() {
        return cy.get(this.elements.passwordErrorTooltip);
    }

    getAllValidatedFields() {
        return cy.get(this.elements.validatedFields);
    }


    login(user) {

        cy.log('Fill inputs');
        this.getEmailInput()
            .should('be.empty')
            .type(user.email);

        this.getPasswordInput()
            .should('be.empty')
            .type(user.password);

        cy.log('Click Login button')
        this.getLoginButton()
            .should('be.enabled')
            .click();
    }

    checkUserIsLogedIn(user) {

        cy.log('Click on Account Icon')
        this.getAccountIcon()
            .click();

        cy.log('Find item with user email')
        this.getAccountMenu()
            .children()
            .first()
            .invoke('text')
            .should('contain', user.email);
    }

    checkLoginPopupAppeared() {

        cy.log('Check login popup appeared after registration')
        this.getLoginPopup()
            .should('be.visible');
    }

    triggerEmptyErrorTooltips() {

        cy.log('Leave all fields empty');
        this.getEmailInput().focus().blur();
        this.getPasswordInput().focus().blur();
    }






}

export default new LoginPage()