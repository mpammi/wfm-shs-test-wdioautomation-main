// <copyright file='Login.page.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { AppConfigDataProvider } from '../../configDataProvider/appConfigDataProvider.ts';
import { wdioWebBase } from '@symplr/wdio-core/build/wdio/WdioWeb.Base.js';
import { loginControls } from "./Login.controls.ts";

class LoginPage {
  
  private appConfig: AppConfigDataProvider;

  constructor() {
    this.appConfig =new AppConfigDataProvider();
  }

  /**
   * Launch the application
   *
   * @returns true if application logo is displayed or false otherwise
   */
  public async LaunchApp() {
    await wdioWebBase.maximizeWindow();
    await wdioWebBase.navigateTo(this.appConfig.appUrl);
    return await wdioWebBase.isElementDisplayed(loginControls.applogo);
  }
 /**
   * Log in for the provided user
   * Retrieves credentials from json file for the environment
   *
   * @param user to login with
   */
  public async login(user: string) {
    this.appConfig = new AppConfigDataProvider(user);
    await wdioWebBase.enterText(loginControls.usernameField, this.appConfig.userLogin);
    await wdioWebBase.enterText(loginControls.passwordField, this.appConfig.userPassword);
    await wdioWebBase.clickElement(loginControls.loginButton);
  }
  
   /**
   * To get the user login state
   *
   * @returns true if user is logged in or false otherwise
   */
  
  public async isLoggedIn() : Promise<boolean> {
    let indexvalue:number = 0;
     await wdioWebBase.waitTillPageLoads();
     await wdioWebBase.isElementDisplayed(loginControls.username);
     await wdioWebBase.isElementDisplayed(loginControls.staffingCalendarIframe);
     await wdioWebBase.switchToIframeByIndex(indexvalue);
     if(!await wdioWebBase.isElementDisplayed(loginControls.staffingCalendarSpinner)){
     await wdioWebBase.isElementDisplayed(loginControls.staffingCalendarModel);}
     await wdioWebBase.switchToParentFrame();
     return await wdioWebBase.isElementDisplayed(loginControls.logoutDropdown);
  }

   /**
   * Logout from the app
   * Click on logout as well as confirmation
   */
  public async logout() {
    await wdioWebBase.clickElement(loginControls.logoutDropdown);
    await wdioWebBase.clickElement(loginControls.logOut);
  }

   /**
   * To get the user login state
   *
   * @returns true if user is logged out or false otherwise
   */
  public async isLoggedOut() {
    return await wdioWebBase.isElementDisplayed(loginControls.loginButton);
  }
}

export const loginPage = new LoginPage();
