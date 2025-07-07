import { Locator, Page } from "@playwright/test";
import { User } from "../../model/faker-user";

export class RegisterFormComponent {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly cityField: Locator;
    readonly stateField: Locator;
    readonly zipCodeField: Locator;     
    readonly phoneNumberField: Locator;
    readonly ssnField: Locator;     
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator; 
    readonly registerButton: Locator;
    readonly registrationSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator("input[id='customer.firstName']");
        this.lastNameField = page.locator("input[id='customer.lastName']");
        this.addressField = page.locator("input[id='customer.address.street']");
        this.cityField = page.locator("input[id='customer.address.city']");
        this.stateField = page.locator("input[id='customer.address.state']");
        this.zipCodeField = page.locator("input[id='customer.address.zipCode']");
        this.phoneNumberField = page.locator("input[id='customer.phoneNumber']");
        this.ssnField = page.locator("input[id='customer.ssn']");
        this.usernameField = page.locator("input[id='customer.username']");
        this.passwordField = page.locator("input[id='customer.password']");
        this.confirmPasswordField = page.locator("#repeatedPassword");
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.registrationSuccessMessage = page.locator("h1:has-text('Welcome ')");
    }

    async fillRegisterForm(user: User) {
        await this.firstNameField.fill(user.firstname);
        await this.lastNameField.fill(user.lastname);
        await this.addressField.fill(user.street);
        await this.cityField.fill(user.city);
        await this.stateField.fill(user.state);
        await this.zipCodeField.fill(user.zipCode);
        await this.phoneNumberField.fill(user.phoneNumber);
        await this.ssnField.fill(user.ssn);
        await this.usernameField.fill(user.username);
        await this.passwordField.fill(user.password);
        await this.confirmPasswordField.fill(user.password);
    }

    async submitRegisterForm() {
        await this.registerButton.click();
    }
}