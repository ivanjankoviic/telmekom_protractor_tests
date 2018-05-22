import {defineSupportCode} from 'cucumber'
import {LoginPage, locatorsLoginPage} from "../pages/LoginPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
// import { until } from 'selenium-webdriver';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var loginPage = new LoginPage();
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    
    
    Given(/^I navigate to Telmekom aplication$/, async()=>{
        await browser.get("http://telmekom-client-staging2.digitalcube.rs/")
    } )

    Then(/^I check login route "([^"]*)"$/,async (url: string) =>{
        await loginPage.getRouteLogin().then((value)=> {
            expect(value).to.be.equal(url)
        })
    })

    When(/^I click on forgot password$/, async() =>{
        await loginPage.ElementLocator(locatorsLoginPage.ForgotPasswordButton).click();
    } )

    Then(/^I check forgot password route "([^"]*)"$/,async (url: string) =>{
        await loginPage.getRouteForgotPassword().then((value)=> {
            expect(value).to.be.equal(url)
        })
    })

    When(/^I fill in username with "([^"]*)"$/, async(username: string) =>{
        await browser.sleep(500)

     //   await browser.wait(until.elementToBeClickable(loginPage.ElementLocator(locatorsLoginPage.Username)), 10000).then((ele) =>{
      //      console.log(ele, 'eeeeeeeee----------------------');
      //      loginPage.ElementLocator(locatorsLoginPage.Username).sendKeys(username);
      //  })

     await loginPage.ElementLocator(locatorsLoginPage.Username).sendKeys(username)



    } )

    When (/^I fill in password with "([^"]*)"$/, async(passowrd: string) =>{
        await loginPage.ElementLocator(locatorsLoginPage.Password).sendKeys(passowrd)
    } )

    When (/^I press Login$/, async() =>{
        await loginPage.ElementLocator(locatorsLoginPage.LoginButton).click();       
    } )

    When (/^I refresh page$/, async() =>{
        await loginPage.refreshPage();       
    } )

    Then(/^I expect "([^"]*)"$/,async (text: string) =>{
        await loginPage.checkErrorMessage().then((value)=> {
            expect(value).to.be.equal(text)
        })
    })

    Then(/^I expect under username field "([^"]*)"$/,async (text: string) =>{
        await loginPage.checkErrorMessageUsername().then((value)=> {
            expect(value).to.be.equal(text)
        })
    })

    Then(/^I expect under password field "([^"]*)"$/,async (text: string) =>{
        await loginPage.checkErrorMessagePassword().then((value)=> {
            expect(value).to.be.equal(text)
        })
    })

    Then(/^I expect under usernameForgotPassword field "([^"]*)"$/,async (text: string) =>{
        await loginPage.checkErorrMessageUsernameForgotPassword().then((value)=> {
            expect(value).to.be.equal(text)
        })
    })

    When (/^I click show-pass-eye$/, async() =>{
        await loginPage.clickShowPassEye();       
    } )

    When(/^I click username input field$/, async() =>{
        await loginPage.ElementLocator(locatorsLoginPage.Username).click()
        // await browser.sleep(20000)
    } )

    When(/^I click password input field$/, async() =>{
        await loginPage.ElementLocator(locatorsLoginPage.Password).click()
    } )

    When(/^I click on login card$/, async() =>{
        await element(by.css('.login-card')).click()
    } )

    When(/^I click on Sign In button$/, async() =>{
        await loginPage.clickSignIn()
    } )

    Then(/^I expect type to be type "([^"]*)"$/,async (text: string) =>{
        await loginPage.getTypePassword().then((value)=> {
            expect(value).to.be.equal(text)
        })
    })

    Then(/^I check title to be "([^"]*)"$/,async (title: string) =>{
        await browser.sleep(700)
        await loginPage.getTitle().then((value)=> {
            expect(value).to.be.equal(title)
        })        
    })






});
