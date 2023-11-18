import BasePage from "./BasePage";

class HomePage extends BasePage {

    constructor() {
        super()

    }

    visit(){
        cy.log('Opening home page6 accept cookie and close welcome message')
        cy.visit('/');
        this.acceptCookieButton();
        this.closeWelcomeMessage();


    }

    }

    export default new HomePage()