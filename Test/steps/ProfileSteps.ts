import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {Profile, locatorsProfile} from "../pages/ProfilePage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var profile = new Profile
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check Profile route "([^"]*)"$/,async (url: string) =>{
        await profile.getRouteProfile().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })
        
    Then(/^I check IdProfile route "([^"]*)"$/,async (url: string) =>{
        await profile.getRouteIdProfile().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    // When(/^I click on client$/,async () =>{
    //     await profile.clickACRServicePicture()
    //     })      
        
    When(/^I click on client1$/,async () =>{
        await profile.clickFREILogisticsPicture()
        })  

});
