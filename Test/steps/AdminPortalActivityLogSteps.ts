import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {ActivityLog, locatorsActivityLog} from "../pages/AdminPortalActivityLogPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var activityLog = new ActivityLog
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check Activity Log route "([^"]*)"$/,async (url: string) =>{
        await activityLog.getRouteActivityLog().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })
    

        
    
});
