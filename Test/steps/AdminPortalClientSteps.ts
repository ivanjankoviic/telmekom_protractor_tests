import { defineSupportCode } from 'cucumber'
// import { locatorsLoginPage } from "../pages/LoginPage";
import { AdminPortalClient, locatorsAdminPortalClient } from "../pages/AdminPortalClientPage";
import { expect } from 'chai'
import { browser, element, by, protractor } from 'protractor';
import { httpFactory } from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';
import { BADFLAGS } from 'dns';

var adminPortalClient = new AdminPortalClient
var until = protractor.ExpectedConditions;


defineSupportCode(({ Given, Then, When }) => {

    When(/^I click on search field "([^"]*)" and press ENTER$/, async (search: string) => {
        await adminPortalClient.searchFieldInput(search)
    })

    Then(/^I check Admin portal client route "([^"]*)"$/, async (url: string) => {
        await adminPortalClient.getRouteAdminPortalClient().then((value) => {
            expect(value).to.be.equal(url)
        })
    })

    Then(/^I checking number of users in table to be "([^"]*)"$/, async (tableUsers: number) => {
        await adminPortalClient.coutnNumberOfUsers().then((value) => {
            // browser.sleep(3000)
            tableUsers = Number(tableUsers)
            // console.log('*****' + value, typeof(tableUsers))
            expect(value).to.be.equal(tableUsers)
            // browser.sleep(3000)
        })
    })





});
