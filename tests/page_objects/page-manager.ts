import { Page } from "@playwright/test";
import { LeftPanelComponent } from "./components/left-panel.component";
import { RegisterFormComponent } from "./components/register-form.component";

export class PageManager {
    protected readonly loginPanel: LeftPanelComponent;
    protected readonly registerForm: RegisterFormComponent;

    constructor(page: Page) {
        this.loginPanel = new LeftPanelComponent(page);
        this.registerForm = new RegisterFormComponent(page);
    }

    onLeftPanel() {
        return this.loginPanel;
    }

    onRegisterForm() {
        return this.registerForm;
    }
}
