@Login
Feature:Login

    @TCID:915678
    Scenario: Shiftselect WebPortal admin's login functionality check
        Given the user launches the app
        When the user login as an 'admin'
        Then the user should be successfully logged in
        And the user logout from the app
        Then the user should be successfully logged out