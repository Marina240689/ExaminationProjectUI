import registration from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import elements from '../fixtures/elements.json'
import { checkErrorTooltipColor, checkValidatedFieldsColor } from '../helper';
import question from '../fixtures/securityQuestion.json';
import login from '../support/pages/LoginPage'


user.email = faker.internet.email({ provider: 'testmail.com' });
user.password = faker.internet.password(/^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/); /**Так генерує пароль без спец символів */
user.answear = faker.person.firstName('female');


describe('Check Registration', () => {


  it('Register a user', () => {

    registration.visit();
    registration.register(user, question.mothersName);

    cy.log('Check login popup appeared')
    login.getLoginPopup()
      .should('be.visible')
  })


  it('Check Login after registration', () => {

    login.visit();
    login.login(user);
    login.checkUserIsLogedIn(user)
  })


  it('Validation of elements for empty state', () => {

    registration.visit();
    registration.leaveAllFieldsEmppty();

    cy.log('Check color and visability of all erorr tooltips for empty fields')
    checkErrorTooltipColor(registration, elements);

    cy.log('Check All Error tooltip text');
    registration.getEmailErrorTooltip()
      .invoke('text')
      .should('eq', elements.emailTooltipText);

    registration.getPasswordErrorTooltip()
      .invoke('text')
      .should('contain', elements.passwordTooltipText);

    registration.getRepeatPasswordErrorTooltip()
      .invoke('text')
      .should('eq', elements.repeatPasswordTooltipText);

    registration.getSecurityQuestionErrorTooltip()
      .invoke('text')
      .should('eq', elements.securityQuestionTooltipText);

    registration.getAnswearErrorTooltip()
      .invoke('text')
      .should('eq', elements.answearErrorTooltipText);

    cy.log('Check color of all fields')
    checkValidatedFieldsColor(registration, elements);

    cy.log('Check that button is disabled')
    registration.getRegisterButton()
      .should('be.disabled')
  })
})