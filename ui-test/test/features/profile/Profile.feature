@Profile
Feature:Profile
  
    @TCID:108271 @Regression
    Scenario: Verify that admin can open to Pending shift modal into Search Results screen
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        Then click on search icon
        And  select Active checkbox
        Then click on Search button
        Then check active employee search result
        When select first employee from the search result
        Then check Profile Options
        Then edit and update firstname and lastname
        And  click on Save button
        Then verify All changes have been saved message
   
    @TCID:99680 @CriticalPath
    Scenario: Profile - Profile Options - Edit Personal Demographics
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        Then click on search icon
        And  enter Employee Name as "autmn" and click on Find button
        When select it from employee list "staff1, autmn"
        Then check Profile Options
        Then edit user first name as "automation" and last name as "user1"
        Then verify the user details
        And  click on Save button
        Then Reset the user details
    
    @TCID:99678 @CriticalPath
    Scenario: Profile - Profile Options - Edit Professional Details
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        Then click on search icon
        And  enter Employee Name as "autmn" and click on Find button
        When select it from employee list "staff1, autmn"
        Then check Profile Options
        Then select and verify Professional Details header
        Then select the hospital from dropdown as "automationHospital"
        Then select Primary Unit from dropdown as "automationUnit1 / automationCC1"
        Then select JobTitle from dropdown as "autmnJobTitle1"
        Then select Level Of Care from dropdown as "autmnLevelOfCare1"
        Then select Scheduling Group from dropdown as "autmnEG-A"
        Then select Employee Status from dropdown as "Part Time-24hr"
        Then select comment and enter text
        And click on Save Prd button

    @TCID:34694 @CriticalPath
    Scenario: Verify the Admin user should be allowed to change the password for a staff in My Profile
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        Then click on search icon
        And  enter Employee Name as "autmnstaff1" and click on Find button
        When select it from employee list "staff1, autmn"
        Then check Profile Options
        And  navigate to Change Password page
        Then enter New Password as "welcome2" and Confirm New Password as "welcome2"
        Then Verify Save button is enabled and click on Save

    @TCID:99682 @CriticalPath
    Scenario: Profile - Profile Options - Edit Employee Credentials
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        Then click on search icon
        And  enter Employee Name as "autmnmgr1" and click on Find button
        When select it from employee list "mgr1, autmn"
        Then check Profile Options
        And  navigate to Employee Credentials page
        Then edit and update Employee Credential as "autmnCREDENTIAL1" and "123456789"