
# TODO: ubaciti data-dc u I click on Invoices, pronaci nacin da se klikne na prvog user-a u tabeli
Feature: Invoices page

@id/invoicesRoute @all @invoices
Scenario: Check route for the Invoices page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    When I click on Invoices
    Then I check IdInvoicesroute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/invoices"
    When I refresh page
    Then I check IdInvoicesroute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/invoices"

    When I click on user Profile Picture
    When I click on Logout 

@numberOfUsersInCarierOtherInvoicesTableACR @all @invoices
Scenario: Check number of users in Invoices table
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    When I click on Invoices
    Then I checking number of users in table to be "10"
    When I click on Other Invoices
    Then I checking number of users in table to be "15"
    When I refresh page
    Then I checking number of users in table to be "10"
    When I click on Other Invoices
    Then I checking number of users in table to be "15"

    When I click on user Profile Picture
    When I click on Logout 