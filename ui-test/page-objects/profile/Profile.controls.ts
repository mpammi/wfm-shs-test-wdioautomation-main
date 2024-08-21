// <copyright file='Login.controls.ts' company='symplr'>
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { BaseControls} from "../base/Base.controls.ts";

class ProfileControls extends BaseControls {
  constructor() {
    super();
  }

  /**
   * Xpath locator for searchicon
   */
  get searchIcon() {
    return '//img[@class="search-icon"]';
  }
  /**
   * Xpath selector to check checkbox of AOS
   */
  get activeCbx() {
    return '//input[@name="statusActive"]';
  }
  /**
   * Xpath locator for search field 
   */
  public get searchField() {
    return '//input[@name="staffName" and @class="formField"]';
  }
  /**
   * Xpath locator for Find button 
   */
    get findButton() {
    return '//input[@name="findProfileByName" and @class="buttonPriority"]';
  }
  /**
   * Xpath locator for searchResult list
   */
    get searchResult() {
      return '//*[@id="search-results"]/tbody';
  }
  /**
   * Xpath locator for Profile Options
   */
    get profileOptions() {
      return '//div[@class="options"]';
  }
  /**
   * Xpath locator for Personal Demographics page
   */
    get personalDemographics() {
      return '//div[contains(text(),"Personal Demographics")]';
  }
  /**
   * Xpath locator for Professional details page
   */
      get professionalDetails() {
        return '//div[@routerlink="professionalDetails"]';
  }
  /**
   * Xpath locator for Professional Details username field
   */
    get usernamePD() {
      return '//*[@id="usernamePD"]';
  }
  /**
   * Xpath locator for Professional Details employeeID field
   */
    get employeeId() {
      return '//*[@id="employeeIdPD"]';
  }
  /**
   * Xpath locator for Professional Details firstname field
   */
    get firstName() {
      return '//*[@id="firstName"]';
  }
  /**
   * Xpath locator for Professional Details lastname field
   */
    get lastName() {
      return '//*[@id="lastName"]';
  }
  /**
   * Xpath locator for Professional Details email field
   */
    get emailAddress() {
      return '//*[@id="email"]';
  }
  /**
   * Verify search resault
   */
    public get isSearchResultDisplays() {
      return '//*[@id="search-results"]/tbody';
  }
  /**
   * Xpath locator for taking first employee from search
   */
  public get firstEmployee(): string {
    return '//*[@id="search-results"]/tbody/tr[1]/td[1]/a';
  }
  /**
   * Xpath locator for Search button
   */
    public get searchBtn() {
      return "//input[@name='findProfileByCriteria' and @class='buttonPriority']";
  }
  /**
   * Xpath locator for Save button
   */
  public get saveBtn() {
    return '//*[@id="saveBtn"]';
  }
  /**
   * Xpath locator for successful message
   */
  public get saveMessage() {
    return '//div[contains(text()," All changes have been saved. ")]';
  }

    /**
   * Xpath locator for tost message
   */
    public get tostMsg() {
      return '//div[@id="toast-container"]';
    }
}

export const profileControls = new ProfileControls();