// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import {Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { staffingcalendarPage } from "../../page-objects/staffingcalendar/Staffingcalendar.page.ts";


When('the user clicks on Calendars and selects Staffing Calendar', async () => {
  await staffingcalendarPage.clickCalendars();
  await staffingcalendarPage.clickStaffingCalendar();
});

Then('the user should be navigated to the Staffing Calendar screen', async () => {
  expect(await staffingcalendarPage.isStaffingCalDsiplayed()).to.be.true;
});

When('the user checks for and clicks the fullscreen icon', async () => {
   expect(await staffingcalendarPage.isFullScreenIconDisplayed()).to.be.true;
   await staffingcalendarPage.clickFullScreen();
});

Then('the user should see the exit fullscreen icon and verify the Header and Footer are hidden', async () => {
   expect(await staffingcalendarPage.isExitFullScreenIconDisplayed()).to.be.true;
   expect(await staffingcalendarPage.validateHeaderVisibility()).to.be.false;
   expect(await staffingcalendarPage.validateFooterVisibility()).to.be.false;
});

When('the user exits fullscreen', async () => {
  await staffingcalendarPage.clickExitFullScreen();
});

Then('the user should confirm the Header and Footer are visible again', async () => {
   await staffingcalendarPage.switchToParentFrame();
   expect(await staffingcalendarPage.validateHeaderVisibility()).to.be.true;
   expect(await staffingcalendarPage.validateFooterVisibility()).to.be.true;
});

Then('the user verify time span functionality for {string}', async (view: string) => {  
   await staffingcalendarPage.selectTimeSpanView(view);
   await staffingcalendarPage.verifyView(view);
});

Then('the user verify Key Shift types functionality', async () => {  
   await staffingcalendarPage.clickKeyIcon();
   expect(await staffingcalendarPage.verifyKeyShiftTypes()).to.be.true;
});

Then('the user verifies shift subtype code {string} and description {string}', async (code: string, description: string) => { 
   await staffingcalendarPage.verifyKeyShiftSubTypes();
   expect(await staffingcalendarPage.validateShiftSubTypeTableData(code,description)).to.be.true;
});



  
  