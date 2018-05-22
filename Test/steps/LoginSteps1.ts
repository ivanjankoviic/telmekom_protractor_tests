import {defineSupportCode} from 'cucumber'
import {LoginPage1, locatorsLoginPage1} from "../pages/LoginPage1";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
// import { until } from 'selenium-webdriver';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var loginPage1 = new LoginPage1();
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    
    
    Given(/^I navigate to OOBlife aplication$/, async()=>{
        await browser.get("http://sm.ooblife.com/")
    } )


    When(/^I fill in username in OOBxxx with "([^"]*)"$/, async(username1: string) =>{
        await browser.sleep(500)
        await loginPage1.ElementLocator(locatorsLoginPage1.LoginButtonOOB).sendKeys(username1)
        // await browser.sleep(2000)

    } )


    When(/^I fill in password in OOBxxx with "([^"]*)"$/, async(password1: string) =>{
        // await browser.sleep(500)
        await loginPage1.ElementLocator(locatorsLoginPage1.PasswordOOB).sendKeys(password1)
        await browser.sleep(2000)

    } )

    Then(/^I check OOB login route "([^"]*)"$/,async (url: string) =>{
        await loginPage1.getRouteLoginOOB().then((value)=> {
            expect(value).to.be.equal(url)
        })
    })










});
