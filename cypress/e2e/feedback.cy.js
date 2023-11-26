import registration from '../support/pages/RegistrationPage';
import login from '../support/pages/LoginPage';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import feedback from '../support/pages/ContactPage';
import question from '../fixtures/securityQuestion.json';
import message from '../fixtures/messages.json'




user.email = faker.internet.email({ provider: 'testmail.com' });
user.password = faker.internet.password(/^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/); /**Так генерує пароль без спец символів */
user.answear = faker.person.firstName('female');


describe('Feedback Test', () => {

    before(() => {
        registration.visit();
        registration.acceptCookie();
        registration.register(user, question.grandMotherName);
        registration.checkSuccessToastMessage(message.registrationToast);
        login.checkLoginPopupAppeared();
        login.login(user);
        login.checkUserIsLogedIn(user);
    })

    it('Send a feedback', () => {
        feedback.visit();

        feedback.leaveComment(message.feedback);

        cy.log('Move rating slider')
        feedback.getRatingSlider()
            .click('right', { force: true });

        feedback.resolveCaptcha();
        feedback.submitFeedbackForm();
        feedback.checkSuccessToastMessage(message.feedbackTost);

    })


})
