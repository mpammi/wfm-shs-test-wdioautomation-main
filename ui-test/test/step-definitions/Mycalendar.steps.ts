// <copyright file='time-out' company='symplr'>
// Copyright © 2023 symplr. All rights reserved. Confidential and Proprietary.
// </copyright>

import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { mycalendarpage } from "../../page-objects/mycalendar/Mycalendar.page.ts";

  Then ('the staff user should be successfully logged in' , async ()  => {
    expect(await mycalendarpage.isStaffLoggedIn()).to.equals(true,'ASSERTION ERROR: Staff User not logged in');
  });

 Then ('the My Calendar filter section displayed' , async ()  => {
    expect(await mycalendarpage.isMyCalendarFilterSectionDisplayed()).to.equals(true,'ASSERTION ERROR: My Calendar filter options are not displayed');
  });

  Then ('the My Calendar date and view mode information section displayed' , async ()  => {
    expect(await mycalendarpage.isMyCalendarDatePickerDisplayed()).to.equals(true,'ASSERTION ERROR: My Calendar Date or view mode information not displayed');
  });

  Then ('the tutorial section is displayed' , async ()  => {
    expect(await mycalendarpage.isMyCalendarTutorialDisplayed()).to.equals(true,'ASSERTION ERROR: My Calendar tutorial section not displayed');
  });

  Then ('the request slider arrows displayed' , async ()  => {
    expect(await mycalendarpage.isRequestTabSliderDisplayed()).to.equals(true,'ASSERTION ERROR: My Calendar request slider arrows not displayed');
  });

  Then ('the calendar panel section displayed' , async ()  => {
    expect(await mycalendarpage.isMyCalendarPanelSectionDisplayed()).to.equals(true,'ASSERTION ERROR: My Calendar panel section not displayed');
  });

  
  