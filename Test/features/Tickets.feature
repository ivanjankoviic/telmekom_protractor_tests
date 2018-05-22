
# TODO: odkomentarisati kada puste tickets

# Feature: Tickets page

# @id/ticketsRoute @all
# Scenario: Check route for the Tickets page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "ivo@digitalcube.rs"
#     When I fill in password with "Telmekom"
#     When I press Login
#     When I click on search field "ACR" and press ENTER
#     When I click on client1
#     When I click on Tickets
#     Then I check IdTicketsRoute "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/tickets"

# @id/ticketsRouteIDT @all
# Scenario: Check route for the TicketsIDT page
#     Given I navigate to Telmekom aplication 
#     When I fill in username with "ivo@digitalcube.rs"
#     When I fill in password with "Telmekom1234!"
#     When I press Login
#     When I click on search field "ACR" and press ENTER
#     When I click on client1
#     When I click on Tickets      
#     When I click on user TicketsIDT
#     Then I check IdTicketsRouteIDT "http://telmekom-client-staging2.digitalcube.rs/u00000jEYu/tickets/5081"