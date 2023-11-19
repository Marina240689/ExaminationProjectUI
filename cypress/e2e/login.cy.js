import { checkErrorTooltipColor, checkValidatedFieldsColor } from '../helper';
import registration from '../support/pages/RegistrationPage';
import elements from '../fixtures/elements.json';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import question from '../fixtures/securityQuestion.json';
import login from '../support/pages/LoginPage';

user.email = faker.internet.email({ provider: 'testmail.com' });
user.password = faker.internet.password(/^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/); /**Так генерує пароль без спец символів */
user.answear = faker.person.firstName('female');

describe('Register user', () => {


    it('Register user', () => {
        registration.visit();
        registration.register(user, question.mothersName);
    })

    it('Login', () => {
        login.visit();
        login.login(user);
        // login.checkUserIsLoggedIn(user)

        login.checkUserIsLogedIn(user);
    })

    it('Validation of elements for empty state', () => {
        login.visit();
        login.triggerEmptyErrorTooltips();

        cy.log('Check color and visability of all error tooltips')
        checkErrorTooltipColor(login, elements)

        cy.log('Check tooltips text');
        login.getEmailErrorTooltip()
            .invoke('text')
            .should('eq', elements.emailTooltipText);

        login.getPasswordErrorTooltip()
            .invoke('text')
            .should('eq', elements.passwordTooltipText);

        cy.log('Check color of all fields');
        checkValidatedFieldsColor(login, elements);

        cy.log('Check button is disabled')
        login.getLoginButton()
            .should('be.disabled')
    })

})

