import { findProduct } from '../helper';
import home from '../support/pages/HomePage';


it('order', () => {
    home.visit();
    findProduct(' OWASP Juice Shop Sticker Page ')
})