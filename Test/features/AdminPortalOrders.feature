Feature: Admin portal Orders page

@ordersRoute @all @adminPortalOrders
Scenario: Check route for the Orders page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on Orders
    Then I check Orders route "http://telmekom-client-staging2.digitalcube.rs/orders"

    When I click on user Profile Picture
    When I click on Logout 

@numberOfUsersInOrdersTable @all @adminPortalOrders
Scenario: Check number of users in Orders table
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on Orders
    Then I checking number of users in table to be "2"

    When I click on user Profile Picture
    When I click on Logout 