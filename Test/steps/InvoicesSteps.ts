import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {Invoices, locatorsInvoices} from "../pages/InvoicesPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var invoices = new Invoices
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check IdInvoicesroute "([^"]*)"$/,async (url: string) =>{
        await invoices.getRouteIdInvoices().then((value)=> {
            expect(value).to.be.equal(url)
        })        
    })
    
    When (/^I click on Other Invoices$/, async() =>{
        await invoices.clickOtherInvoices();       
    } ) 
        
    When (/^I click on Next Page$/, async() =>{
        await invoices.clickNextPageTable();       
    } ) 

    When (/^I click on Previous Page$/, async() =>{
        await invoices.clickPreviousPageTable();       
    } ) 




});
