Feature: Profile page

@profileRoute @all @profilePage
Scenario: Check route for the Profile page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on user Profile Picture
    When I click on Profile button
    Then I check Profile route "http://telmekom-client-staging2.digitalcube.rs/profile"

    When I click on user Profile Picture
    When I click on Logout 

@id/ProfileRoute @all @profilePage
Scenario: Check route for the Profile page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    Then I check IdProfile route "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/profile"

    When I click on user Profile Picture
    When I click on Logout 