export default class BasePage {

    constructor() {
        this.elements = {};
        this.elements.acceptCookieButton = '.cc-dismiss';
        this.elements.dissmissWelcomeMessageButton = '.close-dialog';
    }

    getAcceptCookieButton() {
        return cy.get(this.elements.acceptCookieButton);
    }

    getDissmissWelcomeMessageButton() {
        return cy.get(this.elements.dissmissWelcomeMessageButton);
    }


    acceptCookieButton(){
        cy.log('Accept cookie')
        this.getAcceptCookieButton().then(cookie => {
            if(cookie.length > 0) {
                cy.wrap(cookie).click();
            }
        })
    }

    closeWelcomeMessage(){
        cy.log('Close welcome message');
        this.getDissmissWelcomeMessageButton().then(message => {
            if(message.length > 0) {
                cy.wrap(message).click();
            }
        })

    }




}