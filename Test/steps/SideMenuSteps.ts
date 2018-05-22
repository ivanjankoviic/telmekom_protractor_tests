import { defineSupportCode } from 'cucumber'
// import { locatorsLoginPage } from "../pages/LoginPage";
import { SideMenu, locatorsSideMenu } from "../pages/SideMenuPage";
import { expect } from 'chai'
import { browser, element, by, protractor } from 'protractor';
import { httpFactory } from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var sideMenu = new SideMenu
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    When(/^I click on Activity Log$/,async () =>{
        await sideMenu.clickActivityLog();
    })

    When(/^I click on Invoices$/,async () =>{
        await sideMenu.clickInvoices();
    })

    When(/^I click on Services$/,async () =>{
        await sideMenu.clickServices();        
    })

    When(/^I click on Tickets$/,async () =>{
        await sideMenu.clickTickets();        
    })

    When(/^I click on CallLog$/,async () =>{
        await sideMenu.clickCallLog(); 
    })

    When(/^I click on Orders$/,async () =>{
        await sideMenu.clickOrders();
        // await browser.sleep(2000)
    })


});
