Feature: Admin portal Activity Log page

@activityLogRoute @all @adminPortalActivityLog
Scenario: Check route for the Admin Activity Log page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on Activity Log
    Then I check Activity Log route "http://telmekom-client-staging2.digitalcube.rs/activity-log"
   
    When I click on user Profile Picture
    When I click on Logout 


@numberOfUsersInActivityLogTable @all @adminPortalActivityLog
Scenario: Check number of users in activity log table
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on Activity Log
    Then I checking number of users in table to be "15"

    When I click on user Profile Picture
    When I click on Logout 