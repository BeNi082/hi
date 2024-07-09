export class CommonMethods {
    visitURL(URl) {
        cy.visit(URl);
    }

    clickOnAElementByIndex(webElement, Index) {
        cy.get(webElement).eq(Index).click();
    }

    clickOnAElement(webElement) {
        cy.get(webElement).click()
    }

    typeText(WebElement, text) {
        cy.get(WebElement).should('be.visible').type(text);
    }

    typeTextByIndex(WebElement,Index,text) {
        cy.get(WebElement).eq(Index).type(text);
    }
}

export const commonMethods = new CommonMethods();