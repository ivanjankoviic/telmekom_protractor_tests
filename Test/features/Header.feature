Feature: Header activities
# TODO: prebaciti test u neki za vezbu i vadjenje elemenata
# @test 
# Scenario: test za vadjenje koraka na telmekomu
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "ivo@digitalcube.rs"
#     When I fill in password with "Telmekom1234!"
#     When I press Login
    # When I click to select language
    # When I click to select English language
    # When I click to select German language
    # When I click to select Italian language
    # When I click on super-admin-menu
    # When I click to overlay backdrop-background
    # When I click to select language
    # When I click to overlay backdrop-background
    # When I click to select language
    # When I click to overlay backdrop-background
    # When I click to select language
    # When I click to overlay backdrop-background


@english @all @header
Scenario: Check text when user click on english language
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click to select language
    When I click to select English language
    Then I check header titile to be "Clients list"

    When I click on user Profile Picture
    When I click on Logout 

@italian @all @header
Scenario: Check text when user click on italian language
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click to select language
    When I click to select Italian language
    Then I check header titile to be "Lista clienti"
    When I click to select language
    When I click to select English language

    When I click on user Profile Picture
    When I click on Logout 

@german @all @header
Scenario: Check text when user click on german language
    Given I navigate to Telmekom aplication 
    When I fill in username with "test_bot@digitalcube.rs"
    When I fill in password with "Testbot1234!"
    When I press Login
    When I click to select language
    When I click to select German language
    Then I check header titile to be "Kundenliste"
    When I click to select language
    When I click to select English language

    When I click on user Profile Picture
    When I click on Logout 