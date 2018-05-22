import {defineSupportCode} from 'cucumber'
import {ClientPortal, locatorsClientPortal} from "../pages/ClientPortalPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var clientPortal = new ClientPortal
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check Client Portal route "([^"]*)"$/,async (url: string) =>{
        await clientPortal.getRouteClientPortal().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    When(/^I enter the date in the calendar "([^"]*)" and press ENTER$/,async (daySearch: string) =>{
        await clientPortal.calendarFieldInput(daySearch)
        // await browser.sleep(2000)
    })

    Then(/^I check header titile to be "([^"]*)"$/,async (text: string) =>{
        await clientPortal.getHeadingClientText().then((value)=> {
            expect(value).to.be.equal(text)
        })        
    })




});
