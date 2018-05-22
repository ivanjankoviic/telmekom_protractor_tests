import { defineSupportCode } from 'cucumber'
// import { locatorsLoginPage } from "../pages/LoginPage";
import { Header, locatorsHeader } from "../pages/HeaderPage";
import { expect } from 'chai'
import { browser, element, by, protractor } from 'protractor';
import { httpFactory } from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var header = new Header
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    


    When(/^I click on user Profile Picture$/,async () =>{
        await header.clickProfilePicture();
    })

    When(/^I click on Logout$/,async () =>{
        // await browser.sleep(1250);  
        await header.clickLogout();
    })


    When(/^I click on Profile button$/,async () =>{
        await header.clickProfileButton();
    })

    When(/^I click on arrow to open side menu$/,async () =>{
        await header.openSideMenu();
    })

    // TODO: skinuti timeout 
    When(/^I click to select language$/,async () =>{
        await header.clickOpenLanguage();
        // await browser.sleep(250);
    })

    When(/^I click to overlay backdrop-background$/,async () =>{
        await header.clickCloseBackground();
    })

    When(/^I click to select English language$/,async () =>{
        await header.clickEnglishLanguage();
    })

    When(/^I click to select German language$/,async () =>{
        await header.clickGermanLanguage();
    })

    When(/^I click to select Italian language$/,async () =>{
        await header.clickItalianLanguage();
    })

    When(/^I click on super-admin-menu$/,async () =>{
        await header.clickSuperAdminMenu();
        // await browser.sleep(1250);  
    })




});
