import login from '../support/pages/LoginPage';
import registration from '../support/pages/RegistrationPage';
import home from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import { fa, faker } from '@faker-js/faker';
import question from '../fixtures/securityQuestion.json';
import product from '../fixtures/product.json';
import basket from '../support/pages/BasketPage';
import chooseAddress from '../support/pages/ChooseAddressPage';
import address from '../fixtures/address.json';
import createAddress from '../support/pages/CreateAddressPage';
import delivery from '../support/pages/DeliveryMethodPage';
import deliveryMethod from '../fixtures/delivery.json';
import payment from '../support/pages/PaymantPage';
import paymentMethods from '../fixtures/paymentMethods.json';
import message from '../fixtures/messages.json';
import summary from '../support/pages/OrderSummaryPage';
import completion from '../support/pages/OrderCompletionPage'



user.email = faker.internet.email({ provider: 'testmail.com' });
user.password = faker.internet.password(/^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/); /**Так генерує пароль без спец символів */
user.answear = faker.person.firstName('female');
address.country = faker.location.country();
address.name = faker.person.firstName();
address.phone = faker.phone.number('########');
address.zip = faker.location.zipCode('####');
address.address = faker.location.secondaryAddress();
address.city = faker.location.city();
address.state = faker.location.state();
paymentMethods.paymentData.cardNumber = faker.finance.creditCardNumber({ issuer: '63##############' });



describe('Order test', () => {

    before(() => {
        registration.visit();
        registration.acceptCookie();
        registration.register(user, question.grandMotherName);
        registration.checkSuccessToastMessage(message.registrationToast);
        login.checkLoginPopupAppeared();
        login.login(user);

    })

    it('Make and order', () => {
        home.visit();
        home.addToBasket(product.firstPage);
        home.checkSuccessToastMessage(product.firstPage.productName);

        basket.visit();
        basket.checkProductIsPresentInBasket(product.firstPage);
        basket.clickCheckoutButton();

        chooseAddress.clickAddAddressButton();
        createAddress.createAddress(address);
        chooseAddress.checkSelectAddressCheckbox();
        chooseAddress.checkSuccessToastMessage(address.city);

        delivery.chooseDeliveryMethod(deliveryMethod.oneDay);

        payment.choosePaymentMethod(paymentMethods.methods.card);

        payment.fillCardData(address, paymentMethods.paymentData);
        payment.checkSuccessToastMessage(message.cardToast);
        payment.chooseCard();
        payment.clickContinueButton();

        summary.checkProductInSummary(product.firstPage);
        summary.ConfirmPlaceOrder();

        completion.checkSuccessOrderText(message.orderConfirmationText);

    })

}) 