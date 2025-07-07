import { test as base, expect } from '@playwright/test'
import { PageManager } from "../page_objects/page-manager"
import { createUser, User } from '../model/faker-user';


export type TestOptions = {
    pageManager: PageManager;
    user: User;
}

export const test = base.extend<TestOptions>({
    pageManager: async ({ page }, use) => {
        let pm = new PageManager(page)
        await use(pm)
    }, 
    
    user: async ({}, use) => {
    const user = createUser();
        await use(user)
    },
})