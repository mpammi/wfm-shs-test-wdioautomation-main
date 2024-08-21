import { BaseControls } from "../base/Base.controls.ts";

export class StaffingcalendarControls extends BaseControls {
  constructor() {
    super();
  }
 /**
   * Xpath locator for calendars
   */
 get calendars() {
  return '//ul[@id="navMenu"]//a[contains(text(), "Calendars")]';
}

/**
   * Xpath locator for StaffingCalendar
   */
get StaffingCalendar() {
  return '//ul[@id="navMenu"]//a[contains(text(), "Staffing Calendar")]';
}

/**
   * Xpath locator for fullscreen
   */
get fullscreen() {
  return '//i[contains(@class, "fullscreen")]';
}

/**
   * Xpath locator for exitfullscreen
   */
get exitfullscreen() {
  return '//i[contains(@class, "exitfullscreen")]';
}

/**
   * Xpath locator for headerMenu
   */
get headerMenu() {
  return '//div[@id="newheaderMenuDiv"]';
}

/**
   * Xpath locator for footer
   */
get footer() {
  return '//div[@id="newfooter"]';
}

/**
   * Xpath locator for timeSpan dropdown
   */
get timeSpanDropdown() {
return '//*[@id="header-wrapper"]//select';
}
/**
   * Xpath locator for dayView
   */
get dayView() {
  return '//div[contains(@class, "staffing-calendar-day-view")]';
}

/**
   * Xpath locator for threeDayView
   */
get threeDayView() {
  return '//div[contains(@class, "days-coverage-holder box-count-3")]';
}

/**
   * Xpath locator for weekView
   */
get weekView() {
  return '//div[contains(@class, "days-coverage-holder box-count-7")]';
}

/**
   * Xpath locator for twoWeekView
   */
get twoWeekView() {
  return '//div[contains(@class, "num-of-rows-2")]';
}

/**
   * Xpath locator for keyButton
   */
get keyButton() {
  return '//button[contains(@popoverclass,"staffing-key")]';
}

/**
   * Xpath locator for keyPopup
   */
get keyPopup() {
  return '//div[@class="key-container"]';
}

/**
   * Xpath locator for keyHeader
   */
get keyHeader() {
  return '//button[contains(@popoverclass,"staffing-key")]';
}

/**
   * Xpath locator for shiftTypesLink
   */
get shiftTypesLink() {
  return '//a[@class="nav-link active"]/span[text()="Shift Types"]';
}

/**
   * Xpath locator for shiftSubTypesLink
   */
get shiftSubTypesLink() {
  return '//a[@class="nav-link"]/span[contains(text(),"Shift Subtypes")]';
}

/**
   * Xpath locator for scheduledHeader
   */
get scheduledHeader() {
  return '//div[contains(@class,"heading") and contains(.,"Scheduled")]';
}

/**
   * Xpath locator for scheduledWorkingText
   */
get scheduledWorkingText() {
  return '//div[contains(text(),"Scheduled Working")]/span[contains(text(),"Self-Scheduled")]';
}

/**
   * Xpath locator for scheduledOncallText
   */
get scheduledOncallText() {
  return '//div[contains(text(),"Scheduled On Call")]/span[contains(text(),"Self-Scheduled On Call")]';
}


/**
   * Xpath locator for scheduledNonDutyText
   */
get scheduledNonDutyText() {
  return '//div[contains(text(),"Scheduled Non-Duty")]/span[contains(text(),"Self-Scheduled Non-Duty")]';
}

/**
   * Xpath locator for awardedText
   */
get awardedText() {
  return '//div[(text()="Awarded")]';
}

/**
   * Xpath locator for requestedHeader
   */
get requestedHeader() {
  return '//div[contains(@class,"heading") and contains(.,"Requested")]';
}

/**
   * Xpath locator for requestedText
   */
get requestedText() {
  return '//div[@class="requested"]/parent::div/following-sibling::div[text()="Requested"]';
}

/**
   * Xpath locator for requestedOncallText
   */
get requestedOncallText() {
  return '//div[@class="requested-oncall"]/parent::div/following-sibling::div[text()="Requested On Call"]';
}

/**
   * Xpath locator for requestedNondutyText
   */
get requestedNondutyText() {
  return '//div[@class="requested-nonduty"]/parent::div/following-sibling::div[text()="Requested Non-Duty"]';
}

/**
   * Xpath locator for openHeader
   */
get openHeader() {
  return '//div[contains(@class,"heading") and contains(.,"Open")]';
}

/**
   * Xpath locator for openText
   */
get openText() {
  return '//div[@class="open"]/following-sibling::div[text()="Open"]';
}

/**
   * Xpath locator for openOncall
   */
get openOncall() {
  return '//div[@class="open-oncall"]/parent::div/following-sibling::div[text()="Open On Call"]';
}

/**
   * Xpath locator for openNonduty
   */
get openNonduty() {
  return '//div[@class="open-nonduty"]/parent::div/following-sibling::div[text()="Open Non Duty"]';
}

/**
   * Xpath locator for otherIndicatorsHeader
   */
get otherIndicatorsHeader() {
  return '//div[contains(@class,"heading") and contains(.,"Other Indicators")]';
}

/**
   * Xpath locator for incentiveShiftText
   */
get incentiveShiftText() {
  return '//div[@class="overtime"]/following-sibling::div[text()="Incentive Shift"]';
}

/**
   * Xpath locator for overtimeShiftText
   */
get overtimeShiftText() {
return '//div[@class="overtime"]/following-sibling::div[contains(text(),"Overtime Shift")]';
}

/**
   * Xpath locator for shiftSubTypeHeaders
   */
get shiftSubTypeHeaders() {
return '//table[@class="table"]//th[text()="Code"]/following-sibling::th[text()="Description"]';
}

/**
   * Xpath locator for shiftSubTypeTable
   */
get shiftSubTypeTable() {
  return "//table[@class='table']";
}

/**
 * Generates an XPath expression to locate a cell in a table row 
 * that contains specific text values in two different columns.
 * @param {string} firstValue - The text content of the first cell to match.
 * @param {string} secondValue - The text content of the second cell to match 
 */
public shiftSubTypeTabledataXpath(firstValue:string,secondValue:string) {
  return `${this.shiftSubTypeTable}//tr//td[text()='${firstValue}']//following::td[contains(.,'${secondValue}')]`;
}
}
export const staffingcalendarControls = new StaffingcalendarControls();
