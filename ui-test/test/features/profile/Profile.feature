@Profile
Feature:Profile
  
    @TCID:99680
    Scenario: Profile - Profile Options - Edit Personal Demographics
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

