import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {Services, locatorsServices} from "../pages/ServicesPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var services = new Services
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check IdServicesRoute "([^"]*)"$/,async (url: string) =>{
        await services.getRouteIdServices().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    Then(/^I check IdServicesDataRoute "([^"]*)"$/,async (url: string) =>{
        await services.getRouteIdServicesData().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    Then(/^I check IdServicesVoiceRoute "([^"]*)"$/,async (url: string) =>{
        await services.getRouteIdServicesVoice().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    Then(/^I check IdServicesMiscRoute "([^"]*)"$/,async (url: string) =>{
        await services.getRouteIdServicesMisc().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    When(/^I click on Data Services$/,async () =>{
        await services.clickDataService()  
    })

    When(/^I click on Voice Services$/,async () =>{
        await services.clickVoiceService()  
    })

    When(/^I click on Misc Services$/,async () =>{
        await services.clickMiscService()  
    })

});
