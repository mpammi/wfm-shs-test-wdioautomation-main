import { BaseControls } from "../base/Base.controls.ts";

export class MyCalendarControls extends BaseControls {
  constructor() {
    super();
  }

  get getReforgedIframeID() {
    return '//iframe[@id="reforgedIframe"]';
  }

  get getCalendarSection() {
    return '//div[@id="calendar-section"]';
  }

  get getNewcontentSection() {
    return '//div[@id="newContentSectionFull"]';
  }

  get welcomeAlert() {
    return '//div[@role="tooltip"]';
  }

  get welcomeAlertEndTourBUtton() {
    return '//div[@role="tooltip"]//button[text()="End tour"]';
  }

  get announcementsDialog() {
    return '//div[@id="announcementDialog"]';
  }

  get announcementsDialogOkButton() {
    return '//div[@id="announcementDialog"]//button[@id="ok"]';
  }

  get mycalendarLink() {
    return '//div[@id="newheaderMenuDiv"]//a[text()="My Calendar"]';
  }

  get getFilterSection() {
    return '//div[@class="col-4 filter-section"]';
  }

  get getFilterButton() {
    return '//button[@class="filter-button"]/img';
  }

  get getCalendarDisplaySection() {
    return '//div[@id="calendar-display-section"]';
  }

  get getOpenShiftFilterOptionsSection() {
    return '//div[@id="open-shifts-section"]';
  }

  get getOpenShiftTimesSection() {
    return '//div[@id="open-shift-times-section"]';
  }

  get getSelfSchedulingShiftTimesSection() {
    return '//div[@class="self-schedule-shift-times-section"]';
  }

  get getFilterCancelButton() {
    return '//button[@class="secondary-button"]';
  }

  get getSortOpenShiftsbyArrow() {
    return '//div[@class="d-inline-block dropdown"]//img';
  }

  get getSelectedFilterSection() {
    return '//div[@class="selected-filters-section"]';
  }

  get getShowOpenShifts() {
    return '//div[@class="selected-filters-section"]//span[@class="show-open-shifts"]';
  }

  get getSelectedOpenShiftLabel() {
    return '//span[@class="selected-openshift-label"]';
  }

  get getMonthNavigation() {
    return '//div[contains(@class,"month-navigation")]';
  }

  get getMonthLeftNavigationIcon() {
    return '//div[contains(@class,"month-navigation")]//i[contains(@class,"left")]';
  }

  get getMonthRightNavigationIcon() {
    return '//div[contains(@class,"month-navigation")]//i[contains(@class,"right")]';
  }

  get getDatePickerButton() {
    return '//button[@class="date-dicker-button"]';
  }

  get getDatePickerPopUp() {
    return ' //div[@class="cdk-overlay-pane mat-datepicker-popup"]';
  }

  get getTodayDateInDatePicker() {
    return '//div[contains(@class,"mat-calendar-body-today")]';
  }

  get getTodayButton() {
    return '//label[@class="today-button btn"]';
  }

  get getRefreshButton() {
    return '//button[contains(@class,"icon-ge-ico_refresh_alt_lg")]';
  }

  get getMonthButton() {
    return '//div[@role="radiogroup"]/label[1]';
  }

  get getWeekButton() {
    return '//div[@role="radiogroup"]/label[2]';
  }

  get getTutorialButton() {
    return '//button[@class="view-tutorial-button"]';
  }

  get getInfoButton() {
    return '//button[@class="info-button"]';
  }

  get getInfoPopOver() {
    return '//div[@class="popover-body"]';
  }

  get getTutorialVideo() {
    return '//div[@class="video-modal-header"]';
  }

  get getTutorialCloseButton() {
    return '//button[@class="close-x"]';
  }

  get getRequestTabSlider() {
    return '//div[@class="request-tab-slider"]';
  }

  get getRequestTabSliderRightArrow() {
    return '//div[@class="request-tab-slider"]/i';
  }

  get getRequestTabSliderLeftArrow() {
    return '//div[@class="request-tab-slider move-right"]/i';
  }

  get getCalendarPanelSection() {
    return '//div[@id="calendar-panel-section"]';
  }

  get getDayInCalendarPanelSection() {
    return '//div[@id="calendar-panel-section"]//a//span[text()="Day"]';
  }

  get getAddEventTabPanel() {
    return '//div[@id ="my-calendar-tab-panel"]';
  }

  get getPendingRequestsTab() {
    return '//div[@id="calendar-panel-section"]//a[@id="pending-requests-tab"]';
  }

  get getPendingRequestTabPanel() {
    return '//div[@id ="pending-requests-tab-panel"]';
  }

  get getCommitmentsTab() {
    return '//div[@id="calendar-panel-section"]//a[@id="commitments-tab"]';
  }

  get getCommitmentsTabPanel() {
    return '//div[@id ="commitments-tab-panel"]';
  }

  get getCalendarDisplay() {
    return '//div[@id="calendar-display-section"]';
  }
}

export const myCalendarControls = new MyCalendarControls();
