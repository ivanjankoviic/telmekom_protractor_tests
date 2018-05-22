Feature: Admin portal client page

@clientRoute @all @adminPortalClient
Scenario: Check route for the  Admin portal client page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    Then I check Admin portal client route "http://telmekom-client-staging2.digitalcube.rs/"

    When I click on user Profile Picture
    When I click on Logout 

@numberOfUsersInClientTable @all @adminPortalClient
Scenario: Check number of users in client table
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    Then I checking number of users in table to be "10"

    When I click on user Profile Picture
    When I click on Logout 

@titleCheckAdminPage @all @adminPortalClient
Scenario: Check Title on login page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    # TODO: odkomentarisati kada title na login stranici bude isti kao i na HOME
    Then I check title to be "ONE Portal"

    When I click on user Profile Picture
    When I click on Logout 
