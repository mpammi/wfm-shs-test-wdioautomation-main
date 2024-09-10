// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { profilePage} from "../../page-objects/profile/Profile.page.ts";

let oldFirstName: string;
let oldLastName: string;
let newFirstName: string;
let newLastName: string;

Then (/^click on search icon$/i, async () =>{
  await profilePage.searchIcon();
});

Then(/^enter Employee Name as \"([^\"]*)\" and click on Find button$/,
  async (employeeName: string) => {
    await profilePage.enterEmpName(employeeName);
    await profilePage.findBtn();
  }
);

When(/^select it from employee list \"([^"]*)\"$/,
  async (employeename: string) => {
    await profilePage.selectEmployeeFromList(employeename);
  }
);

Then (/^select Active checkbox$/i, async () => {
  expect(
    await profilePage.isActiveCbxDisplayed(), 
    "Active Checkbox is displayed"
  ).to.be.true;
  await profilePage.checkActiveCbx();
});

When (/^click on Search button$/i, async () => {
  await profilePage.searchBtn();
});

Then (/^check active employee search result$/i, async () => {
  expect(
    await profilePage.isSearchResultDisplays(),
    "Employee search result should be displayed"
  ).to.be.true;
});

When(/^select first employee from the search result$/i, async () => {
  await profilePage.selectFirstEmployee();
});

Then(/^check Profile Options$/i, async () => {
  expect(
    await profilePage.isProfileOptionsDisplayed(),
    'Profile Options is displayed'
  ).to.be.true;
});

Then(/^edit and update firstname and lastname$/i, 
  async () => {
  await profilePage.fillRequiredFields();
});

Then(/^edit user first name as \"([^\"]*)\" and last name as \"([^\"]*)\"$/i, 
  async (userNewFirstName: string, userNewLastName: string) => {
    oldFirstName = await profilePage.OldFirstName();
    oldLastName = await profilePage.OldLastName();
    newFirstName = userNewFirstName;
    newLastName = userNewLastName;
    await profilePage.EnterFirstName(userNewFirstName);
    await profilePage.EnterLastName(userNewLastName);
});

Then(/^click on Save button$/i, async () => {
  await profilePage.saveBtn();
});

Then(/^verify the user details$/i, async () => {
  expect(oldFirstName === newFirstName).to.be.false;
  expect(oldLastName === newFirstName).to.be.false;
});

Then(/^Reset the user details$/i, async () => {
  oldFirstName = String(oldFirstName);
  oldLastName = String(oldLastName);
  await profilePage.EnterFirstName(oldFirstName);
  await profilePage.EnterLastName(oldLastName);
  await profilePage.saveBtn();
});

Then(/^verify All changes have been saved message$/i, async () => {
  await profilePage.isSaveMsgDisplayed();
});

Then(/^select and verify Professional Details header$/i, async () => {
  await profilePage.selectProfessionalDetails();
  expect(
    await profilePage.isProfessionalDetailsPageDisplayed(), 
    'Professional Deatils header is displayed'
  ).to.be.true;
});

Then(/^select the hospital from dropdown as \"([^\"]*)\"$/i,
  async (hospitalName: string) => {
    await profilePage.cLickOnHospitalDropdown();
    await profilePage.selectHospital(hospitalName);
  }
);

Then(/^select Primary Unit from dropdown as \"([^\"]*)\"$/i,
  async (primaryUnit: string) => {
    await profilePage.cLickOnPrimaryUnitDropdown();
    await profilePage.selectPrimaryUnit(primaryUnit);
  }
);

Then(/^select JobTitle from dropdown as \"([^\"]*)\"$/i,
  async (jobTitle: string) => {
    await profilePage.cLickOnJobTitleDropdown();
    await profilePage.selectJobTitle(jobTitle);
  }
);

Then(/^select Level Of Care from dropdown as \"([^\"]*)\"$/i,
  async (levelOfCare: string) => {
    await profilePage.cLickOnLevelOfCareDropdown();
    await profilePage.selectLevelOfCare(levelOfCare);
  }
);

Then(/^select Scheduling Group from dropdown as \"([^\"]*)\"$/i,
  async (schedulingGroup: string) => {
    await profilePage.cLickOnSchedulingGroupDropdown();
    await profilePage.selectSchedulingGroup(schedulingGroup);
  }
);

Then(/^select Employee Status from dropdown as \"([^\"]*)\"$/i,
  async (employeeStatus: string) => {
    await profilePage.cLickOnEmployeeStatusDropdown();
    await profilePage.selectEmployeeStatus(employeeStatus);
  }
);

Then(/^select comment and enter text$/i, async () => {
  await profilePage.enterComment();
});

Then(/^click on Save Prd button$/i, async () => {
  await profilePage.saveBtnPrD();
});

Given(/^navigate to Change Password page$/i, async () => {
  await profilePage.changePasswordNvg();
});

Then(/^enter New Password as \"([^\"]*)\" and Confirm New Password as \"([^\"]*)\"$/i, 
  async (newPassword: string, confirmNewPassword: string) => {
    await profilePage.enterNewPassword(newPassword);
    await profilePage.enterConfirmNewPassword(confirmNewPassword);
});

Then(/^Verify Save button is enabled and click on Save$/i, async () => {
 expect(
  await profilePage.isSaveBtnEnabled(), 
  'Save button is enabled'
).to.be.true;
  await profilePage.saveBtnCP();
});

Given(/^navigate to Employee Credentials page$/i, async () => {
  await profilePage.employeeCredentialsNvg();
  expect(
    await profilePage.isCredentialHeaderDisplays(), 
    'Employee Header is diaplyed'
  ).to.be.true;
});

Then(/^edit and update Employee Credential as \"([^\"]*)\" and \"([^\"]*)\"$/i, 
  async (nameOfCredential: string, refNumber: number) =>{
    const CredentialList = await profilePage.isCredentialListDisplays();
    if (CredentialList == true){
      await profilePage.editReferenceNumber(refNumber);
    }else{
    await profilePage.addBtn();
    await profilePage.enterNameOfCredential(nameOfCredential);
    await profilePage.enterRefrenceNumber(refNumber);
    await profilePage.selectExpirationDate();
    await profilePage.saveBtnPrD();
    }
});