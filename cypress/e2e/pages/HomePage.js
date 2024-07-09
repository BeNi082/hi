import {commonMethods} from "../../../commonmethods/CommonMethods";

const cookiesElement = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'

export class HomePage {
    visitURL() {
        commonMethods.visitURL(Cypress.env('url'));
    }

    clickOnAcceptCookies() {
        commonMethods.clickOnAElementByIndex(cookiesElement, 0);
    }

    typeText(webElement,Text) {
        cy.get(webElement).type(Text)
    }

}

export const homePage = new HomePage();