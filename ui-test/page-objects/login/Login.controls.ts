// <copyright file='Login.controls.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls } from "../base/Base.controls.ts";

class LoginControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for userName Textbox
   */
  get usernameField() {
    return '//input[@id="UserName"]';
  }

  /**
   * Xpath locator for Password Textbox
   */
  get passwordField() {
    return '//input[@id="Password"]';
  }
   
  /**
   * Xpath locator for login Button
   */
  get loginButton() {
    return '//\*[contains(text(), "Sign In")]';
  }

  /**
   * Xpath locator for application logo
   */
  get applogo() {
    return '//img[@id="sign-in-company-logo"]';
  }

  /**
   * Xpath locator for username text
   */
  get username() {
    return '//div[@class="user-name"]';
  }
   
  /**
   * Xpath locator for logout dropdown
   */
  get logoutDropdown() {
    return '//div[@class="user-profile"]//a';
  }

  /**
   * Xpath locator for logout
   */
  get logOut() {
    return '//a[contains(text(), "Logout")]';
  }

  /**
   * Xpath locator for staffingcalendar Iframe
   */
  get staffingCalendarIframe() {
    return '//\*[@id="reforgedIframe"]';
  }

  /**
   * Xpath locator for staffingcalendar model
   */
  get staffingCalendarSpinner() {
    return '//div[@id="staffing-calendar"]/following::ngx-spinner';
  }
  /**
   * Xpath locator for staffingcalendar model
   */
  get staffingCalendarModel() {
    return '//\*[@class="calendar"]';
  }
}

export const loginControls = new LoginControls();