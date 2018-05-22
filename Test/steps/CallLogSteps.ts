import {defineSupportCode} from 'cucumber'
import {CallLog, locatorsCallLog} from "../pages/CallLogPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var callLog = new CallLog
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check CallLog route "([^"]*)"$/,async (url: string) =>{
        await callLog.getRouteCallLog().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })

    When(/^I click on DownloadButton$/,async () =>{
        await callLog.clickDownloadButton();
    })


});
