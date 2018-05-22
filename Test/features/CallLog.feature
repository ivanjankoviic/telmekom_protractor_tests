Feature: CallLog page
# FIXME: popraviti testove ubaciti data-dc
@callLogRoute @all @callLog
Scenario: Check route for the CallLog page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "A. FREI Logistics GmbH/srl" and press ENTER
    When I click on client1
    # TODO: popraviti, pitati Iva da se ubaci data-dc
    # When I click on CallLog
   # Then I check CallLog route "http://telmekom-client-staging2.digitalcube.rs/u00000njQL/call-logs"
    When I click on user Profile Picture
    When I click on Logout 

@numberOfUsersInCallLogTableACR @all @callLog
Scenario: Check number of users in Call Log table
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "A. FREI Logistics GmbH/srl" and press ENTER
    When I click on client1
    # TODO: popraviti, pitati Iva da se ubaci data-dc
    #When I click on CallLog
    # Then I checking number of users in table to be "3"
    
    When I click on user Profile Picture
    When I click on Logout 