// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { profilePage} from "../../page-objects/profile/Profile.page.ts";

Then (/^click on search icon$/i, async () =>{
  await profilePage.searchIcon();
});

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
  expect(await profilePage.isProfileOptionsDisplayed()).to.equal(true, 
  'Profile Options is not displayed');
});

Then(/^edit and update firstname and lastname$/i, async () => {
  await profilePage.fillRequiredFields();
});

Then(/^click on Save button$/i, async () => {
  await profilePage.saveBtn();
});

Then(/^verify All changes have been saved message$/i, async () => {
  await profilePage.isSaveMsgDisplayed();
});