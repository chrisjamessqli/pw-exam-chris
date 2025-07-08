import { Locator, Page } from "@playwright/test";
import { User } from "../../model/faker-user";

export class LeftPanelComponent {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly logoutLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator("#loginPanel a[href*='register']");
        this.logoutLink = page.locator("a[href*='logout']");
        this.usernameInput = page.locator("#loginPanel input[name='username']");
        this.passwordInput = page.locator("#loginPanel input[name='password']");
        this.loginButton = page.locator("#loginPanel input[type='submit']");
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async clickLogoutLink() {
        await this.logoutLink.click();
    }

    async fillLoginForm(user: User) {
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
    }

    async submitLoginForm() {
        await this.loginButton.click();
    }
}