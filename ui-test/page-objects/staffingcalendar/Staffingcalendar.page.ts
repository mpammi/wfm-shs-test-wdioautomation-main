import { wdioWebBase } from '@symplr/wdio-core/build/wdio/WdioWeb.Base.js';
import { loginControls } from "../login/Login.controls.ts";
import {staffingcalendarControls} from "../staffingcalendar/Staffingcalendar.controls.ts";

export class StaffingcalendarPage { 
  constructor() {
  }
 /**
   * Clicks on the calendars element on the page.
   */
 public async clickCalendars() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.calendars);
}

/**
   * Clicks on the staffing calendar element on the page
   */
public async clickStaffingCalendar() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.StaffingCalendar);
}

/**
   * Checks if the staffing calendar is currently displayed on the page  
   *
   * @returns true if it is displayed or false otherwise
   */
public async isStaffingCalDsiplayed() : Promise<boolean> {
  let indexvalue:number = 0;
   await wdioWebBase.waitTillPageLoads();
   await wdioWebBase.isElementDisplayed(loginControls.staffingCalendarIframe);
   await wdioWebBase.switchToIframeByIndex(indexvalue);
   await this.checkSpinnerDisplayed(loginControls.staffingCalendarSpinner);
   return await wdioWebBase.isElementDisplayed(loginControls.staffingCalendarModel);
}
/**
   * Checks if the full-screen icon is currently displayed on the page  
   *
   * @returns true if it is displayed or false otherwise
   */
public async isFullScreenIconDisplayed() : Promise<boolean> {
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.fullscreen);
}  

/**
   * Clicks on the full-screen icon  
   */
public async clickFullScreen() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.fullscreen);
}

/**
   * Checks if the exit full-screen icon is currently displayed on the page.  
   *
   * @returns true if it is displayed or false otherwise
   */
public async isExitFullScreenIconDisplayed() : Promise<boolean> {
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.exitfullscreen);
}

/**
   * Validates the visibility of the header on the page.  
   *
   * @returns true if it is displayed or false otherwise
   */
public async validateHeaderVisibility() : Promise<boolean> {
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.headerMenu);
}

/**
   * Validates the visibility of the footer on the page.  
   *
   * @returns true if it is displayed or false otherwise
   */
public async validateFooterVisibility() : Promise<boolean> {
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.footer);
}

/**
   * Clicks on the exit full-screen icon on the page 
   */
public async clickExitFullScreen() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.exitfullscreen);
}

/**
   * Switches to the parent frame of the currently active frame 
   */
public async switchToParentFrame() : Promise<void> {
  await wdioWebBase.switchToParentFrame();
}

/**
 * Selects the specified time span view.                  
 */
public async selectTimeSpanView(view: string): Promise<void>{
  await wdioWebBase.selectOptionByVisibleText(staffingcalendarControls.timeSpanDropdown,view);
}

/**
 * Checks if the staffing calendar spinner is displayed on the page.
 */
private async checkSpinnerDisplayed(spinnerSelector: string): Promise<void> {
  const isSpinnerDisplayed = await wdioWebBase.isElementDisplayed(spinnerSelector);
  if (!isSpinnerDisplayed) {
    console.log("Staffing calendar Spinner is disappeared");
  }
}

/**
 * Verifies that the Week View is displayed on the page.
 * @returns true if it is displayed or false otherwise
 */
public async verifyTimeSpanWeekView(): Promise<void>{
  await this.checkSpinnerDisplayed(loginControls.staffingCalendarSpinner);
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.weekView);
}

/**
 * Verifies that the Day View is displayed on the page.
 * @returns true if it is displayed or false otherwise
 */
public async verifyTimeSpanDayView(): Promise<void>{
  await this.checkSpinnerDisplayed(loginControls.staffingCalendarSpinner);
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.dayView);
}

/**
 * Verifies that the Two Week View is displayed on the page.
 * @returns true if it is displayed or false otherwise
 */
public async verifyTimeSpanTwoWeekView(): Promise<void>{
  await this.checkSpinnerDisplayed(loginControls.staffingCalendarSpinner);
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.twoWeekView);
}

/**
 * Verifies that the Three Day View is displayed on the page.
 * @returns true if it is displayed or false otherwise
 */
public async verifyTimeSpanThreeDayView(): Promise<void>{
  await this.checkSpinnerDisplayed(loginControls.staffingCalendarSpinner);
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.threeDayView);
}

/**
 * Verifies a specific view by dynamically calling the corresponding verification method.
 *
 * This method constructs the name of a verification method based on the provided `view` string.
 *
 * @param {string} view - The name of the view to verify.
 */
public async verifyView(view: string): Promise<void> {
  const trimmedView = view.replace(/\s+/g, '');
  const methodName = `verifyTimeSpan${trimmedView}`;
  if (typeof (this as any)[methodName] === 'function') {
    await (this as any)[methodName]();
  } else {
    throw new Error(`Method ${methodName} does not exist.`);
  }
}

/**
 * This method clicks key icon on the Staffingcalendar page.
 */
public async clickKeyIcon() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.keyButton);
  await wdioWebBase.isElementDisplayed(staffingcalendarControls.keyPopup);
  await wdioWebBase.isElementDisplayed(staffingcalendarControls.keyHeader);
}

/**
 * Verifies that all key shift type elements are displayed on the staffing calendar.
 * @returns `true` if all key shift type elements are displayed, otherwise `false`.
 */
public async verifyKeyShiftTypes(): Promise<boolean> {
  const elementsToCheck = [
      staffingcalendarControls.shiftTypesLink,
      staffingcalendarControls.shiftSubTypesLink,
      staffingcalendarControls.scheduledHeader,
      staffingcalendarControls.scheduledWorkingText,
      staffingcalendarControls.scheduledOncallText,
      staffingcalendarControls.scheduledNonDutyText,
      staffingcalendarControls.awardedText,
      staffingcalendarControls.requestedHeader,
      staffingcalendarControls.requestedText,
      staffingcalendarControls.requestedOncallText,
      staffingcalendarControls.requestedNondutyText,
      staffingcalendarControls.openHeader,
      staffingcalendarControls.openText,
      staffingcalendarControls.openOncall,
      staffingcalendarControls.openNonduty,
      staffingcalendarControls.otherIndicatorsHeader,
      staffingcalendarControls.incentiveShiftText];
      for (let i = 0; i < elementsToCheck.length; i++) {
        const element = elementsToCheck[i];
        const isDisplayed = await wdioWebBase.isElementDisplayed(element);   
        if (!isDisplayed) {
            return false;
        }
    }
  return true;
}

/**
 * Verifies that the key shift subtype elements are displayed on the staffing calendar.
 */
public async verifyKeyShiftSubTypes() : Promise<void> {
  await wdioWebBase.clickElement(staffingcalendarControls.shiftSubTypesLink);
  await wdioWebBase.isElementDisplayed(staffingcalendarControls.shiftSubTypeTable);
  await wdioWebBase.isElementDisplayed(staffingcalendarControls.shiftSubTypeHeaders);
}

/**
 * Validates that a specific row in the shift subtype table contains the given values.
 * @returns true if the row data is displayed or false otherwise
 */
public async validateShiftSubTypeTableData(firstValue: string, secondValue: string): Promise<boolean> {
  return await wdioWebBase.isElementDisplayed(staffingcalendarControls.shiftSubTypeTabledataXpath(firstValue,secondValue));
}
}
export const staffingcalendarPage = new StaffingcalendarPage();
