// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { loginPage } from "../../page-objects/login/Login.page.ts";

Given('the user launches the app', async () => {
  let isLogoDisplayed = await loginPage.LaunchApp();
  expect(isLogoDisplayed).to.equal(true);
});

When ('the user login as an {string}' ,  async (user: string) => {
  await loginPage.login(user);
});

Then ('the user should be successfully logged in' , async ()  => {
  expect(await loginPage.isLoggedIn()).to.equals(true,'ASSERTION ERROR: User not logged in');
});

Then ('the user logout from the app' , async ()  => {
    await loginPage.logout();
});

Then ('the user should be successfully logged out', async ()  => {
  let isLoggedOut = await loginPage.isLoggedOut();
  expect(isLoggedOut).to.equal(true,'ASSERTION ERROR: User not logged out');
});

