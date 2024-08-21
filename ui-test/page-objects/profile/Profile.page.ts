// <copyright file='Login.page.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BasePage } from "../base/Base.page.ts";
import { profileControls} from "../profile/Profile.controls.ts";
import { faker } from "@faker-js/faker";

class ProfilePage extends BasePage {

  constructor() {
    super();
  }
   /**
   * Function for input and search employee in the serach box
   * 
   */
  public async searchIcon(): Promise<void> {
    await super.waitTillPageLoads();
    await super.clickElement(profileControls.searchIcon);
  }
   /**
   * Check Active checkbox
   * 
   */
   public async isActiveCbxDisplayed(): Promise<boolean> {
    return await super.isElementDisplayed(profileControls.activeCbx);
  }
  /**
   * Click on Active checkbox
   * 
   */
    public async checkActiveCbx() {
      await super.clickElement(profileControls.activeCbx);
    }
  /**
   * Click on search button
   * 
   */
   public async searchBtn(): Promise<void> {
    await super.clickElement(profileControls.searchBtn);
  } 
  /**
   * Employee search list is desplayed
   */
   public async isSearchResultDisplays() {
    return await super.isElementDisplayed(profileControls.isSearchResultDisplays);
  }
  /**
   *Select the First employee from the list
   */
   public async selectFirstEmployee(): Promise<void> {
    await super.clickElement(profileControls.firstEmployee);
  }
  /**
   * Check Profile Options
   * 
   */
     public async isProfileOptionsDisplayed() {
      let indexValue: number = 0;
      await super.switchToIframeByIndex(indexValue);
      return await super.isElementDisplayed(profileControls.profileOptions);
    }
  /**
   * Fill First name and Last name
   * Page Personal Demographics
   * First name random
   * Last Name random
   */
    public async fillRequiredFields() {
      await super.enterText(
        profileControls.firstName,
        faker.person.firstName()
      );
      await super.enterText(
        profileControls.lastName,
        faker.person.lastName()
      );
    }
  /**
   * Click on save button
   * 
   */
   public async saveBtn(): Promise<void> {
    await super.clickElement(profileControls.saveBtn);
  }
  /**
   * Get if the Screening Messages is displayed
   *
   * @returns true if the Screening message is displayed
   */
  public async isSaveMsgDisplayed(): Promise<boolean> {
    await super.waitTillElementDisplayed(profileControls.tostMsg);
    return (
      (await super.getElementText(profileControls.saveMessage)) ===
      "All changes have been saved."
    );
  }
}

export const profilePage = new ProfilePage();
