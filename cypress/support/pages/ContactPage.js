import BasePage from "./BasePage";

class ContactPage extends BasePage {

    constructor() {
        super()
        this.elements.commentInput = '#comment';
        this.elements.ratingSlider = '.rating-container .mat-slider-wrapper';
        this.elements.captcha = '#captcha';
        this.elements.captchaResultInput = '#captchaControl';
        this.elements.submitButton = 'button#submitButton';
    };

    visit() {

        cy.log('Visit contact page');
        cy.visit('/contact');
    };

    getCommentInput() {
        return cy.get(this.elements.commentInput);
    };

    getRatingSlider() {
        return cy.get(this.elements.ratingSlider);
    }
    ;
    getCaptcha() {
        return cy.get(this.elements.captcha);
    };

    getCaptchaResultInput() {
        return cy.get(this.elements.captchaResultInput);
    };

    getSubmitButton() {
        return cy.get(this.elements.submitButton);
    };

    leaveComment(text) {

        cy.log('Type a feedback')
        this.getCommentInput()
            .type(text, { force: true })
            .should('have.value', text);
    };

    resolveCaptcha() {

        cy.log('Solve captcha')
        this.getCaptcha().invoke('text').then((captcha) => {
            let result = eval(captcha);
            this.getCaptchaResultInput().type(result, { force: true });
        });
    };

    submitFeedbackForm() {

        cy.log('Check that submit buttom is enabled and click');
        this.getSubmitButton()
            .should('be.enabled')
            .click({ force: true });
    };

}

export default new ContactPage()