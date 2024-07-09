import {commonMethods} from "../../../commonmethods/CommonMethods";

const autentificareSELECTOR = '.login'
const emailSelector = '[name="email"][type="email"]'
const passwordSelector = '[name="password"]'
const clickOnSubmitButton = '[data-link-action="sign-in"]'

export class LoginPage {

    clickOnAutentificare() {
        commonMethods.clickOnAElement(autentificareSELECTOR);
    }

    typeEmail() {
        commonMethods.typeText(emailSelector, Cypress.env('email'))
    }

    typePassword() {
        commonMethods.typeText(passwordSelector, Cypress.env('password'))
    }

    clickOnSubmitButton() {
        commonMethods.clickOnAElement(clickOnSubmitButton)
    }
}

export const loginPage = new LoginPage();