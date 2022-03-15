import * as assert from "@tests/helpers/asserts";
import * as cookie from "@tests/helpers/cookie";
import * as element from "@tests/helpers/elements";
import { ROUTES } from "@tests/consts/routes";
import * as route from "@tests/helpers/route";
import * as authData from "@tests/data/login.data";
import * as loginPage from "@tests/pages/login.page";


describe('Login', function() {
    beforeEach(() => {
        cookie.clearCookies();
        route.visitDashboard(ROUTES.login)
        assert.shouldBeVisible(loginPage.loginForm)
    });

    it("Failed login when username or password invalid", () => {
        element.fillField(loginPage.usernameField, authData.INVALID_LOGIN_DATA.username);
        element.fillField(loginPage.passwordField, authData.INVALID_LOGIN_DATA.password);
        element.click(loginPage.loginButton);
    
        assert.shouldBeVisible(loginPage.errorAlert);
      });

    it('Successfully logged in using standard user account', () => {
        element.fillField(loginPage.usernameField, authData.VALID_STANDARD_USER.username)
        element.fillField(loginPage.passwordField, authData.VALID_STANDARD_USER.password)
        element.click(loginPage.loginButton)

        assert.shouldLocationEqual(ROUTES.home)
    });
});
    