Feature: Login page

# @login1 @all @login
# Scenario: Check route for the login page
#     Given I navigate to Telmekom aplication 
#     Then I check login route "https://portal.telmekom.net/login"

@forgotPassword @all @login
Scenario: Check route for the forgot password page
    Given I navigate to Telmekom aplication 
    When I click on forgot password
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/forgot"

@wrongEmail @all @login
Scenario: Check alert message when user write wrong email
    Given I navigate to Telmekom aplication 
    When I fill in username with "wrong@email.bla"
    When I fill in password with "Telmekom1234!"
    When I press Login
    Then I expect "Invalid credentials"

@wrongPassword @all @login
Scenario: Check alert message when user write wrong password
    Given I navigate to Telmekom aplication 
    When I fill in username with "ivo@digitalcube.rs"
    When I fill in password with "bla bla bla!"
    When I press Login
    Then I expect "Invalid credentials"

@wrongEmailWithoutMonkey @all @login
Scenario: Check alert message when user write Email without Monkey
    Given I navigate to Telmekom aplication 
    When I fill in username with "ivodigitalcube.rs"
    When I fill in password with "R"
    When I press Login
    Then I expect under username field "Username not in correct format."

#FIXME: odkomentarisati kada se omoguci upis velikih slova u username
#FIXME: popraviti upisuje mala slova ali ne dozvoljava logivanje

@emailWithCapitalLetters @all @login
Scenario: Check login when user write username with capital letters
    Given I navigate to Telmekom aplication 
    When I fill in username with "iVo@DiGiTaLcUbE.rs"
    When I fill in password with "Telmekom1234!"
    When I press Login
    Then I check Admin portal client route "http://telmekom-client-staging2.digitalcube.rs/"

@checkLoginAfterRefresh @all @login
Scenario: Check route for the login page after refresh page
    Given I navigate to Telmekom aplication 
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/login"
    When I refresh page
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/login"

@checkForgotPasswordAfterRefresh @all @login
Scenario: Check route for the forgot password page after refresh page
    Given I navigate to Telmekom aplication 
    When I click on forgot password
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/forgot"

@checkShowPassEye @all @login
Scenario: Check password when we click on show-pass-eye
    Given I navigate to Telmekom aplication 
    When I fill in password with "TEST! TEST! TEST!"
    Then I expect type to be type "password"
    When I click show-pass-eye
    Then I expect type to be type "text"
    When I click show-pass-eye
    Then I expect type to be type "password"

@forgotPasswordWrongUsername @all @login
Scenario: Check forgot password with wrong username
    Given I navigate to Telmekom aplication 
    When I click on forgot password
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/forgot"
    When I fill in username with "ivodigitalcube.rs"
    When I press Login
    Then I expect under username field "Username not in correct format."

@fillAndEraseInputFields @all @login
Scenario: Fill and erase all input fields and check alerts 
    Given I navigate to Telmekom aplication 
    When I click password input field
    When I click username input field
    Then I expect under username field "You must enter a value"
    Then I expect under password field "You must enter a value"
    When I click on forgot password
    When I click username input field
    When I click on login card
    Then I expect under usernameForgotPassword field "You must enter a value"

@signInForgotPassword  @all @login
Scenario: Check Sign In button on forgot password
    Given I navigate to Telmekom aplication 
    When I click on forgot password
    When I click on Sign In button
    Then I check login route "http://telmekom-client-staging2.digitalcube.rs/login"

@titleCheckLoginPage  @all @login
Scenario: Check Title on login page
    Given I navigate to Telmekom aplication 
    Then I check title to be "Telmekom"


