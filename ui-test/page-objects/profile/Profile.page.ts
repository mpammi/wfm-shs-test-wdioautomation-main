// <copyright file='Login.page.ts' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { wdioWebBase } from '@symplr/wdio-core/build/wdio/WdioWeb.Base.js';
import { ProfileControls, profileControls} from "../profile/Profile.controls.ts";
import { faker } from "@faker-js/faker";

class ProfilePage {

  constructor() {
  }
   /**
   * Click on Serach icon
   * 
   */
  public async searchIcon(): Promise<void> {
    await wdioWebBase.waitTillPageLoads();
    await wdioWebBase.clickElement(profileControls.searchIcon);
  }
  /**
   * Enter Employee Name
   * 
   */  
    public async enterEmpName(employeeName: string) {
      await wdioWebBase.clickElement(profileControls.searchField);
      await wdioWebBase.enterText(
        profileControls.searchField,
        employeeName
      );
    }
  /**
   * Function for input and search employee in the serach box
   * 
   */
    public async searchEmpTbx() {
      await wdioWebBase.clickElement(profileControls.searchField);
    } 
  /**
   * Click on Find button
   * 
   */
    public async findBtn(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.findBtn);
    }
  /**
   * Select the Employee
   *
   */
    public async selectEmployeeFromList(employeename: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectEmployeeFromSearchResult(employeename)
      );
    }
   /**
   * Check Active checkbox
   * 
   */
   public async isActiveCbxDisplayed(): Promise<boolean> {
    return await wdioWebBase.isElementDisplayed(profileControls.activeCbx);
  }
  /**
   * Click on Active checkbox
   * 
   */
    public async checkActiveCbx() {
      await wdioWebBase.clickElement(profileControls.activeCbx);
    }
  /**
   * Click on search button
   * 
   */
   public async searchBtn(): Promise<void> {
    await wdioWebBase.clickElement(profileControls.searchBtn);
  } 
  /**
   * Employee search list is desplayed
   */
   public async isSearchResultDisplays() {
    return await wdioWebBase.isElementDisplayed(profileControls.isSearchResultDisplays);
  }
  /**
   *Select the First employee from the list
   */
   public async selectFirstEmployee(): Promise<void> {
    await wdioWebBase.clickElement(profileControls.firstEmployee);
  }
  /**
   * Check Profile Options
   * 
   */
     public async isProfileOptionsDisplayed() {
      let indexValue: number = 0;
      await wdioWebBase.switchToIframeByIndex(indexValue);
      await wdioWebBase.waitTillElementDisplayed(profileControls.profileOptions);
      return await wdioWebBase.isElementDisplayed(profileControls.profileOptions);
    }
  /**
   * Get pervious First Name
   */
    public async OldFirstName(): Promise<string> {
      const firstName = await $(profileControls.firstName);
      const value = await firstName.getValue();
      return value;
    }
  /**
     * Get pervious Last Name
     */
    public async OldLastName(): Promise<string> {
      const lastName = await $(profileControls.lastName);
      const value = await lastName.getValue();
      return value;
    }
  /**
   * Enter First Name
   */
    public async EnterFirstName(firstName: string): Promise<void> {
      await wdioWebBase.enterText(profileControls.firstName, firstName);
    }
  /**
     * Enter Last Name
     */
    public async EnterLastName(lastName: string): Promise<void> {
      await wdioWebBase.enterText(profileControls.lastName, lastName);
    }
  /**
   * Fill First name and Last name
   * Page Personal Demographics
   * First name random
   * Last Name random
   */
    public async fillRequiredFields() {
      await wdioWebBase.enterText(
        profileControls.firstName,
        faker.person.firstName()
      );
      await wdioWebBase.enterText(
        profileControls.lastName,
        faker.person.lastName()
      );
    }
  /**
   * Click on save button
   * 
   */
   public async saveBtn(): Promise<void> {
    await wdioWebBase.clickElement(profileControls.saveBtn);
  }
  /**
   * Get if the Screening Messages is displayed
   *
   * @returns true if the Screening message is displayed
   */
  public async isSaveMsgDisplayed(): Promise<boolean> {
    await wdioWebBase.waitTillElementDisplayed(profileControls.tostMsg);
    return (
      (await wdioWebBase.getElementText(profileControls.saveMessage)) ===
      "All changes have been saved."
    );
  }
  /**
   * Select the Professional Details
   */
   public async selectProfessionalDetails(): Promise<void> {
    await wdioWebBase.clickElement(profileControls.professionalDetails);
  }
  /**
   * Get if the Professional Details Page Header is displayed
   *
   * @returns true if the "Professional Details" Header is displayed
   */
    public async isProfessionalDetailsPageDisplayed(): Promise<boolean> {
      return await wdioWebBase.isElementDisplayed(profileControls.proffessionalDetailsPageHeader);
    }
  /**
   * Select Hospital dropdown
   * 
   */ 
    public async cLickOnHospitalDropdown(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.hospitalDropdown);
    }
  /**
   * Enter Hospital Name
   * 
   */  
    public async enterHospitalName(hospitalName: string): Promise<void> {
      await wdioWebBase.enterText(
        profileControls.hospitalDropdownList,
        hospitalName
      );
    }
  /**
   * Select Hospital Name
   * 
   */ 
    public async selectHospital(hospitalName: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectHospital(hospitalName)
      );
    }
  /**
   * Select Primary Unit dropdown
   * 
   */ 
    public async cLickOnPrimaryUnitDropdown(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.primaryUnitDropDown);
    }
  /**
   * Select Primary Unit Name
   * 
   */ 
    public async selectPrimaryUnit(primaryUnit: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectPrimaryUnit(primaryUnit)
      );
    }
  /**
   * Select JobTitle dropdown
   * 
   */ 
    public async cLickOnJobTitleDropdown(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.jobTitleDropDown);
    }
  /**
   * Select JobTitle from the list
   * 
   */ 
    public async selectJobTitle(jobTitle: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectJobTitle(jobTitle)
      );
    }
  /**
   * Select Level Of Care dropdown
   * 
   */ 
    public async cLickOnLevelOfCareDropdown(): Promise<void> {
    await wdioWebBase.clickElement(profileControls.levelOfCareDropdown);
  }
  /**
    * Select Level Of Care from the list
    * 
    */ 
    public async selectLevelOfCare(levelOfCare: string): Promise<void> {
        await wdioWebBase.clickElement(
          profileControls.selectLevelOfCare(levelOfCare)
      );
  }
  /**
   * Select Scheduling Group dropdown
   * 
   */ 
    public async cLickOnSchedulingGroupDropdown(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.schedulingGroupDropdown);
    }
  /**
   * Select Scheduling Group from the list
   * 
   */ 
    public async selectSchedulingGroup(schedulingGroup: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectSchedulingGroup(schedulingGroup)
      );
    }
  /**
   * Select Employee Status dropdown
   * 
   */ 
    public async cLickOnEmployeeStatusDropdown(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.employeeStatusDropDown);
    }
  /**
   * Enter comment random
   */
    public async enterComment() {
      await wdioWebBase.clickElement(profileControls.commentPrD);
      await wdioWebBase.enterText(profileControls.commentPrD, faker.string.alphanumeric());
    }
  /**
   * Select Scheduling Group from the list
   * 
   */ 
    public async selectEmployeeStatus(employeeStatus: string): Promise<void> {
      await wdioWebBase.clickElement(
        profileControls.selectEmployeeStatus(employeeStatus)
      );
    }
  /**
   * Click on save button
   * 
   */
  public async saveBtnPrD() {
    await wdioWebBase.clickElement(profileControls.saveBtnPrD);
  }
  /**
   * Navigate to Change Password page
   * 
   */
    public async changePasswordNvg(): Promise<void> {
      await wdioWebBase.waitTillElementDisplayed(profileControls.changePasswordLPL);
      await wdioWebBase.clickElement(profileControls.changePasswordLPL);
    }
  /**
   * Get if the Professional Details Page Header is displayed
   *
   * @returns true if the "Professional Details" Header is displayed
   */
    public async isChangePasswordPageDisplayed(): Promise<boolean> {
      await wdioWebBase.waitTillElementDisplayed(profileControls.changePasswordHeaderTxt);
      return await wdioWebBase.isElementDisplayed(profileControls.changePasswordHeaderTxt);
    }
  
  /**
   * To change the password
   *
   * @param newPassword for the user
   * @param confirmNewPassword for new password
   */
  public async changePassword(
      newPassword: string,
      confirmNewPassword: string
    ): Promise<void> {
      await wdioWebBase.enterText(profileControls.newPassword, newPassword);
      await wdioWebBase.enterText(profileControls.confirmNewPassword, confirmNewPassword);
    }
  /**
   * Enter New Password
   * 
   */  
    public async enterNewPassword(newPassword: string): Promise<void> {
      await wdioWebBase.clickElement(profileControls.newPassword);
      await wdioWebBase.enterText(
        profileControls.newPassword,
        newPassword
      );
    }
  /**
   * Enter Confirm New Password
   * 
   */  
   public async enterConfirmNewPassword(confirmNewPassword: string): Promise<void> {
    await wdioWebBase.clickElement(profileControls.confirmNewPassword);
    await wdioWebBase.enterText(
      profileControls.confirmNewPassword,
      confirmNewPassword
    );
  }
  /**
   * Check Save button enabled
   * 
   */
   public async isSaveBtnEnabled(): Promise<boolean> {
    const button = await $(profileControls.saveBtnCP);
    return await button.getAttribute('disabled') !== null;
  }
  /**
   * Click on save button
   * 
   */
    public async saveBtnCP(): Promise<void> {
      await wdioWebBase.clickElement(profileControls.saveBtnCP);
    }
  /**
   * Navigate to Employee Credential page
   * 
   */
    public async employeeCredentialsNvg(): Promise<void> {
      await wdioWebBase.waitTillElementDisplayed(profileControls.employeeCredentialsLPL);
      await wdioWebBase.clickElement(profileControls.employeeCredentialsLPL);
      await wdioWebBase.waitTillPageLoads();
    }
  /**
   * Employee Credential list is desplayed
   */
    public async isCredentialListDisplays() {
      return await wdioWebBase.isElementDisplayed(profileControls.employeeCredentialsList);
    }
  /**
   * Employee Credential Header is desplayed
   */
   public async isCredentialHeaderDisplays() {
    return await wdioWebBase.isElementDisplayed(profileControls.employeeCredentialHeaderTxt);
  }
  /**
   * Click on Edit icon and update the Reference (Lic.) number
   */
    public async editReferenceNumber(refNumber: number): Promise<void> {
      await wdioWebBase.clickElement(profileControls.empCreadentialEditIcon);
      await wdioWebBase.enterText(profileControls.referenceNumberTxtBox, refNumber);
      await wdioWebBase.clickElement(profileControls.saveBtnPrD);
  }
  /**
   * Click on Add button in the Employee Credential page
   * 
   */
    public async addBtn(){
      await wdioWebBase.clickElement(profileControls.addBtn);
    }
  /**
   * Enter Name of Credential
   */
    public async enterNameOfCredential(nameOfCredential: string) {
      await wdioWebBase.enterText(profileControls.nameOfCredentialSearchBox, nameOfCredential);
      await wdioWebBase.clickElement(profileControls.selectNameOfCredential(nameOfCredential));
  }
  /**
   * Enter Refrence Number
   */
    public async enterRefrenceNumber(refNumber: number) {
      await wdioWebBase.enterText(profileControls.referenceNumberTxtBox, refNumber);
  }
  /**
   * Select Expiration Date
   */
      public async selectExpirationDate() {
        await wdioWebBase.clickElement(profileControls.expirationDate);
        await wdioWebBase.clickElement(profileControls.selectExpirationDate);
    }
}

export const profilePage = new ProfilePage();
