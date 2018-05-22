# Feature: Client Portal page

# FIXME: naci usera za testiranje, client portala
# @checkRouteForClientPortal @all @clientPortal
# Scenario: Check route for Client Portal page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     # TODO: pitati iva za sifru usera na portal-test.telmekom.net
#     When I fill in password with "Telmekom1234!"
#     When I press Login
#     Then I check Client Portal route "http://telmekom-client-staging2.digitalcube.rs/hotel/t000007RKA/all-rooms"

#     When I click on user Profile Picture
#     When I click on Logout 

# @checkRouteForClientPortalCallLog @all @clientPortal
# Scenario: Check route for Client Portal Call Log page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     When I fill in password with "123"
#     When I press Login
#     When I click on CallLog
#     Then I check Client Portal route "http://telmekom-client-staging2.digitalcube.rs/call-logs"

# @numberOfInvoicesClientPortalTable @all @clientPortal
# Scenario: Check number of invoices in client portal CARRIER and OTHER invoices table
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     When I fill in password with "123"
#     When I press Login
#     Then I checking number of users in table to be "15"
#     When I refresh page
#     Then I checking number of users in table to be "15"
#     When I click on Other Invoices
#     Then I checking number of users in table to be "13"
#     When I refresh page
#     Then I checking number of users in table to be "15"

# @numberOfClientPortalTableCallLogs @all @clientPortal
# Scenario: Check number of call logs in client portal Call Logs table
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     When I fill in password with "123"
#     When I press Login
#     When I click on CallLog
#     Then I checking number of users in table to be "3"

# @numberOfClientPortalTableCallLogsLastMonth @all @clientPortal
# Scenario: Check number of call logs in client portal Call Logs table last 30 days
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     When I fill in password with "123"
#     When I press Login
#     When I click on CallLog
#     When I enter the date in the calendar "09/24/2017 - 12/12/2017" and press ENTER
#     Then I checking number of users in table to be "15"
#     When I click on Next Page
#     Then I checking number of users in table to be "11"
#     When I refresh page
#     Then I checking number of users in table to be "11"
#     When I click on Previous Page
#     Then I checking number of users in table to be "15"
#     When I refresh page
#     Then I checking number of users in table to be "15"

# @checkQuickFiltersCallLogsCP @all @clientPortal
# Scenario: Check quick filters on Client Portal Call Log page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "info@digitalcube.rs"
#     When I fill in password with "123"
#     When I press Login
#     When I click on CallLog
#     When I enter the date in the calendar "09/24/2017 - 12/12/2017" and press ENTER
#     When I click on search field "sec>10" and press ENTER
#     Then I checking number of users in table to be "15"
#     When I click on Next Page
#     Then I checking number of users in table to be "9"
#     When I refresh page
#     Then I checking number of users in table to be "9"
#     When I click on Previous Page
#     Then I checking number of users in table to be "15"
#     When I click on search field "sec>80" and press ENTER
#     Then I checking number of users in table to be "12"
#     When I click on search field "euro>0.03" and press ENTER
#     Then I checking number of users in table to be "11"
#     When I refresh page
#     Then I checking number of users in table to be "11"
#     When I click on search field "euro>0.01" and press ENTER
#     Then I checking number of users in table to be "15"
#     When I click on Next Page
#     Then I checking number of users in table to be "5"
#     When I click on Previous Page
#     When I refresh page
#     Then I checking number of users in table to be "15"



