Feature: Services page

@id/servicesRoute @all @services
Scenario: Check route for the Services page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    When I click on Services
    Then I check IdServicesRoute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/services"

    When I click on user Profile Picture
    When I click on Logout 

@id/dataServicesRoute @all @services
Scenario: Check route for the Services Data page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    When I click on Services
    When I click on Data Services
    Then I check IdServicesDataRoute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/services/data/0"
 
     When I click on user Profile Picture
    When I click on Logout 

# FIXME: kada dodas data-dc ispravi trazenje rute, u ovom slucaju pise "When I click on Voice Services", a klikne na MISC SERVICE DATA
@id/voiceServicesRoute @all @services
Scenario: Check route for the Services Voice page
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click on search field "ACR" and press ENTER
    When I click on client1
    When I click on Services
    When I click on Voice Services
    Then I check IdServicesVoiceRoute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/services/misc/1"

    When I click on user Profile Picture
    When I click on Logout 
    

# @id/miscServicesRoute @all @services
# Scenario: Check route for the Services Misc page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "ivo@digitalcube.rs"
#     When I fill in password with "R"
#     When I press Login
#     When I click on search field "ACR" and press ENTER
#     When I click on client1
#     When I click on Services
#     When I click on Misc Services
#     Then I check IdServicesMiscRoute "https://portal.telmekom.net/u00000jEYu/services/misc/2"