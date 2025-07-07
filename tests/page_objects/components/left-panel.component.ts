import { Locator, Page } from "@playwright/test";

export class LeftPanelComponent {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator("#loginPanel a[href*='register']");
        this.logoutLink = page.locator("a[href*='logout']");
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async clickLogoutLink() {
        await this.logoutLink.click();
    }
}