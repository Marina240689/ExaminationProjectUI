
export default class BasePage {

    constructor() {
        this.elements = {};
        this.elements.acceptCookieButton = '.cc-dismiss';
        this.elements.dissmissWelcomeMessageButton = '.close-dialog';
        this.elements.accountIcon = '#navbarAccount';
        this.elements.accountMenu = '[class*="mat-menu-content"]';
        this.elements.toastMessage = 'simple-snack-bar .mat-simple-snack-bar-content';
    }

    getAcceptCookieButton() {
        return cy.get(this.elements.acceptCookieButton);
    }

    getDissmissWelcomeMessageButton() {
        return cy.get(this.elements.dissmissWelcomeMessageButton);
    }

    getAccountIcon() {
        return cy.get(this.elements.accountIcon);
    }

    getAccountMenu() {
        return cy.get(this.elements.accountMenu);
    }

    getToastMessage() {
        return cy.get(this.elements.toastMessage);
    }

    acceptCookie() {
        cy.log('Accept cookie')
        this.getAcceptCookieButton().click();
    }

    closeWelcomeMessage() {
        cy.log('Close welcome message');
        this.getDissmissWelcomeMessageButton().then(message => {
            if (message.length > 0) {
                cy.wrap(message).click();
            }
        })

    }

    checkSuccessToastMessage(text) {

        cy.log('Check that success toast message appeared and contains product name')
        this.getToastMessage()
            .invoke('text')
            .should('contain', text)

    }









}