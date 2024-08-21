
@StaffingCalendar
Feature: StaffingCalendar 
     
        @TCID:1032255
        Scenario: Verify the functionality of full screen button in Staffing Calendar
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        When the user clicks on Calendars and selects Staffing Calendar
        Then the user should be navigated to the Staffing Calendar screen
        When the user checks for and clicks the fullscreen icon
        Then the user should see the exit fullscreen icon and verify the Header and Footer are hidden
        When the user exits fullscreen
        Then the user should confirm the Header and Footer are visible again

        @TCID:915677
        Scenario: Staffing Calendar Time Span verification
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        When the user clicks on Calendars and selects Staffing Calendar
        Then the user should be navigated to the Staffing Calendar screen
        Then the user verify time span functionality for "Day View"       
        Then the user verify time span functionality for "Three Day View"
        Then the user verify time span functionality for "Week View"
        Then the user verify time span functionality for "Two Week View"

        @TCID:1032016
        Scenario: Verify Key Button functionality in staffing calendar.
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        When the user clicks on Calendars and selects Staffing Calendar
        Then the user should be navigated to the Staffing Calendar screen
        Then the user verify Key Shift types functionality
        Then the user verifies shift subtype code "OC" and description "On Call" 


        





