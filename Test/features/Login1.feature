Feature: Login vezba 1


@forgotPassword1  @login123
Scenario: Check route for the OOBlife page
    Given I navigate to OOB aplication
    When I fill in username in OOBxxx with "XXXXXXXXXXXXXXXXX"
    When I fill in password in OOBxxx with "123456789"
    Then I check OOB login route "http://sm.ooblife.com/login"











