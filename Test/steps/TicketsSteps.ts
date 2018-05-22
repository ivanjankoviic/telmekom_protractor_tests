import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {Tickets, locatorsTickets} from "../pages/TicketsPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var tickets = new Tickets
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check IdTicketsRoute "([^"]*)"$/,async (url: string) =>{
        await tickets.getRouteIdTickets().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    Then(/^I check IdTicketsRouteIDT "([^"]*)"$/,async (url: string) =>{
        await tickets.getRouteIdTicketsIDT().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    When(/^I click on user TicketsIDT$/,async () =>{
        await tickets.clickUserTickets();
    })


});
