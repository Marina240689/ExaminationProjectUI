import homePage from '../support/pages/HomePage';
import registration from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
// import passwordRegexp from '../fixtures/regexp.json';


// let regExp =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;

user.email = faker.internet.email({ provider: 'testmail.com'});
user.password = faker.internet.password({ length: 10, memorable: false, pattern: /[A-Z]/ }); /**з таким регексп працює */
user.password = faker.internet.password(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/); /**Так генерує пароль без спец символів */
user.password = faker.internet.password(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$/); /**Так туж генерує пароль без спец символів */
user.password = faker.internet.password({ length: 10, memorable: false, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[a-zA-Z\d@#$%^&*!]{8,}$/}); /**Так не працює */
user.answear = faker.person.firstName('female');


describe('Check Registration', () => {


  it('Register a user', () => {
    registration.visit();
    registration.fillRegistrationfields(user);
    console.log(user.password);
  })


  // it('Check Login after registration', () => {



  // })


  // it('Check validation of error tooltips', () => {



  // })
})