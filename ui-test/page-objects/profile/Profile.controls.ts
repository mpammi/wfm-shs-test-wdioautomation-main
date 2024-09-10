// <copyright file='Login.controls.ts' company='symplr'>
// Copyright © 2022 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

export class ProfileControls {
  constructor() {
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
  public get findBtn() {
    return '//*[@name="findProfileByName"]';
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
    public get profileOptions() {
      return '//div[contains(text(), "Profile Options")]';
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
      return '//div[contains(text(),"Professional Details")]';
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
    public get firstName() {
      return `//input[@id="firstName"]`;
  }
  /**
   * Xpath locator for Professional Details lastname field
   */
    public get lastName() {
      return `//input[@id="lastName"]`;
  }
  /**
   * Xpath locator for Professional Details email field
   */
    get emailAddress() {
      return '//*[@id="email"]';
  }
  /**
   * Xpath locator for search result
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
   * Xpath locator for select employee
   * @param employeename
   * @returns
   */
  public selectEmployeeFromSearchResult(employeename: string): string {
    return `//a[contains(text(),'${employeename}')]`;
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
    return '//button[@id="saveBtn"]';
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

  /**
   * Xpath locator for Primary Unit dropdown
   */
    public get primaryUnitDropDown() {
      return '//ng-select[@id="primaryUnit"]';
  }

  /**
   * Xpath locator for JobTitle dropdown
   */
    public get jobTitleDropDown() {
      return '//ng-select[@id="jobTitle"]';
  }

  /**
   * Xpath locator for Level of Care dropdown
   */
    public get levelOfCareDropdown() {
      return '//ng-select[@id="levelOfCare"]';
  }

  /**
   * Xpath locator for Scheduling Group dropdown
   */
    public get schedulingGroupDropdown() {
      return '//ng-select[@id="employeeGroup"]';
  }

  /**
   * Xpath locator for Base Pay Rate input box
   */
    public get basePayRate() {
      return '//input[@id="basePayRate"]';
  }

  /**
   * Xpath locator for Employee Status dropdown
   */
    public get employeeStatusDropDown() {
      return '//ng-select[@id="status"]';
  }

  /**
   * Xpath locator for Employee Status dropdown
   */
    public get saveBtnPrD() {
      return '//button[contains(text(), "Save")]';
  }

  /**
   * Xpath locator for Professional Details Page
   */
    public get proffessionalDetailsPageHeader() {
      return '//h3[contains(text(), "Professional Details")]';
  }
  /**
   * Xpath locator for click Hospital dropdown
   */
    public get hospitalDropdown(): string {
      return '//ng-select[@id="hospital"]';
  }
  
  /**
   * Xpath locator for Hospital List
   */
  public get hospitalDropdownList(): string {
    return '//*[@id="dropDown"]/virtual-scroller/div[2]';
  }

  /**
   * Xpath locator for select Hospital name from dropdown
   */
  public selectHospital(hospitalName: string): string {
    return `//span[@class="ng-option-label ng-star-inserted" and contains(text(), '${hospitalName}')]`;
  }

  /**
   * Xpath locator for select Primary Unit from dropdown
   */
    public selectPrimaryUnit(primaryUnit: string): string {
      return `//span[@class="ng-option-label ng-star-inserted" and contains(text(), '${primaryUnit}')]`;
  }

  /**
   * Xpath locator for select JobTitle from dropdown
   */
      public selectJobTitle(jobTitle: string): string {
        return `//span[@class ="ng-option-label ng-star-inserted" and contains(text(), '${jobTitle}')]`;
  }

  /**
   * Xpath locator for select Level Of Care from dropdown
   */
      public selectLevelOfCare(levelOfCare: string): string {
        return `//span[@class="ng-option-label ng-star-inserted" and contains(text(), '${levelOfCare}')]`;
  }

  /**
   * Xpath locator for select Scheduling Group from dropdown
   */
    public selectSchedulingGroup(schedulingGroup: string): string {
      return `//span[@class="ng-option-label ng-star-inserted" and contains(text(), '${schedulingGroup}')]`;
  }

  /**
   * Xpath locator for select Scheduling Group from dropdown
   */
    public selectEmployeeStatus(employeeStatus: string): string {
      return `//span[@class="ng-option-label ng-star-inserted" and contains(text(), '${employeeStatus}')]`;
  }
  /**
   * Xpath locator for comment field
   */
   public get commentPrD() {
      return '//*[@id="comment"]';
  }
  /**
   * Xpath locator for New Password field
   */
    public get newPassword() {
      return '//input[@id="newPassword"]';
  }
  /**
   * Xpath locator for Confirm New Password field
   */
    public get confirmNewPassword() {
      return '//input[@id="confirmPassword"]';
  }
  /**
   * Xpath locator for Change Password Save button
   */
    public get saveBtnCP() {
      return '//button[@id="saveBtn"]';
  }
  /**
   * Xpath locator for Change Password Cancel button
   */
    public get cancelBtnCP() {
      return '//button[contains(text(), "Cancel")]';
  }
  /**
   * Xpath locator for Change Password Left Panel Link
   */
    public get changePasswordLPL() {
      return '//div[contains(text(), "Change Password")]';
  }
  /**
   * Xpath locator for Change Password Header Text
   */
    public get changePasswordHeaderTxt() {
      return '//h3[contains(text(), "Change Password")]';
  }
  /**
   * Xpath locator for Employee Credentials Left Panel link
   */ 
  public get employeeCredentialsLPL() {
    return '//div[contains(text(),"Employee Credentials")]';
  }
  /**
   * Xpath locator for Employee Credential Header Text
   */
    public get employeeCredentialHeaderTxt() {
      return '//h3[contains(text(), "Employee Credentials")]';
  }
  /**
   * Xpath locator for Employee Creadentials list
   */
    public get employeeCredentialsList() {
      return '//div[@class="user-credentials"]//following::tr';
  }
  /**
   * Xpath locator for Add button
   */
    public get addBtn() {
      return '//button[contains(text(), "Add")]';
  }
  /**
   * Xpath locator for Add Credential
   */
  public get addCredential() {
    return '//span[contains(text(), "Add Credential")]';
  }
  /**
   * Xpath locator for Name of Credential search box
   */
  public get nameOfCredentialSearchBox() {
    return '//div[@class="searchbox-wrap"]//input';
  }
  /**
   * Xpath locator for select Name of Credential search result
   */
    public selectNameOfCredential(nameOfCredential: string): string {
      return `//span[@class="mat-option-text" and contains(text(), '${nameOfCredential}')]`;
  }
  /**
   * Xpath locator for Reference Number input text box
   */
    public get referenceNumberTxtBox() {
      return '//input[@id="refNumber"]';
  }
  /**
   * Xpath locator for Employee Credentials - Expiration Date
   */
    public get expirationDate() {
      return '//input[@id="expDate"]';
  }
  /**
   * Xpath locator for Employee Credentials - Select Expiration Date
   */
    public get selectExpirationDate() {
      return '//div[@class="dayContainer"]/span[10]';
  }
  /**
   * Xpath locator for Employee Credentials - Completion Date
   */
    public get completionDate() {
      return '//input[@id="compDate"]';
  }
  /**
   * Xpath locator for Employee Credentials - Comments
   */
    public get managerComment() {
      return '//textarea[@id="managerComment"]';
  }
  /**
   * Xpath locator for Employee Credentials - Edit icon
   */
    public get empCreadentialEditIcon() {
      return '(//span[@class="cursor icon icon-ge-edit icon-sm ng-star-inserted"])[1]';
  }
}

export const profileControls = new ProfileControls();