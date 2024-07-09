import {homePage} from "../pages/HomePage";
import {commonMethods} from "../../../commonmethods/CommonMethods";
import {loginPage} from "../pages/LoginPage";

describe('', () => {
    it('should ', () => {
     homePage.visitURL();
     homePage.clickOnAcceptCookies();
     loginPage.clickOnAutentificare();
     loginPage.typeEmail();
     loginPage.typePassword();
     loginPage.clickOnSubmitButton();
     homePage.visitURL();
    });
});