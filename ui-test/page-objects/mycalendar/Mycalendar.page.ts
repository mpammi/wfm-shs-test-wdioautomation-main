import { AppConfigDataProvider } from "../../configDataProvider/appConfigDataProvider.ts";
import { BasePage } from "../base/Base.page.ts";
import { loginControls } from "../login/Login.controls.ts";
import { myCalendarControls} from "../mycalendar/Mycalendar.controls.ts";

export class MyCalendarPage extends BasePage {
  private appConfig: AppConfigDataProvider;

  constructor() {
    super();
  }

  /**
   * To verify the staff login
   *
   * @returns true if user is logged in or false otherwise
   */
  public async isStaffLoggedIn() {
    this.appConfig = new AppConfigDataProvider();
    await super.waitTillPageLoads();
    if (await super.isElementDisplayed(myCalendarControls.welcomeAlert)) {
      await super.clickElement(myCalendarControls.welcomeAlertEndTourBUtton);
      if (!await super.isElementDisplayed(myCalendarControls.welcomeAlert)) {
        console.log("Welcome alert is not closed")
        } 
    }
     if(await super.isElementDisplayed(myCalendarControls.announcementsDialog)){
    await super.clickElement(myCalendarControls.announcementsDialogOkButton);
     if (!await super.isElementDisplayed(myCalendarControls.announcementsDialog)) {
      console.log("announcementsDialog is not closed")
      } 
    }

    await super.isElementDisplayed(loginControls.username);
    return await super.isElementDisplayed(myCalendarControls.mycalendarLink);
  }

  /**
   * To verify the My calendar filter section
   * @returns true if My Calendar filter section present or false otherwise
   */
  public async isMyCalendarFilterSectionDisplayed() {
    let isMyCalendarFilterSectionPresent: boolean = false;
    let iframeIndex: number = 0;
    super.isElementDisplayed(myCalendarControls.getReforgedIframeID);
    await super.switchToIframeByIndex(iframeIndex);

    if (super.isElementDisplayed(myCalendarControls.getFilterSection)) {
      isMyCalendarFilterSectionPresent = true;
      await super.isElementDisplayed(myCalendarControls.getFilterButton);
      await super.clickElement(myCalendarControls.getFilterButton);

      await super.isElementDisplayed(
        myCalendarControls.getCalendarDisplaySection
      );

      await super.isElementDisplayed(
        myCalendarControls.getOpenShiftFilterOptionsSection
      );

      await super.isElementDisplayed(
        myCalendarControls.getOpenShiftTimesSection
      );

      await super.isElementDisplayed(
        myCalendarControls.getSelfSchedulingShiftTimesSection
      );

      await super.isElementDisplayed(
        myCalendarControls.getFilterCancelButton
      );

      await super.clickElement(myCalendarControls.getFilterCancelButton);

      await super.isElementDisplayed(
        myCalendarControls.getSortOpenShiftsbyArrow
      );

      await super.clickElement(
        myCalendarControls.getSortOpenShiftsbyArrow
      );

      await super.isElementDisplayed(
        myCalendarControls.getSelectedFilterSection
      );

      await super.isElementDisplayed(myCalendarControls.getShowOpenShifts);

      await super.isElementDisplayed(
        myCalendarControls.getSelectedOpenShiftLabel
      );
    }
    return await isMyCalendarFilterSectionPresent;
  }

  /**
   * To verify the My calendar date picker, month navigation displayed
   *
   * @returns true if My Calendar date picker , month navigation present or false otherwise
   */

  public async isMyCalendarDatePickerDisplayed() {
    let isMyCalendarMonthNavigationPresent: boolean = false;

    if (super.isElementDisplayed(myCalendarControls.getMonthNavigation)) {
      isMyCalendarMonthNavigationPresent = true;

      await super.isElementDisplayed(
        myCalendarControls.getMonthLeftNavigationIcon
      );
      await super.clickElement(
        myCalendarControls.getMonthLeftNavigationIcon
      );
      await super.waitTillPageLoads();

      await super.isElementDisplayed(
        myCalendarControls.getMonthRightNavigationIcon
      );
      await super.clickElement(
        myCalendarControls.getMonthRightNavigationIcon
      );
      await super.waitTillPageLoads();

      await super.isElementDisplayed(
        myCalendarControls.getDatePickerButton
      );
      await super.clickElement(myCalendarControls.getDatePickerButton);

      if(super.isElementDisplayed(myCalendarControls.getTodayDateInDatePicker)) {
        await super.clickElement(myCalendarControls.getTodayDateInDatePicker);
    }
      await super.isElementDisplayed(myCalendarControls.getTodayButton);
      await super.clickElement(myCalendarControls.getTodayButton);

      await super.isElementDisplayed(myCalendarControls.getRefreshButton);
      await super.clickElement(myCalendarControls.getRefreshButton);
      await super.waitTillPageLoads();

      await super.isElementDisplayed(myCalendarControls.getMonthButton);
      await super.clickElement(myCalendarControls.getMonthButton);

      await super.isElementDisplayed(myCalendarControls.getWeekButton);
      await super.clickElement(myCalendarControls.getWeekButton);

      await super.isElementDisplayed(myCalendarControls.getInfoButton);
      await super.clickElement(myCalendarControls.getInfoButton);

      await super.isElementDisplayed(myCalendarControls.getInfoPopOver);
    }

    return await isMyCalendarMonthNavigationPresent;
  }

  /**
   * To verify the My calendar tutorial displayed
   *
   * @returns true if My Calendar tutorial present or false otherwise
   */

  public async isMyCalendarTutorialDisplayed() {
    let isMyCalendarTutorialPresent: boolean = false;

    if (super.isElementDisplayed(myCalendarControls.getTutorialButton)) {
      isMyCalendarTutorialPresent = true;
      await super.isElementDisplayed(myCalendarControls.getTutorialButton);
      await super.clickElement(myCalendarControls.getTutorialButton);

      await super.isElementDisplayed(
        myCalendarControls.getTutorialCloseButton
      );
      await super.clickElement(myCalendarControls.getTutorialCloseButton);
    }
    return await isMyCalendarTutorialPresent;
  }

  /**
   * To verify the My calendar request tab slider displayed
   *
   * @returns true if My Calendar request tab slider present or false otherwise
   */
  public async isRequestTabSliderDisplayed() {
    let isMyCalendarRequestTabSliderPresent: boolean = false;

    if (super.isElementDisplayed(myCalendarControls.getRequestTabSlider)) {
      isMyCalendarRequestTabSliderPresent = true;

      await super.isElementDisplayed(
        myCalendarControls.getRequestTabSliderRightArrow
      );
      await super.clickElement(
        myCalendarControls.getRequestTabSliderRightArrow
      );

      await super.isElementDisplayed(
        myCalendarControls.getRequestTabSliderLeftArrow
      );
      await super.clickElement(
        myCalendarControls.getRequestTabSliderLeftArrow
      );
    }
    return await isMyCalendarRequestTabSliderPresent;
  }

  /**
   * To verify the My calendar panel section displayed
   *
   * @returns true if My Calendar panel section present or false otherwise
   */

  public async isMyCalendarPanelSectionDisplayed() {
    let isMyCalendarPanelSectionPresent: boolean = false;

    if (super.isElementDisplayed(myCalendarControls.getCalendarPanelSection)) {
      isMyCalendarPanelSectionPresent = true;

      await super.isElementDisplayed(
        myCalendarControls.getDayInCalendarPanelSection
      );
      await super.clickElement(
        myCalendarControls.getDayInCalendarPanelSection
      );

      await super.isElementDisplayed(
        myCalendarControls.getAddEventTabPanel
      );

      await super.isElementDisplayed(
        myCalendarControls.getPendingRequestsTab
      );
      await super.clickElement(myCalendarControls.getPendingRequestsTab);

      await super.isElementDisplayed(
        myCalendarControls.getPendingRequestTabPanel
      );

      await super.isElementDisplayed(myCalendarControls.getCommitmentsTab);
      await super.clickElement(myCalendarControls.getCommitmentsTab);

      await super.isElementDisplayed(
        myCalendarControls.getCommitmentsTabPanel
      );
    }
    return await isMyCalendarPanelSectionPresent;
  }
}

export const mycalendarpage = new MyCalendarPage();
